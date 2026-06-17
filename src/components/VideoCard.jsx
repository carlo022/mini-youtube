import { Link } from "react-router-dom";

export default function VideoCard({ video, creator }) {
  // Fallback in case creator data is missing
  if (!creator) return null;

  return (
    <div className="flex flex-col gap-3 group">
      {/* Thumbnail Link */}
      <Link 
        to={`/video/${video.id}`} 
        className="relative w-full aspect-video rounded-xl overflow-hidden block"
      >
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </Link>

      {/* Details Section */}
      <div className="flex gap-3 pr-2">
        {/* Creator Avatar Link */}
        <Link to={`/creator/${creator.id}`} className="flex-shrink-0 mt-1">
          <img 
            src={creator.avatar} 
            alt={creator.name} 
            className="w-9 h-9 rounded-full object-cover"
          />
        </Link>

        {/* Text Information */}
        <div className="flex flex-col overflow-hidden">
          {/* Video Title Link */}
          <Link to={`/video/${video.id}`}>
            <h3 className="text-white text-[15px] font-semibold line-clamp-2 leading-tight mb-1 group-hover:text-blue-400 transition-colors">
              {video.title}
            </h3>
          </Link>
          
          {/* Creator Name Link */}
          <Link 
            to={`/creator/${creator.id}`} 
            className="text-gray-400 text-[13px] hover:text-white transition-colors w-max"
          >
            {creator.name}
          </Link>

          {/* Views & Timestamp */}
          <div className="text-gray-400 text-[13px] flex items-center gap-1">
            <span>{video.views} views</span>
            <span className="text-[10px]">•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}