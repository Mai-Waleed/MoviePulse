import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'

function Movies() {
  const [upComing, setUpComing] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([])

  async function getMovies (type, callback) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
      );
      callback(
        data.results.map((movie) => ({
          ...movie,
          media_type: "movie",
        })),
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies("popular", setPopular);
    getMovies("now_playing", setNowPlaying);
    getMovies("upcoming", setUpComing);
  }, []);

  return (
    <>
      <div className="flex flex-wrap my-5">
        <div className="w-full md:w-1/3 flex items-center">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">Now Playing</h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Browse the latest movies currently showing in theaters and enjoy
              the newest cinematic experiences.
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {nowPlaying.slice(0, 10).map((movie, index) => (
          <MediaItem key={index} item={movie} />
        ))}
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex items-center">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">Upcoming Movies</h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Explore the most anticipated upcoming releases and get ready for
              the next generation of blockbuster films.
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {upComing.slice(0, 10).map((movie, index) => (
          <MediaItem key={index} item={movie} />
        ))}
      </div>

      <div className="flex flex-wrap my-5">
        <div className="w-full md:w-1/3 flex items-center">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">Popular Movies</h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Discover the most popular movies that audiences around the world
              are watching and talking about right now.
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {popular.slice(0, 10).map((movie, index) => (
          <MediaItem key={index} item={movie} />
        ))}
      </div>
    </>
  );
}

export default Movies