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

const healthCards = [
  {
    title: "Sales Health",
    accent: "text-purple-700",
    score: "82",
    status: "Strong",
    scoreColor: "text-purple-700 bg-purple-50 border-purple-100",
    metrics: [
      ["Lead → First Visit", "40%", "↑ 6pp", "green"],
      ["SCP → NCM", "43%", "↓ 2pp", "red"],
      ["NCM → Recurring", "71%", "↑ 5pp", "green"],
    ],
    insight: "Conversion remains healthy, with SCP → NCM as the current watch point.",
  },
  {
    title: "Marketing Health",
    accent: "text-purple-700",
    score: "88",
    status: "High ROI",
    scoreColor: "text-purple-700 bg-purple-50 border-purple-100",
    metrics: [
      ["Email Open Rate", "54%", "↑ 6pp", "green"],
      ["Paid Ad ROAS", "4.1x", "↑ 0.6x", "green"],
      ["CAC", "$16.38", "↓ 8%", "green"],
    ],
    insight: "Marketing is producing efficient demand with strong campaign ROI.",
  },
  {
    title: "Retention & Stability",
    accent: "text-orange-600",
    score: "76",
    status: "Watch",
    scoreColor: "text-orange-700 bg-orange-50 border-orange-100",
    metrics: [
      ["Freeze Rate", "4.2%", "↑ 0.6pp", "yellow"],
      ["Churn Rate", "1.8%", "↓ 0.2pp", "green"],
      ["Stability", "87%", "↑ 3pp", "green"],
    ],
    insight: "Overall retention is stable, but freeze movement needs monitoring.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex">
      <aside className="w-72 shrink-0 bg-gradient-to-b from-purple-100 via-violet-50 to-white border-r border-purple-100 p-5 flex flex-col justify-between">
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
              <div
                key={label}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  active
                    ? "bg-purple-200/80 text-purple-800 shadow-sm"
                    : "text-purple-950 hover:bg-purple-100/70"
                }`}
              >
                <span>{icon}</span>
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

      <main className="flex-1 p-8 space-y-7 overflow-x-hidden">
        <header className="flex items-start justify-between border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Revenue Command Center</h1>
            <p className="text-slate-500 mt-1 text-lg">
              Executive overview of Nooma Studios performance
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm text-sm font-semibold">
              📅 May 1 – May 31, 2025⌄
            </button>
            <button className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm text-sm font-semibold">
              ▽ Filters
            </button>
          </div>
        </header>

        <section>
          <SectionTitle title="Executive Snapshot" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4">
            <SnapshotCard icon="$" title="Revenue MTD" value="$436,006" change="↑ 22%" color="bg-purple-600 text-white" />
            <SnapshotCard icon="◎" title="Revenue vs Goal" value="108%" change="↑ 8pp" color="bg-green-100 text-green-700" sub="Goal: $403,000" />
            <SnapshotCard icon="↗" title="Forecasted Month End" value="$512,000" change="↑ 18%" color="bg-purple-100 text-purple-700" sub="Forecast confidence: High" />
            <SnapshotCard icon="↻" title="Recurring Revenue %" value="71%" change="↑ 5pp" color="bg-orange-100 text-orange-700" />
            <SnapshotCard icon="👥" title="Net Member Growth" value="+342" change="↑ 16%" color="bg-cyan-100 text-cyan-700" />
            <SnapshotCard icon="♢" title="Revenue Health Score" value="8.7/10" change="Healthy" color="bg-green-100 text-green-700" />
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {healthCards.map((card) => (
            <HealthCard key={card.title} card={card} />
          ))}
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle title="Studio Performance" noMargin />
            <button className="text-purple-700 font-bold text-sm">View All Studios →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
            {studioCards.map((studio) => (
              <StudioCard key={studio.name} studio={studio} />
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <SectionTitle title="Revenue Intelligence" noMargin />
            <button className="text-purple-700 font-bold text-sm">View All Insights →</button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full min-w-[900px] text-sm">
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
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${row.color}`}>
                          {row.icon}
                        </span>
                        <span className="font-medium text-slate-700">{row.insight}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {row.category}
                      </span>
                    </td>
                    <td className={`py-3 px-4 font-bold ${row.impact === "Medium" ? "text-orange-600" : "text-green-700"}`}>
                      {row.impact}
                    </td>
                    <td className={`py-3 px-4 font-bold ${row.trend.includes("Negative") ? "text-red-600" : "text-green-700"}`}>
                      {row.trend}
                    </td>
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
  return (
    <h2 className={`text-lg font-black uppercase tracking-wide text-purple-700 ${noMargin ? "" : "mb-3"}`}>
      {title}
    </h2>
  );
}

function SnapshotCard({ icon, title, value, change, color, sub }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm min-h-[150px]">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 ${color}`}>
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase text-slate-600 leading-tight">{title}</p>
          <div className="flex items-end gap-2 mt-3">
            <p className="text-3xl font-black whitespace-nowrap">{value}</p>
            <p className="text-sm font-bold text-green-700 whitespace-nowrap">{change}</p>
          </div>
          <p className="text-xs text-slate-500 mt-4 leading-snug">
            {sub || "vs Apr 1 – Apr 30, 2025"}
          </p>
        </div>
      </div>
    </div>
  );
}

function HealthCard({ card }) {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-5">
        <h3 className={`text-xl font-black uppercase leading-tight ${card.accent}`}>
          {card.title}
        </h3>
        <button className="text-purple-700 text-sm font-bold whitespace-nowrap">
          View Full Report →
        </button>
      </div>

      <div className="flex items-center justify-between gap-5 mb-5">
        <div className={`rounded-2xl border p-5 w-36 text-center ${card.scoreColor}`}>
          <p className="text-xs font-black uppercase tracking-wide">Health Score</p>
          <p className="text-5xl font-black mt-2">{card.score}</p>
          <p className="text-sm font-bold mt-1">{card.status}</p>
        </div>

        <div className="flex-1 space-y-3">
          {card.metrics.map(([label, value, change, status]) => (
            <HealthMetric key={label} label={label} value={value} change={change} status={status} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 p-4">
        <p className="text-xs uppercase font-black text-slate-400 mb-1">CRO Insight</p>
        <p className="text-sm font-semibold text-slate-700 leading-relaxed">{card.insight}</p>
      </div>
    </div>
  );
}

function HealthMetric({ label, value, change, status }) {
  const color =
    status === "red"
      ? "text-red-600 bg-red-50"
      : status === "yellow"
      ? "text-yellow-700 bg-yellow-50"
      : "text-green-700 bg-green-50";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
      <div>
        <p className="text-sm font-bold text-slate-700">{label}</p>
        <p className={`inline-flex mt-1 px-2 py-1 rounded-full text-xs font-bold ${color}`}>{change}</p>
      </div>
      <p className="text-2xl font-black">{value}</p>
    </div>
  );
}

function StudioCard({ studio }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-black text-slate-900">{studio.name}</h3>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${studio.healthColor}`}>
          {studio.health}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm">
        <MiniMetric label="Revenue MTD" value={studio.revenue} change={studio.change1} />
        <MiniMetric label="Recurring %" value={studio.recurring} change={studio.change2} />
        <MiniMetric label="Lead → Recurring" value={studio.conversion} change={studio.change3} />
      </div>

      <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
  <span className="text-xs text-slate-500 font-semibold">
    Updated 2h ago
  </span>

  <button className="text-purple-700 font-bold text-sm">
    View Studio →
  </button>
</div>

    <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
  <span className="text-xs text-slate-500 font-semibold">
    Updated 2h ago
  </span>

  <button className="text-purple-700 font-bold text-sm">
    View Studio →
  </button>
</div>
    </div>
  );
}

function MiniMetric({ label, value, change }) {
  return (
    <div>
      <p className="text-[10px] text-slate-500 font-bold leading-tight">{label}</p>
      <p className="text-lg font-black mt-1">{value}</p>
      <p className={`text-xs font-bold mt-1 ${change.includes("↓") ? "text-red-600" : "text-green-700"}`}>
        {change}
      </p>
    </div>
  );
}

function Sparkline({ color, fill }) {
  const points = [12, 18, 16, 24, 20, 22, 18, 26, 30, 21, 25, 19, 23, 27, 22, 28, 31];
  const polyline = points.map((p, i) => `${i * 12},${50 - p}`).join(" ");

  return (
    <div className={`mt-5 rounded-xl ${fill} p-2`}>
      <svg viewBox="0 0 200 55" className="w-full h-14">
        <polyline
          points={polyline}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className={color}
        />
      </svg>
    </div>
  );
}
