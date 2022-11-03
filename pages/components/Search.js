import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
const Search = (props) => {
  const [moviePoster, setMoviePoster] = useState();

  const handleOnChange = (searchData) => {
    setMoviePoster(searchData.poster);
    props.movie(searchData.value);
  };
  props.moviePoster(moviePoster);
  async function loadOptions(inputValue, loadedOptions) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6559e762214c07e8a918a15e06f0b17e&query=${inputValue}`
    );
    const responseJSON = await response.json();

    return {
      options: responseJSON.results.map((movie) => {
        return {
          poster: `${movie.poster_path}`,
          value: `${movie.id}`,
          label: `${movie.original_title} [${movie.release_date.substring(
            0,
            4
          )}]`,
        };
      }),
    };
  }
  return (
    <div className="flex flex-col items-center lg:w-[20rem]">
      <AsyncPaginate
        placeholder={`Enter ${props.num} Movie`}
        instanceId="one"
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="lg:mx-4 lg:py-2 py-1 w-full"
      />
    </div>
  );
};
export default Search;
