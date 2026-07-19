import React from "react";
import { Link } from "react-router-dom"

function MediaItem({ item, media_type }) {
  const imagePath = item.poster_path || item.profile_path;

  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/6 p-2 my-3">
      <Link to={`/itemdetails/${item.media_type}/${item.id}`}>
        <div className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
          <img
            src={
              imagePath
                ? `https://image.tmdb.org/t/p/w500${imagePath}`
                : "https://placehold.co/500x750/1f2937/ffffff?text=No+Image"
            }
            alt={item.title || item.name}
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />

          {item.vote_average > 0 && (
            <div className="absolute top-2 right-2 bg-sky-500 text-white px-2 py-1 rounded-md font-semibold z-20">
              <i className="fas fa-star mr-1"></i>
              {item.vote_average.toFixed(1)}
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-lg text-white font-bold mb-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 third-font">
              {item.title || item.name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MediaItem;
