const SearchResult = ({ poster }) => {
  return (
    <div>
      {poster && (
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="first movie"
          className="w-32"
        ></img>
      )}
    </div>
  );
};

export default SearchResult;
