/**
 * SimulationTab — Interactive port sustainability scoring tool
 * Design: Two-column layout — form (left) + live results (right)
 * Features:
 * - Score buttons 0/1/2/3 per indicator (visual, not dropdowns)
 * - Accordion per SDG with thematic area grouping
 * - Live radar chart + gauge + per-SDG progress bars
 * - Tooltip showing criteria for each score option
 */

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, RotateCcw, TrendingUp, Award, Download, FileJson, Printer } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { SDG_DATA, getAllIndicators, getMaxScore, getPerformanceLabel, TOTAL_MAX_SCORE } from "@/lib/sdgData";

// ─── Score Button ─────────────────────────────────────────────────────────────

const SCORE_STYLES = [
  { active: "bg-red-600 border-red-600 text-white shadow-sm", inactive: "border-red-200 text-red-600 hover:bg-red-50" },
  { active: "bg-orange-500 border-orange-500 text-white shadow-sm", inactive: "border-orange-200 text-orange-600 hover:bg-orange-50" },
  { active: "bg-yellow-500 border-yellow-500 text-white shadow-sm", inactive: "border-yellow-200 text-yellow-600 hover:bg-yellow-50" },
  { active: "bg-green-600 border-green-600 text-white shadow-sm", inactive: "border-green-200 text-green-600 hover:bg-green-50" },
];

function ScoreButton({
  score,
  selected,
  onClick,
  criteria,
}: {
  score: 0 | 1 | 2 | 3;
  selected: boolean;
  onClick: () => void;
  criteria: string;
}) {
  const styles = SCORE_STYLES[score];
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className={`w-9 h-9 rounded-lg text-sm font-bold border-2 transition-all duration-150 ${selected ? styles.active : styles.inactive}`}
        >
          {score}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[220px]">
        <p className="text-xs leading-relaxed">{criteria}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// ─── Gauge Component ──────────────────────────────────────────────────────────

function ScoreGauge({ pct, score, maxScore }: { pct: number; score: number; maxScore: number }) {
  const perf = getPerformanceLabel(pct);
  const radius = 54;
  const circumference = Math.PI * radius; // half circle
  const strokeDashoffset = circumference * (1 - pct / 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-24">
        <svg viewBox="0 0 120 68" className="w-full h-full" style={{ overflow: "visible" }}>
          {/* Background arc */}
          <path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <motion.path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke={perf.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - pct / 100) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <motion.span
            key={score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-black"
            style={{ color: perf.color }}
          >
            {score}
          </motion.span>
          <span className="text-xs text-slate-400 -mt-0.5">of {maxScore} pts</span>
        </div>
      </div>
      <div className="mt-1 text-center">
        <span
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: `${perf.color}18`, color: perf.color }}
        >
          {perf.label}
        </span>
        <p className="text-xs text-slate-400 mt-1">{pct.toFixed(1)}% of maximum</p>
      </div>
    </div>
  );
}

// ─── Per-SDG Progress Bar ─────────────────────────────────────────────────────

function SDGProgressBar({ sdg, score, maxScore }: { sdg: (typeof SDG_DATA)[0]; score: number; maxScore: number }) {
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0"
        style={{ backgroundColor: sdg.color }}
      >
        {sdg.number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <span className="text-xs font-medium text-slate-600 truncate">{sdg.shortName}</span>
          <span className="text-xs font-bold text-slate-700 ml-2 shrink-0">{score}/{maxScore}</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: sdg.color }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Indicator Row in Simulation ─────────────────────────────────────────────

function SimIndicatorRow({
  indicator,
  currentScore,
  onScore,
}: {
  indicator: { id: string; code: string; name: string; criteria: { score: 0|1|2|3; label: string }[] };
  currentScore: number;
  onScore: (score: number) => void;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0 group">
      <span className="font-mono text-xs text-slate-400 mt-2.5 min-w-[2.5rem] shrink-0">{indicator.code}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-700 leading-snug mb-2">{indicator.name}</p>
        <div className="flex gap-1.5">
          {([0, 1, 2, 3] as const).map((s) => (
            <ScoreButton
              key={s}
              score={s}
              selected={currentScore === s}
              onClick={() => onScore(s)}
              criteria={indicator.criteria[s]?.label ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SDG Section in Simulation ────────────────────────────────────────────────

function SimSDGSection({
  sdg,
  scores,
  onScore,
}: {
  sdg: (typeof SDG_DATA)[0];
  scores: Record<string, number>;
  onScore: (indicatorId: string, score: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const allIndicators = getAllIndicators(sdg);
  const maxScore = getMaxScore(sdg);
  const currentScore = allIndicators.reduce((sum, ind) => sum + (scores[ind.id] ?? 0), 0);
  const pct = maxScore > 0 ? (currentScore / maxScore) * 100 : 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 transition-colors text-left"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
          style={{ backgroundColor: sdg.color }}
        >
          {sdg.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-bold text-slate-800">{sdg.shortName}</span>
            <span className="text-xs font-semibold text-slate-500 ml-2">{currentScore}/{maxScore}</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: sdg.color }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100">
              {sdg.areas.map((area) => (
                <div key={area.id}>
                  <div
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${sdg.color}10`, color: sdg.textColor }}
                  >
                    {area.name}
                  </div>
                  <div className="px-4">
                    {area.indicators.map((ind) => (
                      <SimIndicatorRow
                        key={ind.id}
                        indicator={ind}
                        currentScore={scores[ind.id] ?? 0}
                        onScore={(s) => onScore(ind.id, s)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main SimulationTab ───────────────────────────────────────────────────────

export default function SimulationTab() {
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleScore = useCallback((indicatorId: string, score: number) => {
    setScores((prev) => ({ ...prev, [indicatorId]: score }));
  }, []);

  const handleReset = useCallback(() => {
    setScores({});
  }, []);

  // Compute per-SDG scores
  const sdgScores = useMemo(() => {
    return SDG_DATA.map((sdg) => {
      const indicators = getAllIndicators(sdg);
      const current = indicators.reduce((sum, ind) => sum + (scores[ind.id] ?? 0), 0);
      const max = getMaxScore(sdg);
      return { sdg, current, max, pct: max > 0 ? (current / max) * 100 : 0 };
    });
  }, [scores]);

  const totalScore = useMemo(() => sdgScores.reduce((sum, s) => sum + s.current, 0), [sdgScores]);
  const totalPct = TOTAL_MAX_SCORE > 0 ? (totalScore / TOTAL_MAX_SCORE) * 100 : 0;

  // Radar chart data
  const radarData = useMemo(() => {
    return sdgScores.map((s) => ({
      subject: `SDG ${s.sdg.number}`,
      score: s.pct,
      fullMark: 100,
    }));
  }, [sdgScores]);

  const answeredCount = useMemo(() => Object.keys(scores).length, [scores]);
  const totalIndicators = SDG_DATA.reduce((sum, sdg) => sum + getAllIndicators(sdg).length, 0);
  const unansweredCount = totalIndicators - answeredCount;

  // Export: one row per indicator, with the score given (blank when not answered)
  const buildRows = useCallback(() => {
    const rows: { sdg: string; area: string; code: string; indicator: string; score: number | ""; max: number }[] = [];
    SDG_DATA.forEach((sdg) => {
      sdg.areas.forEach((area) => {
        area.indicators.forEach((ind) => {
          rows.push({ sdg: `SDG ${sdg.number} ${sdg.name}`, area: area.name, code: ind.code, indicator: ind.name,
            score: ind.id in scores ? scores[ind.id] : "", max: 3 });
        });
      });
    });
    return rows;
  }, [scores]);

  const downloadBlob = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  const stamp = () => new Date().toISOString().slice(0, 10);

  const exportCSV = useCallback(() => {
    const rows = buildRows();
    const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
    const lines = [["SDG", "Thematic area", "Code", "Indicator", "Score (0-3)", "Max"].map(esc).join(",")];
    rows.forEach((r) => lines.push([r.sdg, r.area, r.code, r.indicator, r.score, r.max].map(esc).join(",")));
    lines.push("");
    sdgScores.forEach((s) => lines.push([`SDG ${s.sdg.number} subtotal`, "", "", "", s.current, s.max].map(esc).join(",")));
    lines.push(["Overall", "", "", "", totalScore, TOTAL_MAX_SCORE].map(esc).join(","));
    lines.push(["Overall %", "", "", "", totalPct.toFixed(1), ""].map(esc).join(","));
    lines.push(["Indicators answered", "", "", "", answeredCount, totalIndicators].map(esc).join(","));
    downloadBlob("\uFEFF" + lines.join("\n"), `sdg-attributes-assessment-${stamp()}.csv`, "text/csv;charset=utf-8");
  }, [buildRows, sdgScores, totalScore, totalPct, answeredCount, totalIndicators]);

  const exportJSON = useCallback(() => {
    const payload = {
      tool: "SDG Attributes, Port Sustainability Assessment Framework",
      reference: "Cunha et al. (2025), Marine Policy 181, 106841",
      exported_at: new Date().toISOString(),
      scale: "0-3 per indicator; unanswered indicators count as 0 in the totals",
      overall: { score: totalScore, max: TOTAL_MAX_SCORE, pct: Number(totalPct.toFixed(1)), label: getPerformanceLabel(totalPct).label },
      answered: answeredCount, total_indicators: totalIndicators,
      by_sdg: sdgScores.map((s) => ({ sdg: s.sdg.number, name: s.sdg.name, score: s.current, max: s.max, pct: Number(s.pct.toFixed(1)) })),
      indicators: buildRows(),
    };
    downloadBlob(JSON.stringify(payload, null, 2), `sdg-attributes-assessment-${stamp()}.json`, "application/json");
  }, [buildRows, sdgScores, totalScore, totalPct, answeredCount, totalIndicators]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Form */}
      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-800">Port Assessment</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select a score (0–3) for each indicator. Hover over a score to view its criteria.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </Button>
        </div>

        {/* Progress indicator */}
        <div className="bg-white rounded-xl border border-slate-200 p-3 mb-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Completion</span>
            <span className="font-semibold text-slate-700">{answeredCount}/{totalIndicators} indicators scored</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#1B4F72] rounded-full"
              animate={{ width: `${(answeredCount / totalIndicators) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {SDG_DATA.map((sdg) => (
          <SimSDGSection
            key={sdg.id}
            sdg={sdg}
            scores={scores}
            onScore={handleScore}
          />
        ))}
      </div>

      {/* Right: Results Panel (sticky) */}
      <div className="lg:w-80 xl:w-96 shrink-0">
        <div className="lg:sticky lg:top-4 space-y-4">
          {/* Overall Score */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#1B4F72]" />
              <h3 className="text-sm font-bold text-slate-800">Overall Score</h3>
            </div>
            <ScoreGauge pct={totalPct} score={totalScore} maxScore={TOTAL_MAX_SCORE} />
            <p className="text-[11px] text-slate-500 mt-3 leading-snug">
              All 84 indicators weigh equally (0–3 each), so an SDG with more indicators weighs more in the overall score.
              {unansweredCount > 0 && (
                <> {unansweredCount} unanswered indicator{unansweredCount > 1 ? "s" : ""} currently count as 0.</>
              )}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5" onClick={exportCSV} disabled={answeredCount === 0}>
                <Download className="w-3.5 h-3.5" /> CSV
              </Button>
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5" onClick={exportJSON} disabled={answeredCount === 0}>
                <FileJson className="w-3.5 h-3.5" /> JSON
              </Button>
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5" onClick={() => window.print()}>
                <Printer className="w-3.5 h-3.5" /> Print / PDF
              </Button>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#1B4F72]" />
              <h3 className="text-sm font-bold text-slate-800">Sustainability Profile</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 11, fill: "#64748B", fontWeight: 500 }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#1B4F72"
                  fill="#1B4F72"
                  fillOpacity={0.18}
                  strokeWidth={2}
                />
                <RechartsTooltip
                  formatter={(v: number) => [`${v.toFixed(1)}%`, "Score"]}
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Per-SDG Breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Score by SDG</h3>
            <div className="space-y-3">
              {sdgScores.map(({ sdg, current, max }) => (
                <SDGProgressBar key={sdg.id} sdg={sdg} score={current} maxScore={max} />
              ))}
            </div>
          </div>

          {/* Performance Legend */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Performance Levels</h3>
            <div className="space-y-1.5">
              {[
                { range: "≥ 80%", label: "Excellent", color: "#16a34a" },
                { range: "60–79%", label: "Good", color: "#2563eb" },
                { range: "40–59%", label: "Moderate", color: "#d97706" },
                { range: "20–39%", label: "Incipient", color: "#dc2626" },
                { range: "< 20%", label: "Critical", color: "#7f1d1d" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                  <span className="text-xs font-semibold" style={{ color: p.color }}>{p.label}</span>
                  <span className="text-xs text-slate-400 ml-auto">{p.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
