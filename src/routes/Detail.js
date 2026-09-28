import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`,
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <MovieDetail
          coverImage={movie.large_cover_image}
          title={movie.title_long}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          description={movie.description_full}
        />
      )}
    </div>
  );
};
export default Detail;
