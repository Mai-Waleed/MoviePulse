import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'

function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);

    async function getTrending(mediaType, callback) {
        let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
        );
        callback(data.results);
    }

    useEffect(() => {
        getTrending("movie", setTrendingMovies);
        getTrending("tv", setTrendingTv);
        getTrending("person", setTrendingPeople);
    }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">
              Trending Movies <br /> To watch Right Now
            </h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Most watched movies by days to watch right now
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {trendingMovies.slice(0, 10).map((movie, index) => (
          <MediaItem key={index} item={movie} media_type="movie" />
        ))}
      </div>

      <div className="flex flex-wrap my-5">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">
              Trending TV Series <br /> To watch Right Now
            </h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Most watched TV series by days to watch right now
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {trendingTv.slice(0, 10).map((tv, index) => (
          <MediaItem key={index} item={tv} />
        ))}
      </div>

      <div className="flex flex-wrap my-5">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>
            <h2 className="text-3xl">
              Trending People <br /> To watch Right Now
            </h2>
            <p className="text-gray-400/50 text-lg second-font py-2">
              Most popular people by days to discover right now
            </p>
            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {trendingPeople.slice(0, 10).map((person, index) => (
          <MediaItem key={index} item={person} />
        ))}
      </div>
    </>
  );
}

export default Home