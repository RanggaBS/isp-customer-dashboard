import { useState } from 'react';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Simulasi login sederhana
    if (username !== 'pelanggan' || password !== '12345') {
      setError('Username atau password salah. Coba: pelanggan / 12345');
      return;
    }
    setError('');
    onLogin();
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-100 p-4'>
      <div className='w-full max-w-sm mx-auto'>
        <div className='bg-white p-8 rounded-2xl shadow-lg'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-sky-500'>LJN</h1>
            <p className='text-slate-500'>Portal Pelanggan</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label
                className='block text-slate-700 text-sm font-bold mb-2'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500'
                id='username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-slate-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500'
                id='password'
                type='password'
                placeholder='************'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error !== '' && (
              <p className='text-red-500 text-xs italic mb-4'>{error}</p>
            )}
            <div className='flex items-center justify-between'>
              <button
                className='w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors'
                type='submit'
              >
                Login
              </button>
            </div>
            <p className='text-center text-slate-400 text-xs mt-6'>
              Gunakan username: <strong>pelanggan</strong> & password:{' '}
              <strong>12345</strong>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
