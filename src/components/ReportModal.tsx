import { useState } from 'react';

type ReportModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  if (!isOpen) return null;

  let [issueType, setIssueType] = useState('');
  let [description, setDescription] = useState('');
  let [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Laporan Terkirim:', { issueType, description });
    setIsSubmitted(true);
    // Di aplikasi nyata, ini akan mengirim data ke server
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setIssueType('');
      setDescription('');
    }, Math.random() * 2000 + 1000);
  }

  let options = [
    { label: 'Internet Lambat', value: 'internet-lambat' },
    { label: 'Koneksi Sering Terputus', value: 'koneksi-putus' },
    { label: 'Tidak Ada Koneksi Sama Sekali', value: 'tidak-ada-koneksi' },
    { label: 'Lainnya', value: 'lainnya' },
  ];

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
      <div
        className='bg-white rounded-2xl shadow-xl w-full max-w-md p-8 m-4 transform transition-all'
        onClick={(e) => e.stopPropagation()}
      >
        {isSubmitted ? (
          <div className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 text-green-500 mx-auto mb-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <h3 className='text-2xl font-bold text-slate-800'>
              Laporan Terkirim!
            </h3>
            <p className='text-slate-500 mt-2'>
              Terima kasih. Tim kami akan segera menindaklanjuti laporan Anda.
            </p>
          </div>
        ) : (
          <>
            <h2 className='text-2xl font-bold text-slate-800 mb-2'>
              Lapor Gangguan
            </h2>
            <p className='text-slate-500 mb-6'>
              Mohon jelaskan gangguan yang Anda alami.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='issueType'
                  className='block text-sm font-medium text-slate-700 mb-1'
                >
                  Jenis Gangguan
                </label>
                <select
                  id='issueType'
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className='w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
                  required
                >
                  <option value='' disabled selected>
                    Pilih jenis gangguan...
                  </option>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-slate-700 mb-1'
                >
                  Deskripsi
                </label>
                <textarea
                  id='description'
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
                  placeholder='Contoh: Koneksi internet sangat lambat sejak tadi pagi...'
                  required
                ></textarea>
              </div>
              <div className='flex justify-end gap-3'>
                <button
                  type='button'
                  onClick={onClose}
                  className='px-4 py-2 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 font-semibold'
                >
                  Batal
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 font-semibold'
                >
                  Kirim Laporan
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
