import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Drake", value: 95 },
  { name: "Kendrick", value: 42 },
];

const lineData = [
  { year: "2010", Drake: 30, Kendrick: 25 },
  { year: "2013", Drake: 50, Kendrick: 60 },
  { year: "2016", Drake: 85, Kendrick: 55 },
  { year: "2018", Drake: 95, Kendrick: 48 },
  { year: "2023", Drake: 88, Kendrick: 40 },
  { year: "2024", Drake: 92, Kendrick: 35 },
];

const pieData = [
  { name: "Drake makes better music", value: 45 },
  { name: "Drake has better vibes", value: 30 },
  { name: "The data says so", value: 15 },
  { name: "Personal preference (Drake)", value: 10 },
];

const radarData = [
  { metric: "Catchiness", Drake: 98, Kendrick: 65 },
  { metric: "Quotability", Drake: 95, Kendrick: 72 },
  { metric: "Replay Value", Drake: 97, Kendrick: 68 },
  { metric: "Mood Setting", Drake: 99, Kendrick: 60 },
  { metric: "Aux Worthiness", Drake: 100, Kendrick: 55 },
  { metric: "Vibe Energy", Drake: 96, Kendrick: 58 },
];

const COLORS_DRAKE = ["#5BA8E0", "#8B7FB8", "#D4AF37", "#4A97CF"];

const tooltipStyle = {
  backgroundColor: "#1A1F2E",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "0.5rem",
  color: "#fff",
};

const tickStyle = { fill: "#cbd5e1", fontSize: 12 };

function ChartCard({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/30">
      <h3 className="mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
        {title}
      </h3>
      <div className="w-full h-[260px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-white/55 text-center">{caption}</p>
    </div>
  );
}

export function DataVisualizationSection() {
  return (
    <section
      id="charts"
      aria-labelledby="charts-title"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#0A0E1A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="charts-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            The <span className="text-[#E8C76A]">Science</span> Speaks
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Dashboard-grade analysis with unquestionable integrity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ChartCard
            title="Songs Played at Parties Where People Actually Dance"
            caption="*Methodology peer-reviewed by one guy in a hoodie"
          >
            <BarChart data={barData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" stroke="#cbd5e1" tick={tickStyle} />
              <YAxis stroke="#cbd5e1" tick={tickStyle} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(91,168,224,0.08)" }} />
              <Bar dataKey="value" fill="#5BA8E0" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ChartCard>

          <ChartCard
            title="Emotional Damage Over Time"
            caption="*Higher is better (according to this specific chart)"
          >
            <LineChart data={lineData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="year" stroke="#cbd5e1" tick={tickStyle} />
              <YAxis stroke="#cbd5e1" tick={tickStyle} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: "#e2e8f0", fontSize: 13 }} />
              <Line
                type="monotone"
                dataKey="Drake"
                stroke="#5BA8E0"
                strokeWidth={3}
                dot={{ fill: "#5BA8E0", r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Kendrick"
                stroke="#C8553D"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#C8553D", r: 4 }}
              />
            </LineChart>
          </ChartCard>

          <ChartCard
            title="Reasons Drake Wins According to This Website"
            caption="*Data may include vibes, memories, and selective listening"
          >
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ percent }) => `${((percent ?? 0) * 100).toFixed(0)}%`}
                outerRadius="75%"
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_DRAKE[index % COLORS_DRAKE.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: "#e2e8f0", fontSize: 12 }} />
            </PieChart>
          </ChartCard>

          <ChartCard
            title="The Vibes-Based Performance Matrix"
            caption="*Scientifically calibrated to personal taste"
          >
            <RadarChart data={radarData} margin={{ top: 8, right: 16, left: 16, bottom: 0 }}>
              <PolarGrid stroke="rgba(255,255,255,0.15)" />
              <PolarAngleAxis dataKey="metric" stroke="#cbd5e1" tick={{ fill: "#e2e8f0", fontSize: 11 }} />
              <PolarRadiusAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: "#94a3b8", fontSize: 10 }} />
              <Radar name="Drake" dataKey="Drake" stroke="#5BA8E0" fill="#5BA8E0" fillOpacity={0.5} />
              <Radar
                name="Kendrick"
                dataKey="Kendrick"
                stroke="#C8553D"
                fill="#C8553D"
                fillOpacity={0.2}
              />
              <Legend wrapperStyle={{ color: "#e2e8f0", fontSize: 13 }} />
            </RadarChart>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
