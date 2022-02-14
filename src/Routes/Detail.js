import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Poster from "../Components/Poster";
function Detail() {
  const [poster, setPoster] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setPoster(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(poster);

  return (
    <Poster
      id={poster.id}
      title={poster.title}
      image={poster.medium_cover_image}
      description={poster.description_full}
    />
  );
}

export default Detail;
