import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../MediaItem/MediaItem";

function People() {
  const [people, setPeople] = useState([]);

  async function getPopularPeople(callback) {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/person/popular?api_key=42d680170bbe94ae3b3f58a4c434cd19",
    );

    callback(
      data.results.map((item) => ({
        ...item,
        media_type: "person",
      })),
    );
  }

  useEffect(() => {
    getPopularPeople(setPeople);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex items-center -ml-10 md:ml-0">
          <div>
            <div className="brdr w-1/4 mb-7"></div>

            <h2 className="text-3xl">
              Popular People <br /> To Discover Right Now
            </h2>

            <p className="text-gray-400/50 text-lg second-font py-2">
              Most popular actors, actresses and celebrities
            </p>

            <div className="brdr w-full mt-5"></div>
          </div>
        </div>

        {people.map((person, index) => (
          <MediaItem key={index} item={person} media_type="person" />
        ))}
      </div>
    </>
  );
}

export default People;
