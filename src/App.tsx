import './App.css';

import { useEffect, useState } from 'react';

import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import mockUserData from './data.json';

export default function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login dari localStorage untuk persistensi sesi sederhana
  useEffect(function () {
    let loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') setIsLoggedIn(true);
  }, []);

  function handleLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <div id='App'>
      {isLoggedIn ? (
        <DashboardPage user={mockUserData} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}
