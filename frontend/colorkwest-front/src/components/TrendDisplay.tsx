import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

type StatDisplayProps = {
  str: number;
  dex: number;
  cha: number;
  int: number;
};

export function TrendDisplay({ str, dex, cha, int }: StatDisplayProps) {

  const data = [{
    name: 'a',
    brain: cha + int,
    brawn: dex + str,
  }]

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout='vertical'
        >
          <XAxis type="number" hide={true} />
          <YAxis type="category" dataKey="name" hide={true} />
          <Bar dataKey="brain" stackId="a" fill="#EC9007" />
          <Bar dataKey="brawn" stackId="a" fill="#006FFD" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
