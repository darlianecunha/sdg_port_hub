/**
 * Home Page — SDG Attributes Port Sustainability Model
 * Design: Port Sustainability Dashboard
 * - Off-white background (#F8FAFC)
 * - Ocean Blue primary (#1B4F72)
 * - SDG official colors per dimension
 * - DM Sans typography
 * - Two main tabs: Indicators Reference | Simulation Tool
 */

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BarChart3, Anchor } from "lucide-react";
import IndicatorsTab from "@/components/IndicatorsTab";
import SimulationTab from "@/components/SimulationTab";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663332536845/kCrcvvxBSLFdAMLFRptnkf/port-hero-D5v7qeGmWJTYvfD2dPDesA.webp";

export default function Home() {
  const [activeTab, setActiveTab] = useState("indicators");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-[#1B4F72] text-white shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-none">SDG Attributes</h1>
              <p className="text-blue-200 text-xs mt-0.5 font-medium">Port Sustainability Assessment Framework</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-blue-200">
            <span>84 Indicators</span>
            <span className="w-1 h-1 bg-blue-400 rounded-full" />
            <span>8 SDGs</span>
            <span className="w-1 h-1 bg-blue-400 rounded-full" />
            <span>20 Thematic Areas</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Sustainable Brazilian port aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F72]/85 via-[#1B4F72]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-xl">
              <p className="text-blue-200 text-sm font-medium mb-2 tracking-wider uppercase">Marine Policy · Cunha et al. (2025)</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                A Sustainability Index for<br />Brazilian Ports
              </h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                Aligned with SDGs 7, 8, 9, 11, 12, 13, 14 and 17 — integrating 84 indicators across 20 thematic dimensions to evaluate port sustainability performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-white border border-slate-200 shadow-sm p-1 h-auto rounded-xl">
            <TabsTrigger
              value="indicators"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium data-[state=active]:bg-[#1B4F72] data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Indicators Reference</span>
            </TabsTrigger>
            <TabsTrigger
              value="simulation"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium data-[state=active]:bg-[#1B4F72] data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Simulation Tool</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="indicators" className="mt-0">
            <IndicatorsTab />
          </TabsContent>

          <TabsContent value="simulation" className="mt-0">
            <SimulationTab />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div>
            <span className="font-medium text-slate-700">SDG Attributes</span> — Cunha, D.R., Costa, M.D.C., Oliveira, C.B.M., Pereira, N.N. (2025)
          </div>
          <div className="text-xs">
            Marine Policy 181, 106841 · Federal University of Maranhão & Federal University of Fluminense
          </div>
        </div>
      </footer>
    </div>
  );
}
