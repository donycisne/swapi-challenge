import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../globalStore/thunks/thunkMovies";

const Movies = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movies = useSelector(state => state.movies);

  return (
    <div>
      <h2>Peliculas</h2>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.episode_id}>
              <Link
                to={`${match.url}/${movie.url.slice(
                  movie.url.indexOf("films") + "films".length + 1,
                  movie.url.length - 1
                )}`}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
