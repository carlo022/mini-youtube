import { useParams } from "react-router-dom";
import { videos, creators } from "../data/mockData";
import VideoCard from "../components/VideoCard";

export default function Profile() {
  const { id } = useParams();

  // Find the creator data
  const creator = creators[id];

  // If no creator is found, show fallback
  if (!creator) {
    return <div className="flex justify-center mt-20 text-xl font-bold">Creator not found</div>;
  }

  // Filter videos to show only those belonging to this creator
  const creatorVideos = videos.filter((video) => video.creatorId === id);

  return (
    <div className="flex flex-col w-full pb-10">
      
      {/* 1. Creator Banner */}
      <div className="w-full h-32 sm:h-48 md:h-60 rounded-2xl overflow-hidden mb-6 bg-gray-800">
        <img 
          src={creator.banner} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Creator Info Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 mb-8">
        <img 
          src={creator.avatar} 
          alt={creator.name} 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0f0f0f]"
        />
        <div className="flex flex-col text-center md:text-left mt-2">
          <h1 className="text-3xl font-bold">{creator.name}</h1>
          <div className="text-gray-400 text-sm mt-1">
            <span>{creator.handle}</span>
            <span className="mx-2">•</span>
            <span>{creator.subscribers} subscribers</span>
          </div>
          <p className="text-gray-400 text-sm mt-2 max-w-xl">
            Welcome to my channel! I post high-quality content about technology, coding, and lifestyle. Thanks for supporting the journey.
          </p>
          <div className="mt-4 flex gap-3 justify-center md:justify-start">
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
              Subscribe
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs (Simple) */}
      <div className="flex border-b border-gray-800 mb-6 overflow-x-auto">
        {["Home", "Videos", "Shorts", "Live", "Playlists", "Community"].map((tab) => (
          <button 
            key={tab} 
            className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
              tab === "Videos" ? "border-white text-white" : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 4. Creator's Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-2">
        {creatorVideos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            creator={creator} 
          />
        ))}
      </div>

      {creatorVideos.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          This creator hasn't uploaded any videos yet.
        </div>
      )}

    </div>
  );
}