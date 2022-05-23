import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {tmdbUrl,API_KEY,imageUrl} from './constants/constant'

function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getMovieTitle(){
      const response=await axios.get(`${tmdbUrl}trending/all/day?api_key=${API_KEY}`)
      const random=parseInt(Math.random()*18);
      const valid=response.data.results.filter(v=> v.hasOwnProperty('title') ? v : "")
      setMovie(valid[random]);
      // console.log(valid);
    }
    getMovieTitle();
  }, [])
  return (
    <section className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
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