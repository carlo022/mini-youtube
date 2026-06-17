import { FiHome, FiCompass, FiPlayCircle, FiClock, FiThumbsUp, FiFolder } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const mainLinks = [
  { name: "Home", icon: <FiHome size={20} />, path: "/" },
  { name: "Shorts", icon: <FiCompass size={20} />, path: "/" },
  { name: "Subscriptions", icon: <FiPlayCircle size={20} />, path: "/" },
];

const secondaryLinks = [
  { name: "Library", icon: <FiFolder size={20} />, path: "/" },
  { name: "History", icon: <FiClock size={20} />, path: "/" },
  { name: "Liked Videos", icon: <FiThumbsUp size={20} />, path: "/" },
];

// Accept the props from Layout
export default function Sidebar({ isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <>
      {/* Dark background overlay for mobile. Clicking it closes the menu. */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-[#0f0f0f] flex flex-col overflow-y-auto pb-4
          transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile-only header (Logo) so it looks like a real drawer */}
        <div className="flex items-center gap-1 p-4 lg:hidden border-b border-gray-800">
          <SiYoutube size={28} className="text-red-600" />
          <span className="text-xl font-bold tracking-tighter">YouTube</span>
        </div>

        {/* Top section links */}
        <div className="p-3 border-b border-gray-800">
          {mainLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => toggleMobileMenu()} // Close menu on click for mobile
              className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-gray-800 transition"
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Bottom section links */}
        <div className="p-3">
          {secondaryLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => toggleMobileMenu()} // Close menu on click for mobile
              className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-gray-800 transition"
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Footer Text */}
        <div className="px-6 py-4 text-xs text-gray-500 font-semibold mt-auto">
          <p>© 2026 Mini Tube LLC</p>
        </div>
      </aside>
    </>
  );
}