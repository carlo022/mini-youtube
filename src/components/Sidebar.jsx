import { FiHome, FiCompass, FiPlayCircle, FiClock, FiThumbsUp, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";

// We define link groups as arrays to easily map over them
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

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0f0f0f] hidden lg:flex flex-col overflow-y-auto pb-4">
      {/* Top section links */}
      <div className="p-3 border-b border-gray-800">
        {mainLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
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
            className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Footer Text */}
      <div className="px-6 py-4 text-xs text-gray-500 font-semibold">
        <p>© 2026 Mini Tube LLC</p>
      </div>
    </aside>
  );
}