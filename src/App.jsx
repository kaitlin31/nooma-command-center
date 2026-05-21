import React from "react";

const studioCards = [
  { name: "Searcy", revenue: "$48,300", recurring: "70%", conversion: "8.6%", health: "Healthy", healthColor: "bg-green-100 text-green-700", line: "text-green-600", fill: "bg-green-50", change1: "↑ 18%", change2: "↑ 4pp", change3: "↑ 0.9pp" },
  { name: "Rogers", revenue: "$82,400", recurring: "72%", conversion: "9.1%", health: "Healthy", healthColor: "bg-green-100 text-green-700", line: "text-green-600", fill: "bg-green-50", change1: "↑ 24%", change2: "↑ 6pp", change3: "↑ 1.2pp" },
  { name: "Little Rock", revenue: "$64,200", recurring: "70%", conversion: "8.3%", health: "Healthy", healthColor: "bg-green-100 text-green-700", line: "text-green-600", fill: "bg-green-50", change1: "↑ 19%", change2: "↑ 4pp", change3: "↑ 0.8pp" },
  { name: "Fayetteville", revenue: "$71,300", recurring: "68%", conversion: "7.2%", health: "Watch", healthColor: "bg-yellow-100 text-yellow-700", line: "text-yellow-500", fill: "bg-yellow-50", change1: "↑ 12%", change2: "↓ 1pp", change3: "↓ 0.3pp" },
  { name: "Dallas", revenue: "$61,800", recurring: "74%", conversion: "9.8%", health: "Healthy", healthColor: "bg-green-100 text-green-700", line: "text-green-600", fill: "bg-green-50", change1: "↑ 28%", change2: "↑ 7pp", change3: "↑ 1.6pp" },
];

const intelligenceRows = [
  { icon: "↗", insight: "Dallas revenue is pacing 28% ahead of last month. Strongest studio momentum this week.", category: "Studio Performance", impact: "High", trend: "↑ Positive", updated: "2h ago", color: "bg-green-100 text-green-700" },
  { icon: "⚠", insight: "Freeze rate increased 0.6pp in Fayetteville. Monitor retention closely.", category: "Retention", impact: "Medium", trend: "↓ Negative", updated: "4h ago", color: "bg-yellow-100 text-yellow-700" },
  { icon: "📣", insight: "Summer Sweat Club campaign delivering 4.2x ROI. Top performing campaign this month.", category: "Marketing", impact: "High", trend: "↑ Positive", updated: "6h ago", color: "bg-purple-100 text-purple-700" },
  { icon: "👥", insight: "Lead response time improved company-wide. Now averaging 2.2 hours.", category: "Sales", impact: "High", trend: "↑ Positive", updated: "8h ago", color: "bg-cyan-100 text-cyan-700" },
  { icon: "$", insight: "Recurring revenue grew 5pp month over month. Strong stability trend.", category: "Revenue", impact: "High", trend: "↑ Positive", updated: "10h ago", color: "bg-blue-100 text-blue-700" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex">
      <aside className="w-72 shrink-0 bg-gradient-to-b from-purple-100 via-violet-50 to-white border-r border-purple-100 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-4xl font-black text-purple-700">N¹</div>
            <div>
              <p className="font-black tracking-[0.22em] text-purple-950">NOOMA</p>
              <p className="text-xs tracking-[0.35em] font-bold text-purple-900">STUDIOS</p>
            </div>
          </div>

          <nav className="space-y-2 text-sm font-semibold">
            {[
              ["⌂", "Revenue Command Center", true],
              ["↗", "Sales"],
              ["📣", "Marketing"],
              ["▢", "Retail"],
              ["▥", "Franchise Revenue"],
              ["⌖", "Studios"],
              ["▤", "Reports"],
              ["⚠", "Alerts"],
              ["◎", "Goals"],
              ["⚙", "Integrations"],
              ["⚙", "Settings"],
            ].map(([icon, label, active]) => (
              <div key={label} className={`flex items-center gap-3 rounded-xl px-4 py-3 ${active ? "bg-purple-200/80 text-purple-800 shadow-sm" : "text-purple-950 hover:bg-purple-100/70"}`}>
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </nav>
        </div>

        <div className="rounded-2xl bg-white/70 border border-purple-100 p-4 text-sm shadow-sm">
          <p className="font-semibold text-slate-700">Data last updated</p>
          <p className="mt-2 text-slate-600">May 31, 2025 8:30 AM</p>
          <div className="border-t border-purple-100 mt-4 pt-4 flex items-center gap-2 text-purple-800 font-semibold">
            <span>↻</span>
            <span>Auto-refresh on</span>
            <span className="w-2 h-2 rounded-full bg-green-500 ml-auto" />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 max-w-[1800px] mx-auto space-y-7 overflow-x-hidden">
        <header className="flex items-start justify-between border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950">Revenue Command Center</h1>
            <p className="text-slate-500 mt-1 text-lg">Executive overview of Nooma Studios performance</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm text-sm font-semibold">📅 May 1 – May 31, 2025⌄</button>
            <button className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm text-sm font-semibold">▽ Filters</button>
          </div>
        </header>

        <section>
          <SectionTitle title="Executive Snapshot" />
          <div className="grid grid-cols-6 gap-4">
            <SnapshotCard icon="$" title="Revenue MTD" value="$436,006" change="↑ 22%" color="bg-purple-600 text-white" />
            <SnapshotCard icon="◎" title="Revenue vs Goal" value="108%" change="↑ 8pp" color="bg-green-100 text-green-700" sub="Goal: $403,000" />
            <SnapshotCard icon="↗" title="Forecasted Month End" value="$512,000" change="↑ 18%" color="bg-purple-100 text-purple-700" sub="Forecast confidence: High" />
            <SnapshotCard icon="↻" title="Recurring Revenue %" value="71%" change="↑ 5pp" color="bg-orange-100 text-orange-700" />
            <SnapshotCard icon="👥" title="Net Member Growth" value="+342" change="↑ 16%" color="bg-cyan-100 text-cyan-700" />
            <SnapshotCard icon="♢" title="Revenue Health Score" value="8.7/10" change="Healthy" color="bg-green-100 text-green-700" />
          </div>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <DriverCard title="Sales Health" accent="text-purple-700" action="View Full Report →" icon="funnel" rows={[
            ["Leads", "1,240", "↑ 15%", "↑ 18%"],
            ["Lead → First Visit", "40%", "↑ 6pp", "↑ 5pp"],
            ["SCP → NCM", "43%", "↓ 2pp", "↑ 1pp"],
            ["NCM → Recurring", "71%", "↑ 5pp", "↑ 4pp"],
            ["Lead Response Time", "2.2 hrs", "", "↓ 1.2 hrs"],
            ["Pipeline Value", "$1.24M", "", "↑ 18%"],
          ]} />

          <DriverCard title="Marketing Health" accent="text-purple-700" action="View Full Report →" icon="pie" rows={[
            ["Email Open Rate", "54%", "↑ 6pp", "↑ 7pp"],
            ["SMS Open Rate", "82%", "↑ 4pp", "↑ 5pp"],
            ["Paid Ad ROAS", "4.1x", "↑ 0.6x", "↑ 1.1x"],
            ["CAC", "$16.38", "↓ 8%", "↓ 12%"],
            ["Marketing Spend", "$94,600", "↑ 15%", "↑ 18%"],
            ["Leads from Campaigns", "1,240", "↑ 22%", "↑ 25%"],
          ]} />

          <DriverCard title="Retention & Stability" accent="text-orange-600" action="View Full Report →" icon="shield" rows={[
            ["Freeze Rate", "4.2%", "↑ 0.6pp", "↓ 0.4pp"],
            ["Churn Rate", "1.8%", "↓ 0.2pp", "↓ 0.3pp"],
            ["Low Utilization", "312", "↑ 18%", "↑ 22%"],
            ["Utilization", "6.2", "↑ 0.6", "↑ 0.9"],
            ["Membership Stability", "87%", "↑ 3pp", "↑ 4pp"],
          ]} />
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle title="Studio Performance" noMargin />
            <button className="text-purple-700 font-bold text-sm">View All Studios →</button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {studioCards.map((studio) => <StudioCard key={studio.name} studio={studio} />)}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <SectionTitle title="Revenue Intelligence" noMargin />
            <button className="text-purple-700 font-bold text-sm">View All Insights →</button>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                <tr>
                  <th className="text-left py-3 px-4">Insight</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Impact</th>
                  <th className="text-left py-3 px-4">Trend</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {intelligenceRows.map((row) => (
                  <tr key={row.insight} className="border-t border-slate-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${row.color}`}>{row.icon}</span>
                        <span className="font-medium text-slate-700">{row.insight}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4"><span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">{row.category}</span></td>
                    <td className={`py-3 px-4 font-bold ${row.impact === "Medium" ? "text-orange-600" : "text-green-700"}`}>{row.impact}</td>
                    <td className={`py-3 px-4 font-bold ${row.trend.includes("Negative") ? "text-red-600" : "text-green-700"}`}>{row.trend}</td>
                    <td className="py-3 px-4 text-slate-500">{row.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ title, noMargin }) {
  return <h2 className={`text-lg font-black uppercase tracking-wide text-purple-700 ${noMargin ? "" : "mb-3"}`}>{title}</h2>;
}

function SnapshotCard({ icon, title, value, change, color, sub }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm min-h-[160px]">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 ${color}`}>{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-black uppercase text-slate-600 leading-tight">{title}</p>
          <div className="flex items-end gap-3 mt-3">
            <p className="text-[2rem] leading-none font-black whitespace-nowrap">{value}</p>
            <p className="text-sm font-bold text-green-700 whitespace-nowrap">{change}</p>
          </div>
          <p className="text-xs text-slate-500 mt-4 leading-snug">{sub || "vs Apr 1 – Apr 30, 2025"}</p>
        </div>
      </div>
    </div>
  );
}

function DriverCard({ title, accent, action, rows, icon }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[520px]">
      <div className="flex items-start justify-between mb-5 gap-4">
        <h3 className={`text-[24px] leading-tight font-black uppercase ${accent}`}>{title}</h3>
        <button className="text-purple-700 text-sm font-bold whitespace-nowrap">{action}</button>
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-6 items-center">
        <div className="flex items-center justify-center">
          {icon === "funnel" && <Funnel />}
          {icon === "pie" && <Pie />}
          {icon === "shield" && <Shield />}
        </div>
        <MetricRows rows={rows} />
      </div>
    </div>
  );
}

function MetricRows({ rows }) {
  return (
    <div className="text-sm">
      <div className="grid grid-cols-[1.4fr_110px_110px_90px] text-xs text-slate-500 pb-2 gap-2">
        <span />
        <span>This Month</span>
        <span>vs Last Month</span>
        <span>vs LY</span>
      </div>
      {rows.map(([metric, value, lm, ly]) => (
        <div key={metric} className="grid grid-cols-[1.4fr_110px_110px_90px] gap-2 border-t border-slate-100 py-3 items-center">
          <span className="font-semibold text-slate-700 leading-tight">{metric}</span>
          <span className="font-black">{value}</span>
          <span className={`font-bold ${String(lm).includes("↓") ? "text-red-600" : "text-green-700"}`}>{lm}</span>
          <span className={`font-bold ${String(ly).includes("↓") ? "text-red-600" : "text-green-700"}`}>{ly}</span>
        </div>
      ))}
    </div>
  );
}

function Funnel() {
  return <div className="space-y-2 w-24"><div className="h-12 bg-purple-700 rounded-t-sm" /><div className="h-12 bg-purple-500 mx-2" /><div className="h-12 bg-purple-300 mx-4" /><div className="h-12 bg-purple-200 mx-6" /><div className="h-12 bg-purple-100 mx-8 rounded-b-sm" /></div>;
}

function Pie() {
  return <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 via-purple-300 to-purple-100 border-4 border-purple-50" />;
}

function Shield() {
  return <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-4xl">🛡</div>;
}

function StudioCard({ studio }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-black text-slate-900">{studio.name}</h3>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${studio.healthColor}`}>{studio.health}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm">
        <MiniMetric label="Revenue MTD" value={studio.revenue} change={studio.change1} />
        <MiniMetric label="Recurring %" value={studio.recurring} change={studio.change2} />
        <MiniMetric label="Lead → Recurring" value={studio.conversion} change={studio.change3} />
      </div>
      <Sparkline color={studio.line} fill={studio.fill} />
      <div className="text-right mt-2">
        <button className="text-purple-700 font-bold text-sm">View Studio →</button>
      </div>
    </div>
  );
}

function MiniMetric({ label, value, change }) {
  return <div><p className="text-[10px] text-slate-500 font-bold leading-tight">{label}</p><p className="text-lg font-black mt-1">{value}</p><p className={`text-xs font-bold mt-1 ${change.includes("↓") ? "text-red-600" : "text-green-700"}`}>{change}</p></div>;
}

function Sparkline({ color, fill }) {
  const points = [12, 18, 16, 24, 20, 22, 18, 26, 30, 21, 25, 19, 23, 27, 22, 28, 31];
  const polyline = points.map((p, i) => `${i * 12},${50 - p}`).join(" ");
  return <div className={`mt-5 rounded-xl ${fill} p-2`}><svg viewBox="0 0 200 55" className="w-full h-14"><polyline points={polyline} fill="none" stroke="currentColor" strokeWidth="3" className={color} /></svg></div>;
}
