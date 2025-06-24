type SummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  children: React.ReactNode;
  colorClass?: string;
};

export default function SummaryCard({
  icon,
  title,
  value,
  children,
  colorClass = 'bg-sky-500',
}: SummaryCardProps) {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between'>
      <div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 ${colorClass}`}
        >
          {icon}
        </div>
        <p className='text-slate-500 text-sm font-medium'>{title}</p>
        <p className='text-slate-800 text-2xl font-bold'>{value}</p>
      </div>
      <div className='mt-4'>{children}</div>
    </div>
  );
}
