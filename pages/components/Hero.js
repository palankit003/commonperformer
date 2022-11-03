import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import notA from "../../public/Not.png";
import ActorCard from "./ActorCard";
import Search from "./Search";
import SearchResult from "./SearchResult";
const Hero = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const [m1, setM1] = useState();
  const [m2, setM2] = useState();
  const CommonId = new Set();
  const Common = [];
  const [preview, setPreview] = useState(false);
  const [poster1, setPoster1] = useState();
  const [poster2, setPoster2] = useState();
  const movieP1 = (input) => {
    setPoster1(input);
  };
  const movieP2 = (input) => {
    setPoster2(input);
  };
  const search = (e) => {
    e.preventDefault();
    setPreview(true);
    executeScroll();
  };
  useEffect(() => {
    return setPreview(false);
  }, [m1, m2]);

  const [actorsFirst, setActorsFirst] = useState({});
  const [actorsSecond, setActorsSecond] = useState({});
  const movie1 = (input) => {
    setM1(input);
  };
  const movie2 = (input) => {
    setM2(input);
  };

  const cast1 = (casts) => {
    setActorsFirst(casts);
  };
  const cast2 = (casts) => {
    setActorsSecond(casts);
  };
  for (let i in actorsFirst) {
    for (let j in actorsSecond) {
      if (
        actorsFirst[i].id === actorsSecond[j].id &&
        !CommonId.has(actorsFirst[i].id)
      ) {
        CommonId.add(actorsFirst[i].id);

        let a = {
          name: actorsFirst[i].original_name,
          id: actorsFirst[i].original_name,
          photo: actorsFirst[i].profile_path,
          Character1: actorsFirst[i].character,
          Character2: actorsSecond[j].character,
        };

        Common.push(a);
      }
    }
  }
  return (
    <div className="lg:w-[80%] mx-auto lg:pt-12 pt-4 px-4">
      <div className="grid lg:grid-cols-2 lg:pb-8 pb-4">
        <p className="lg:text-4xl text-3xl text-gray-200">
          Ever curious to find which actors are common amoung two movies?
        </p>
        <p className="text-5xl lg:text-6xl py-4 lg:mt-8 text-[#3eb8ed] font-bold">
          Let&apos;s Find Out.
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="lg:flex lg:w-full justify-between">
          <Search movie={movie1} num="First" moviePoster={movieP1} />
          <Search movie={movie2} num="Second" moviePoster={movieP2} />
        </div>
        <button
          onClick={search}
          className="bg-[#2caae1] px-4 h-10 my-1 lg:m-auto rounded-md"
        >
          Search
        </button>
        <div className="grid grid-cols-2 justify-items-center my-8">
          <SearchResult poster={poster1} />
          <SearchResult poster={poster2} />
        </div>
      </div>
      <div className="flex justify-between">
        <ActorCard movieId={m1} cast={cast1} />
        <ActorCard movieId={m2} cast={cast2} />
      </div>
      <div className="flex flex-col items-center" ref={myRef}>
        {preview && Common ? (
          <p className="text-4xl text-center text-gray-200">
            {CommonId.size} <br />
            Actors
          </p>
        ) : (
          ""
        )}
        <div className="lg:grid lg:grid-cols-3 items-center gap-4 lg:mt-4">
          {preview &&
            Common &&
            Common.map((e) => {
              return (
                <div
                  key={e.id}
                  className="flex flex-col my-8 items-center w-full lg:h-full lg:bg-slate-700 p-4 rounded-md"
                >
                  <p className="text-2xl p-2 text-white">{e.name}</p>
                  <div className="grid grid-cols-[1fr_6fr_1fr] justify-items-center items-center mx-auto">
                    <p className="p-4 text-blue-300">{e.Character1}</p>
                    {e.photo ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${e.photo}`}
                        alt={e.name}
                        className="w-[90%] lg:max-w-[20rem] rounded-full"
                      />
                    ) : (
                      <Image
                        src={notA}
                        alt={e.name}
                        className="w-[90%] lg:max-w-[20rem] rounded-full opacity-20"
                      />
                    )}

                    <p className="p-4 text-orange-300">{e.Character2}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
