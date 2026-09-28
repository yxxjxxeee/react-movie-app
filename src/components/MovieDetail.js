import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

const MovieDetail = ({
  coverImage,
  title,
  rating,
  runtime,
  genres,
  description,
}) => {
  return (
    <div className={styles.detail}>
      <img src={coverImage} alt={title} className={styles.detail__img} />
      <div>
        <h1 className={styles.detail__title}>{title}</h1>
        <p className={styles.detail__info}>
          {rating}점 · {runtime}분
        </p>
        <ul className={styles.detail__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className={styles.detail__description}>{description}</p>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieDetail;
