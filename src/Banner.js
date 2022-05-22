import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getMovieTitle(){
      const response=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=348c596e3d81ab66611de39d54e48806`)
      const random=parseInt(Math.random()*10);
      const valid=response.data.results.filter(v=> v.hasOwnProperty('title') ? v : "")
      setMovie(valid[random]);
      // console.log(valid);
    }
    getMovieTitle();
  }, [])
  return (
    <section className='banner' style={{backgroundImage: `url(${movie ? "https://image.tmdb.org/t/p/w500"+movie.backdrop_path : ""})`}}>
        <div className="banner__container">
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className="banner__buttons">
                <button className='banner__btn'><i className="fa-solid fa-play"></i> play</button>
                <button className='banner__btn'><i className="fa-solid fa-plus"></i> My List</button>
            </div>
            <p className='description'>{movie ? movie.overview : ""}</p>
        </div>
        <div className="grey__shade"></div>
    </section>   
  )
}

export default Banner