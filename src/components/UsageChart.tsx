import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type UsageChartProps = {
  data: {
    bulan: string;
    gb: number;
  }[];
  kuota: {
    terpakai: number;
    total: number;
  };
};

export default function UsageChart({ data, kuota }: UsageChartProps) {
  const percentageUsed = ((kuota.terpakai / kuota.total) * 100).toFixed(1);

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col'>
      <h3 className='text-lg font-semibold text-slate-800 mb-1'>
        Riwayat Penggunaan Data
      </h3>
      <p className='text-slate-500 text-sm mb-4'>
        Total penggunaan bulan ini:{' '}
        <span className='font-bold text-slate-700'>{kuota.terpakai} GB</span>{' '}
        dari {kuota.total} GB.
      </p>
      <div className='w-full bg-slate-200 rounded-full h-2.5 mb-4'>
        <div
          className='bg-sky-500 h-2.5 rounded-full'
          style={{ width: `${percentageUsed}%` }}
        ></div>
      </div>
      <div className='flex-grow min-h-[250px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='bulan'
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis fontSize={12} tickLine={false} axisLine={false} unit=' GB' />
            <Tooltip
              cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '0.75rem',
                boxShadow:
                  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '14px' }} />
            <Bar
              dataKey='gb'
              name='Penggunaan (GB)'
              fill='#0ea5e9'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
