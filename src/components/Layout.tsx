import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}
    >
      <header>
        <Navbar />
      </header>
      <div style={{ flexGrow: '1' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
