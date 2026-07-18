/**
 * IndicatorsTab — Reference view for all 84 indicators across 8 SDGs
 * Design: Cards per SDG with accordion for thematic areas and indicator tables
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Info } from "lucide-react";
import { SDG_DATA, getAllIndicators, getMaxScore, type SDG, type ThematicArea } from "@/lib/sdgData";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Score badge colors
const SCORE_COLORS = [
  { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", label: "0" },
  { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200", label: "1" },
  { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200", label: "2" },
  { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", label: "3" },
];

function ScoreBadge({ score }: { score: 0 | 1 | 2 | 3 }) {
  const c = SCORE_COLORS[score];
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold border ${c.bg} ${c.text} ${c.border}`}>
      {score}
    </span>
  );
}

function IndicatorRow({ indicator }: { indicator: { id: string; code: string; name: string; criteria: { score: 0|1|2|3; label: string }[] } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left group"
      >
        <span className="font-mono text-xs text-slate-400 mt-0.5 min-w-[2.5rem]">{indicator.code}</span>
        <span className="flex-1 text-sm text-slate-700 font-medium leading-snug">{indicator.name}</span>
        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-400 transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-xs">
              <p className="text-xs">Click to view scoring criteria</p>
            </TooltipContent>
          </Tooltip>
          {open ? (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 ml-[2.5rem]">
              <div className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="text-left px-3 py-2 font-semibold text-slate-600 w-16">Score</th>
                      <th className="text-left px-3 py-2 font-semibold text-slate-600">Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indicator.criteria.map((c) => (
                      <tr key={c.score} className="border-b border-slate-100 last:border-0 hover:bg-white transition-colors">
                        <td className="px-3 py-2">
                          <ScoreBadge score={c.score} />
                        </td>
                        <td className="px-3 py-2 text-slate-600 leading-relaxed">{c.label}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AreaSection({ area, sdgColor }: { area: ThematicArea; sdgColor: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg text-left"
      >
        <div className="w-1.5 h-4 rounded-full" style={{ backgroundColor: sdgColor }} />
        <span className="flex-1 text-sm font-semibold text-slate-700">{area.name}</span>
        <span className="text-xs text-slate-400 mr-2">{area.indicators.length} indicators</span>
        {open ? (
          <ChevronDown className="w-4 h-4 text-slate-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-400" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 bg-white rounded-lg border border-slate-100 overflow-hidden">
              {area.indicators.map((ind) => (
                <IndicatorRow key={ind.id} indicator={ind} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SDGCard({ sdg }: { sdg: SDG }) {
  const [expanded, setExpanded] = useState(false);
  const totalIndicators = getAllIndicators(sdg).length;
  const maxScore = getMaxScore(sdg);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
    >
      {/* Card Header */}
      <div
        className="px-5 py-4 cursor-pointer hover:opacity-95 transition-opacity"
        style={{ backgroundColor: sdg.bgColor, borderBottom: `3px solid ${sdg.color}` }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-sm"
              style={{ backgroundColor: sdg.color }}
            >
              {sdg.number}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: sdg.textColor }}>
                SDG {sdg.number}
              </p>
              <h3 className="text-base font-bold leading-tight" style={{ color: sdg.textColor }}>
                {sdg.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3 text-right">
            <div>
              <p className="text-2xl font-black" style={{ color: sdg.color }}>{totalIndicators}</p>
              <p className="text-xs font-medium" style={{ color: sdg.textColor }}>indicators</p>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform"
              style={{ backgroundColor: `${sdg.color}20` }}
            >
              {expanded ? (
                <ChevronDown className="w-4 h-4" style={{ color: sdg.color }} />
              ) : (
                <ChevronRight className="w-4 h-4" style={{ color: sdg.color }} />
              )}
            </div>
          </div>
        </div>

        {/* Area tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {sdg.areas.map((area) => (
            <span
              key={area.id}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: `${sdg.color}20`, color: sdg.textColor }}
            >
              {area.name}
            </span>
          ))}
        </div>

        {/* Max score info */}
        <div className="mt-2 flex items-center gap-1 text-xs" style={{ color: sdg.textColor }}>
          <span className="opacity-60">Max score:</span>
          <span className="font-bold">{maxScore} pts</span>
          <span className="opacity-60 ml-2">({totalIndicators} × 3)</span>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {sdg.areas.map((area) => (
                <AreaSection key={area.id} area={area} sdgColor={sdg.color} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IndicatorsTab() {
  return (
    <div>
      {/* Overview stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "SDGs Covered", value: "8", sub: "SDGs 7, 8, 9, 11, 12, 13, 14, 17" },
          { label: "Total Indicators", value: "84", sub: "Across all dimensions" },
          { label: "Thematic Areas", value: "20", sub: "Grouped by SDG" },
          { label: "Score Scale", value: "0–3", sub: "Per indicator" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-4"
          >
            <p className="text-3xl font-black text-[#1B4F72]">{stat.value}</p>
            <p className="text-sm font-semibold text-slate-700 mt-0.5">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Scoring guide */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-8">
        <h3 className="text-sm font-bold text-slate-700 mb-3">Scoring Scale</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { score: 0, label: "No evidence of action", desc: "The port does not address the indicator or lacks available information.", color: "bg-red-50 border-red-200 text-red-800" },
            { score: 1, label: "Initial action", desc: "Activities initiated but limited in scope, pilot-based, or not yet systematically integrated.", color: "bg-orange-50 border-orange-200 text-orange-800" },
            { score: 2, label: "Consolidated action", desc: "Consistent and structured measures implemented, with evidence of operational integration.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
            { score: 3, label: "Best practice", desc: "Comprehensive, systematic implementation aligned with international best practices.", color: "bg-green-50 border-green-200 text-green-800" },
          ].map((s) => (
            <div key={s.score} className={`rounded-lg border p-3 ${s.color}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-md bg-white/60 flex items-center justify-center text-xs font-black">{s.score}</span>
                <span className="text-xs font-bold">{s.label}</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SDG Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {SDG_DATA.map((sdg, i) => (
          <motion.div
            key={sdg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
          >
            <SDGCard sdg={sdg} />
          </motion.div>
        ))}
      </div>

      {/* Citation */}
      <div className="mt-8 bg-[#1B4F72]/5 border border-[#1B4F72]/15 rounded-xl p-4">
        <p className="text-xs text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-700">Reference:</span> Cunha, D.R., Costa, M.D.C., Oliveira, C.B.M., & Pereira, N.N. (2025). SDG attributes: A sustainability assessment framework for Brazilian ports. <em>Marine Policy</em>, 181, 106841. <a href="https://doi.org/10.1016/j.marpol.2025.106841" target="_blank" rel="noopener noreferrer" className="text-[#1B4F72] hover:underline">https://doi.org/10.1016/j.marpol.2025.106841</a>
        </p>
      </div>
    </div>
  );
}
