import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../../components/MediaItem/MediaItem";
import Loading from "../../components/Loading/Loading"

function Tv() {
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);

  const [loading, setLoading] = useState(false)

  async function getTv(type) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${type}?api_key=42d680170bbe94ae3b3f58a4c434cd19`,
      );

        return data.results.map((item) => ({
          ...item,
          media_type: "tv",
        }));
  }

  useEffect(() => {
      async function fetchData() {
    try {
      setLoading(true);

      const [airingTodaySeries, onTheAirSeries, popularSeries] =
        await Promise.all([
          getTv("airing_today"),
    getTv("on_the_air"),
    getTv("popular"),
        ])

        setAiringToday(airingTodaySeries);
        setOnTheAir(onTheAirSeries);
        setPopular(popularSeries);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
  }, []);

  return (
    <>
      {/* Airing Today */}
      <div className="flex flex-wrap my-10">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>

            <h2 className="text-3xl">Airing Today</h2>

            <p className="text-gray-400/50 text-lg second-font py-2">
              Discover TV shows that are broadcasting new episodes today from
              around the world.
            </p>

            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        { loading ? (
          <Loading/>
        ) : (
          airingToday.slice(0, 10).map((tv) => (
          <MediaItem key={tv.id} item={tv} />
        ))
        )}
      </div>

      {/* On The Air */}
      <div className="flex flex-wrap my-10">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>

            <h2 className="text-3xl">On The Air</h2>

            <p className="text-gray-400/50 text-lg second-font py-2">
              Follow the most exciting TV series currently airing with brand-new
              episodes every week.
            </p>

            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        { loading ? (
          <Loading/>
        ) : (
          onTheAir.slice(0, 10).map((tv) => (
          <MediaItem key={tv.id} item={tv} />
        ))
        )}
      </div>

      {/* Popular */}
      <div className="flex flex-wrap my-10">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>

            <h2 className="text-3xl">Popular TV Shows</h2>

            <p className="text-gray-400/50 text-lg second-font py-2">
              Browse the highest-rated and most popular television series loved
              by millions of viewers worldwide.
            </p>

            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        { loading ? (
          <Loading/>
        ) : (
          popular.slice(0, 10).map((tv) => (
          <MediaItem key={tv.id} item={tv} />
        ))
        )}
      </div>
    </>
  );
}

export default Tv;
