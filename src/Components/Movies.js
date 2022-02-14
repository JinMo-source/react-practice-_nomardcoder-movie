import { Link } from "react-router-dom";
function Movies({ id, title, image, summary }) {
  return (
    <div>
      <div key={id}>
        <img src={image} alt={title} />
        <h2>
          <Link to={`/detail/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
      </div>
    </div>
  );
}
export default Movies;
