import { useState, useEffect } from "react";
import Movies from "../Components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const movieAPI = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(movieAPI, []);
  console.log(movies);
  return (
    <div>
      <h1>
        {loading
          ? "Loading"
          : movies.map((movies) => {
              return (
                <Movies
                  id={movies.id}
                  title={movies.title}
                  image={movies.medium_cover_image}
                  summary={movies.summary}
                />
              );
            })}
      </h1>
    </div>
  );
}

export default Home;
