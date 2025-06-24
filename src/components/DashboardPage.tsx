import { useState } from 'react';

import ReportModal from './ReportModal';
import SummaryCard from './SummaryCard';
import UsageChart from './UsageChart';
import { InvoiceIcon, LogoutIcon, ReportIcon, WiFiIcon } from './icons/group';

type DashboardPageProps = {
  user: any;
  onLogout: () => void;
};

export default function DashboardPage({ user, onLogout }: DashboardPageProps) {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let { paket, tagihan, penggunaanData, kuotaBulanIni, name, customerId } =
    user;

  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='bg-white/80 backdrop-blur-lg sticky top-0 z-10 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                {name.charAt(0)}
              </div>
              <div>
                <h1 className='text-md font-semibold text-slate-800'>{name}</h1>
                <p className='text-xs text-slate-500'>{customerId}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className='flex items-center gap-2 text-sm text-slate-600 hover:text-sky-500 font-medium transition-colors'
            >
              <LogoutIcon />
              <span className='hidden sm:block'>Logout</span>
            </button>
          </div>
        </div>
      </header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-6'>
          <h2 className='text-3xl font-bold text-slate-800'>
            Selamat datang kembali, {name.split(' ')[0]}!
          </h2>
          <p className='text-slate-500 mt-1'>
            Ini adalah ringkasan status layanan internet Anda.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Card Paket Aktif */}
          <div className='lg:col-span-2'>
            <SummaryCard
              icon={<WiFiIcon />}
              title='Paket Aktif'
              value={paket.name}
            >
              <p className='text-sm text-slate-500'>{paket.description}</p>
            </SummaryCard>
          </div>

          {/* Card Tagihan */}
          <SummaryCard
            icon={<InvoiceIcon />}
            title='Status Tagihan'
            value={tagihan.status}
            colorClass={
              tagihan.status === 'Lunas' ? 'bg-green-500' : 'bg-red-500'
            }
          >
            <p className='text-sm text-slate-500'>
              {tagihan.status === 'Lunas'
                ? `Pembayaran berikutnya sebelum ${tagihan.jatuhTempo}.`
                : `Jatuh tempo pada ${tagihan.jatuhTempo}.`}
            </p>
            {tagihan.status !== 'Lunas' && (
              <button className='mt-3 w-full text-sm bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition'>
                Bayar Sekarang
              </button>
            )}
          </SummaryCard>

          {/* Card Lapor Gangguan */}
          <SummaryCard
            icon={<ReportIcon />}
            title='Butuh Bantuan?'
            value='Lapor Gangguan'
            colorClass='bg-amber-500'
          >
            <p className='text-sm text-slate-500'>
              Alami kendala? Laporkan segera agar tim kami bisa membantu.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className='mt-3 w-full text-sm bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition'
            >
              Buat Laporan
            </button>
          </SummaryCard>

          {/* Chart Penggunaan Data */}
          <div className='lg:col-span-4'>
            <UsageChart data={penggunaanData} kuota={kuotaBulanIni} />
          </div>
        </div>
      </main>
      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
