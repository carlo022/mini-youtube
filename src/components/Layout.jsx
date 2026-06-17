import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  // State to track if the mobile sidebar is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f0f0f] text-white">
      {/* Pass the toggle function to the Navbar */}
      <Navbar toggleMobileMenu={toggleMobileMenu} />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Pass both the state and toggle function to the Sidebar */}
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen} 
          toggleMobileMenu={toggleMobileMenu} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}