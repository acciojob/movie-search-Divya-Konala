import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movie from "./Movie";
const key = process.env.REACT_APP_OMDB_API_KEY;
const key1 = "123456789";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const fetchMovie = () => {
    Axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: key1,
        s: inputValue,
      },
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setClicked(true);
      })
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    console.log(key);
  }, []);
  return (
    <div className="OMDB">
      <form>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
        />
        <button type="button" onClick={fetchMovie}>
          Search
        </button>
      </form>
      {clicked ? (
        <>
          {data.Response=='True' ? (
            <ul>
              {data.Search.map((item) => (
                <Movie key={item.imdbID} data={item} />
              ))}
            </ul>
          ) : (
            <p className="error">Invalid movie name. Please try again.</p>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
