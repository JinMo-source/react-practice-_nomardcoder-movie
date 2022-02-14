function Poster({ id, title, image, description }) {
  return (
    <div>
      <div key={id}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Poster;
