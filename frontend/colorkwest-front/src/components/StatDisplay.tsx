import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

type StatDisplayProps = {
  str: number;
  dex: number;
  cha: number;
  int: number;
};

export function StatDisplay({ str, dex, cha, int }: StatDisplayProps) {
  const data = [
    {
      subject: 'Intelligence',
      val: int,
    },
    {
      subject: 'Strength',
      val: str,
    },
    {
      subject: 'Dexterity',
      val: dex,
    },
    {
      subject: 'Charisma',
      val: cha,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          startAngle={135}
          endAngle={-225}
          data={data}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
              <stop offset="0%" stopColor="#006FFD" stopOpacity={1} />
              <stop offset="100%" stopColor="#EC9007" stopOpacity={1} />
            </linearGradient>
          </defs>
          <PolarAngleAxis dataKey="subject" />
          <PolarGrid opacity={0.3} />
          <Radar name="statChart" dataKey="val" fill="url(#colorUv)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}
