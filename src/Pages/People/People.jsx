import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../../components/MediaItem/MediaItem";
import Loading from "../../components/Loading/Loading";

function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPopularPeople() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/person/popular?api_key=42d680170bbe94ae3b3f58a4c434cd19",
    );

    return data.results.map((item) => ({
      ...item,
      media_type: "person",
    }));
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        const peopleData = await getPopularPeople();
        setPeople(peopleData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loading />;

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

        {people.map((person) => (
          <MediaItem key={person.id} item={person} />
        ))}
      </div>
    </>
  );
}

export default People;
