import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f0f0f] text-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* This is where Home, VideoDetail, and Profile will render */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}