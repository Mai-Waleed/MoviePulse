import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'

function ItemDetails() {
    let {id, media_type} = useParams();
    const [itemDetails, setItemDetails] = useState({})
    const [similarItems, setSimilarItems] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");
    const [showTrailer, setShowTrailer] = useState(false);
    
    async function getItemDetails(id, mediaType) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=42d680170bbe94ae3b3f58a4c434cd19`);
        setItemDetails(data)
    }

    async function getSimilar(id, mediaType) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
      );
      setSimilarItems(data.results);
    }

    async function getPersonWorks(id) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
      );
      setSimilarItems(data.cast);
    }

    async function getTrailer(id, mediaType) {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
        );

        const trailer = data.results.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser"),
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey("");
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=> {
        getItemDetails(id, media_type);
        if (itemDetails.title || itemDetails.name) {
          document.title = itemDetails.title || itemDetails.name;
        }
        if (media_type === "person") {
          getPersonWorks(id);
        } else {
          getSimilar(id, media_type);
          getTrailer(id, media_type);
        }
    }, [itemDetails])

  return (
    <>
      {/* Backdrop */}
      {(itemDetails.backdrop_path || itemDetails.profile_path) && (
        <div
          className="h-87.5 w-full rounded-2xl bg-cover bg-center relative mb-10"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              itemDetails.backdrop_path || itemDetails.profile_path
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10 -mt-40 relative z-20">
        {/* Poster */}
        <div className="lg:w-1/4 ml-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${
              itemDetails.poster_path || itemDetails.profile_path
            }`}
            className="rounded-2xl shadow-2xl w-full"
            alt=""
          />
        </div>

        {/* Details */}
        <div className="lg:w-3/4">
          <h1 className="text-5xl font-bold">
            {itemDetails.title || itemDetails.name}
          </h1>

          {(itemDetails.tagline || itemDetails.known_for_department) && (
            <p className="italic light-bg mt-2 second-font">
              {itemDetails.tagline || itemDetails.known_for_department}
            </p>
          )}

          {/* Genres */}
          <div className="flex flex-wrap gap-3 my-6 transition">
            {itemDetails.genres?.map((genre) => (
              <span key={genre.id} className="btn px-4 py-1 rounded-full">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 mb-6">
            {itemDetails.vote_average && (
              <div className="bg-[#1f2937] px-4 py-2 rounded-lg">
                ⭐ {itemDetails.vote_average.toFixed(1)}
              </div>
            )}

            {itemDetails.vote_count && (
              <div className="bg-[#1f2937] px-4 py-2 rounded-lg">
                👥 {itemDetails.vote_count}
              </div>
            )}

            {itemDetails.popularity && (
              <div className="bg-[#1f2937] px-4 py-2 rounded-lg">
                🔥 {itemDetails.popularity.toFixed(1)}
              </div>
            )}
          </div>

          {/* Overview */}
          {(itemDetails.overview || itemDetails.biography) && (
            <>
              <h3 className="text-2xl mb-3">Overview</h3>

              <p className="leading-8 text-gray-300/90 third-font font-semibold">
                {itemDetails.overview || itemDetails.biography}
              </p>
            </>
          )}

          {/* Extra Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 second-font">
            {itemDetails.release_date && (
              <div>
                <span className="text-sky-400">Release :</span>{" "}
                {itemDetails.release_date}
              </div>
            )}

            {itemDetails.first_air_date && (
              <div>
                <span className="text-sky-400">First Air :</span>{" "}
                {itemDetails.first_air_date}
              </div>
            )}

            {itemDetails.runtime && (
              <div>
                <span className="text-sky-400">Runtime :</span>{" "}
                {itemDetails.runtime} min
              </div>
            )}

            {itemDetails.number_of_seasons && (
              <div>
                <span className="text-sky-400">Seasons :</span>{" "}
                {itemDetails.number_of_seasons}
              </div>
            )}

            {itemDetails.number_of_episodes && (
              <div>
                <span className="text-sky-400">Episodes :</span>{" "}
                {itemDetails.number_of_episodes}
              </div>
            )}

            {itemDetails.status && (
              <div>
                <span className="text-sky-400">Status :</span>{" "}
                {itemDetails.status}
              </div>
            )}

            {itemDetails.original_language && (
              <div>
                <span className="text-sky-400">Language :</span>{" "}
                {itemDetails.original_language.toUpperCase()}
              </div>
            )}

            {itemDetails.place_of_birth && (
              <div>
                <span className="text-sky-400">Born :</span>{" "}
                {itemDetails.place_of_birth}
              </div>
            )}

            {itemDetails.birthday && (
              <div>
                <span className="text-sky-400">Birthday :</span>{" "}
                {itemDetails.birthday}
              </div>
            )}
          </div>

          {/* Homepage */}
          {itemDetails.homepage && (
            <a
              href={itemDetails.homepage}
              target="_blank"
              rel="noreferrer"
              className="btn inline-block mt-8 px-6 py-3 rounded-lg transition me-5"
            >
              Visit Homepage
            </a>
          )}

          {/* Watch Trailer */}
          {/* {trailerKey && (
            <a
              href={`https://www.youtube.com/watch?v=${trailerKey}`}
              target="_blank"
              rel="noreferrer"
              className="btn inline-block mt-4 ml-4 px-6 py-3 rounded-lg transition"
            >
              ▶ Watch Trailer
            </a>
          )} */}
          {trailerKey && (
            <button
              onClick={() => setShowTrailer(true)}
              className="btn mt-8 px-6 py-3 rounded-lg ml-5"
            >
              ▶ Watch Trailer
            </button>
          )}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          {media_type === "person"
            ? "Known For"
            : `Similar ${media_type === "movie" ? "Movies" : "TV Shows"}`}
        </h2>

        <div className="flex flex-wrap">
          {similarItems
            .filter((item) => item.poster_path || item.profile_path)
            .slice(0, 12)
            .map((item) => (
              <MediaItem
                key={item.id}
                item={{
                  ...item,
                  media_type: item.media_type || media_type,
                }}
              />
            ))}
        </div>
      </div>

      {showTrailer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-5xl">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetails