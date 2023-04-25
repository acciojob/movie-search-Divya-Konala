import React from 'react'

const Movie = ({data}) => {
  return (
    <li>
        <h3>{data.Title} ({data.Year})</h3>
        <img src={data.Poster} alt='movie_Poster'/>
    </li>
  )
}

export default Movie