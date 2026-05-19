import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Sales");

  const tabs = ["Executive", "Sales", "Marketing", "Revenue Engine"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-wide">NOOMA STUDIOS</h1>
          <p className="text-xs tracking-[0.35em] font-bold text-slate-500">REVENUE COMMAND CENTER</p>
        </div>

        <nav className="bg-white border border-slate-200 rounded-2xl p-1 shadow-sm flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
          May 1 – May 31, 2026
        </div>
      </header>

      <main className="p-8 max-w-[1600px] mx-auto space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Column title="Sales Health" subtitle="Are leads converting?" color="text-blue-700">
            <KpiGrid
              items={[
                ["Leads", "1,240", "+18% vs Apr"],
                ["Lead → First Visit", "40%", "+6pp vs Apr"],
                ["SCP → NCM", "43%", "-2pp vs Apr"],
                ["NCM → Recurring", "71%", "+5pp vs Apr"],
              ]}
            />

            <Card title="Pipeline Funnel">
              <div className="grid grid-cols-2 gap-6 items-center">
                <div className="space-y-5">
                  <Metric number="1,240" label="Leads" />
                  <Metric number="502" label="First Visits" />
                  <Metric number="214" label="Intro Packages" />
                  <Metric number="143" label="Recurring Members" />
                </div>
                <div className="space-y-3">
                  <div className="h-16 bg-blue-700 rounded-t-xl mx-0" />
                  <div className="h-16 bg-blue-500 rounded-lg mx-6" />
                  <div className="h-16 bg-blue-300 rounded-lg mx-12" />
                  <div className="h-16 bg-blue-100 rounded-b-xl mx-20" />
                </div>
              </div>
            </Card>

            <Card title="Studio Leaderboard">
              <SimpleTable
                headers={["Studio", "Leads", "Conv.", "Revenue", "Health"]}
                rows={[
                  ["Rogers", "184", "42%", "$82,400", "Healthy"],
                  ["Fayetteville", "170", "39%", "$71,300", "Watch"],
                  ["Dallas", "156", "33%", "$53,100", "Watch"],
                  ["Bentonville", "142", "45%", "$61,800", "Healthy"],
                ]}
              />
            </Card>

            <Card title="Sales Alerts">
              {[
                "42 leads untouched > 12 hours",
                "17 SCP buyers attended 3+ classes without upgrade convo",
                "Dallas intro conversion below benchmark",
                "5 NCMs at risk of churn",
              ].map((alert) => (
                <p key={alert} className="border-b border-slate-100 py-3 text-sm font-medium">
                  ⚠️ {alert}
                </p>
              ))}
            </Card>
          </Column>

          <Column title="Marketing Health" subtitle="Is marketing creating quality demand?" color="text-purple-700">
            <KpiGrid
              items={[
                ["Email Open Rate", "54%", "+8pp vs Apr"],
                ["Click Rate", "8.2%", "+1.3pp vs Apr"],
                ["SMS Response Rate", "21%", "+4pp vs Apr"],
                ["Cost Per Lead", "$9.34", "-18% vs Apr"],
              ]}
            />

            <Card title="Active Campaigns">
              <SimpleTable
                headers={["Campaign", "Leads", "Revenue", "Open", "CTR", "ROI"]}
                rows={[
                  ["Summer Sweat Club", "184", "$31,200", "54%", "8.2%", "4.2x"],
                  ["Bring Your Friend", "92", "$12,400", "61%", "11%", "3.8x"],
                  ["Intro Offer — May", "72", "$8,900", "48%", "7.1%", "2.9x"],
                  ["Mother’s Day Promo", "38", "$5,300", "52%", "6.2%", "2.4x"],
                ]}
              />
            </Card>

            <Card title="Paid Ads Performance">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Meta Ads", "$3,240", "4,620", "186", "$17.42"],
                  ["Google Ads", "$2,180", "2,910", "123", "$17.72"],
                  ["TikTok Ads", "$1,420", "1,890", "98", "$14.49"],
                  ["Influencers", "$860", "—", "35", "$24.57"],
                ].map(([name, spend, clicks, leads, cpl]) => (
                  <div key={name} className="border border-slate-200 rounded-2xl p-4">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm mt-3"><b>{spend}</b> Spend</p>
                    <p className="text-sm"><b>{clicks}</b> Clicks</p>
                    <p className="text-sm"><b>{leads}</b> Leads</p>
                    <p className="text-sm"><b>{cpl}</b> CPL</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Content Engine">
              <div className="grid grid-cols-4 gap-4 text-center">
                <Metric number="14" label="Posts" />
                <Metric number="42" label="Stories" />
                <Metric number="3" label="Emails" />
                <Metric number="5" label="SMS" />
              </div>
            </Card>
          </Column>

          <Column title="Revenue Engine" subtitle="What is actually driving revenue?" color="text-orange-600">
            <KpiGrid
              items={[
                ["Revenue MTD", "$436,006", "+22% vs Apr"],
                ["Marketing ROI", "4.1x", "+0.6x vs Apr"],
                ["CAC", "$16.38", "-15% vs Apr"],
                ["LTV / CAC", "6.2x", "+0.8x vs Apr"],
              ]}
            />

            <Card title="Campaign Impact on Revenue">
              <SimpleTable
                headers={["Campaign", "Leads", "Conv.", "Revenue", "Rev / Lead"]}
                rows={[
                  ["Summer Sweat Club", "184", "41%", "$31,200", "$169.57"],
                  ["Intro Event", "72", "62%", "$18,100", "$251.39"],
                  ["Paid Meta Ad", "310", "19%", "$11,300", "$36.45"],
                  ["Bring Your Friend", "92", "33%", "$12,400", "$134.78"],
                ]}
              />
            </Card>

            <Card title="Demand vs Conversion Heatmap">
              <div className="grid grid-cols-3 gap-2 text-xs text-center font-semibold">
                {[
                  ["Intro Event", "62%", "bg-green-100"],
                  ["Referral Program", "68%", "bg-green-100"],
                  ["Email Nurture", "35%", "bg-yellow-100"],
                  ["Summer Sweat Club", "41%", "bg-yellow-100"],
                  ["Local Partners", "27%", "bg-yellow-100"],
                  ["Paid Meta Ads", "19%", "bg-red-100"],
                  ["TikTok Ads", "16%", "bg-red-100"],
                  ["Retargeting", "12%", "bg-red-100"],
                  ["Influencer", "24%", "bg-yellow-100"],
                ].map(([label, value, color]) => (
                  <div key={label} className={`${color} rounded-2xl p-4 min-h-24 flex flex-col justify-center`}>
                    <p>{label}</p>
                    <p className="text-lg mt-2">{value}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Insights">
              {[
                "Intro Event has the highest conversion and revenue per lead.",
                "Paid Meta Ads drive high volume but low conversion.",
                "Referral Program has elite conversion but needs more volume.",
                "Focus budget on campaigns in the green and yellow zones.",
              ].map((insight) => (
                <div key={insight} className="bg-slate-50 rounded-2xl p-4 text-sm font-medium mb-3">
                  {insight}
                </div>
              ))}
            </Card>
          </Column>
        </div>
      </main>
    </div>
  );
}

function Column({ title, subtitle, color, children }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className={`text-xl font-bold uppercase tracking-wide ${color}`}>{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <button className="text-xs font-semibold text-blue-600">View All →</button>
      </div>
      {children}
    </div>
  );
}

function KpiGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(([label, value, change]) => (
        <div key={label} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase">{label}</p>
          <p className="text-3xl font-bold mt-3">{value}</p>
          <p className={`text-sm mt-2 ${change.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
            {change}
          </p>
        </div>
      ))}
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div>
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}

function SimpleTable({ headers, rows }) {
  return (
    <table className="w-full text-sm">
      <thead className="text-slate-500 text-xs uppercase">
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left pb-3">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")} className="border-t border-slate-100">
            {row.map((cell) => (
              <td key={cell} className="py-3 font-medium">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
