import { videos, creators } from "../data/mockData";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const categories = [
    "All", "Gaming", "Music", "Live", "React Routers", "Tailwind CSS", "Podcasts", "News", "Recent"
  ];

  return (
    <div className="pb-8">
      
      {/* Top Category Pills */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              index === 0 
                ? "bg-white text-black" 
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {videos.map((video) => {
          // Find the creator that matches the video's creatorId
          const creator = creators[video.creatorId];
          
          return (
            <VideoCard 
              key={video.id} 
              video={video} 
              creator={creator} 
            />
          );
        })}
      </div>
      
    </div>
  );
}