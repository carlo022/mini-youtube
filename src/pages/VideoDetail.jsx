import { useParams, Link } from "react-router-dom";
import { FiThumbsUp, FiShare2, FiMoreHorizontal } from "react-icons/fi";
import { videos, creators } from "../data/mockData";
import VideoCard from "../components/VideoCard";

export default function VideoDetail() {
  const { id } = useParams();
  
  // Find the video and its associated creator
  const video = videos.find((v) => v.id === id);
  
  // If no video is found (e.g., bad URL), show a fallback
  if (!video) {
    return <div className="flex justify-center mt-20 text-xl font-bold">Video not found</div>;
  }

  const creator = creators[video.creatorId];
  
  // Get related videos (just all other videos excluding the current one)
  const relatedVideos = videos.filter((v) => v.id !== id);

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1600px] mx-auto pb-8">
      
      {/* Left Column: Video Player & Details */}
      <div className="flex-1">
        {/* Video Player Placeholder */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
            src={video.videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Title */}
        <h1 className="text-xl font-bold mt-4">{video.title}</h1>

        {/* Action Bar (Creator Info & Buttons) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-4">
          
          {/* Creator Profile Link & Subscribe */}
          <div className="flex items-center gap-4">
            <Link to={`/creator/${creator.id}`}>
              <img src={creator.avatar} alt={creator.name} className="w-10 h-10 rounded-full" />
            </Link>
            <div>
              <Link to={`/creator/${creator.id}`} className="font-bold hover:text-gray-300">
                {creator.name}
              </Link>
              <div className="text-xs text-gray-400">{creator.subscribers} subscribers</div>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full font-bold ml-2 hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition">
                <FiThumbsUp /> <span>12K</span>
              </button>
              <div className="w-[1px] h-6 bg-gray-600"></div>
              <button className="px-4 py-2 hover:bg-gray-700 transition rotate-180">
                <FiThumbsUp />
              </button>
            </div>
            <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <FiShare2 /> <span>Share</span>
            </button>
            <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
              <FiMoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-[#272727] hover:bg-[#3f3f3f] transition-colors cursor-pointer p-4 rounded-xl mt-4">
          <div className="font-bold text-sm mb-1">
            {video.views} views • {video.timestamp}
          </div>
          <p className="text-sm whitespace-pre-wrap">{video.description}</p>
        </div>
      </div>

      {/* Right Column: Suggested Videos */}
      <div className="w-full lg:w-[350px] xl:w-[400px] flex flex-col gap-4">
        <h3 className="font-bold text-lg mb-2 lg:hidden">Related Videos</h3>
        {relatedVideos.map((v) => (
          <VideoCard 
            key={v.id} 
            video={v} 
            creator={creators[v.creatorId]} 
          />
        ))}
      </div>
      
    </div>
  );
}