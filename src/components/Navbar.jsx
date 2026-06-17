import { FiMenu, FiSearch, FiMic, FiVideo, FiBell } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] sticky top-0 z-50">
      
      {/* Left Section: Menu & Logo */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-800 rounded-full transition">
          <FiMenu size={20} />
        </button>
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <SiYoutube size={28} className="text-red-600" />
          <span className="text-xl font-bold tracking-tighter hidden sm:block">YouTube</span>
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="hidden md:flex items-center flex-1 max-w-2xl ml-10">
        <div className="flex w-full border border-gray-700 rounded-full overflow-hidden bg-[#121212]">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-transparent px-4 py-2 outline-none text-white focus:border-blue-500"
          />
          <button className="px-5 bg-gray-800 border-l border-gray-700 hover:bg-gray-700 transition">
            <FiSearch size={20} />
          </button>
        </div>
        <button className="p-2 ml-4 bg-gray-800 hover:bg-gray-700 rounded-full transition">
          <FiMic size={20} />
        </button>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 hover:bg-gray-800 rounded-full hidden sm:block transition">
          <FiVideo size={20} />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full hidden sm:block transition">
          <FiBell size={20} />
        </button>
        {/* Placeholder for User Avatar */}
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer ml-2">
          <span className="text-sm font-medium">U</span>
        </div>
      </div>
      
    </nav>
  );
}