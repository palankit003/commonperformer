import { useEffect, useState } from "react";

const ActorCard = (props) => {
  const [credits, getCredits] = useState([]);
  const movieId = props.movieId;
  useEffect(() => {
    const detail = async () => {
      if (movieId) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6559e762214c07e8a918a15e06f0b17e&language=en-US`;
        const res = await fetch(url);
        const data = await res.json();
        getCredits(data.cast);
        props.cast(
          data.cast.map((e) => {
            return e;
          })
        );
      }
    };
    detail();
  }, [movieId]);
  return <></>;
};

export default ActorCard;
