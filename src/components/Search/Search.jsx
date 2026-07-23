import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading"

function Search() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchMovie(value) {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=42d680170bbe94ae3b3f58a4c434cd19&query=${value}`,
      );

      setResults(data.results);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <div className="relative w-full sm:w-80">
      <input
        type="text"
        placeholder="Search movies, TV shows, people..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchMovie(e.target.value);
        }}
        className="w-full rounded-xl bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 second-font"
      />
      {(results.length > 0 || loading) && (
        <div className="absolute top-full left-0 mt-2 w-full bg-gray-900 rounded-xl shadow-xl border border-gray-700 max-h-[450px] overflow-y-auto z-50">
          {loading ? (
            <div className="py-6 flex justify-center">
              <Loading />
            </div>
          ) : (
            results.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to={`/itemdetails/${item.media_type}/${item.id}`}
                onClick={() => {
                  setQuery("");
                  setResults([]);
                }}
                className="flex items-center gap-3 p-3 hover:bg-gray-800 transition"
              >
                <img
                  src={
                    item.poster_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/w185${
                          item.poster_path || item.profile_path
                        }`
                      : "https://placehold.co/60x90?text=No+Image"
                  }
                  alt={item.title || item.name}
                  className={`object-cover ${
                    item.media_type === "person"
                      ? "w-16 h-16 rounded-full"
                      : "w-14 h-20 rounded-lg"
                  }`}
                />

                <div className="flex-1">
                  <h3 className="font-semibold third-font">{item.title || item.name}</h3>

                  <p className="text-sm text-gray-400 capitalize">
                    {item.media_type}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.release_date?.slice(0, 4) ||
                      item.first_air_date?.slice(0, 4) ||
                      ""}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search