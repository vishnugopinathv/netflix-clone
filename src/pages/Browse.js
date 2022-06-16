import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_KEY, tmdbUrl } from '../constants/constant'
import { Link } from 'react-router-dom'
import { imageUrl } from '../constants/constant'
const Browse = () => {
  const[option,setOption]=useState({
    show:"",
    genre:"",
    language:""
  })
  const[shows,setShows]=useState([])
  const changeHandler=(e)=>{
    setOption({...option,[e.target.name]:e.target.value})
  }
  useEffect(() => {
       async function getMOvie(){
       const response= option.show&&await axios.get(`${tmdbUrl}discover/${option.show&&option.show}?with_genres=${option.genre&&option.genre}&with_original_language=${option.language&&option.language}&api_key=${API_KEY}`)
      option.show&&setShows(response.data.results) 
    } 
    getMOvie()
  }, [option])
  
  return (
    <>
    <div className="browse__head">
    <h1>Browse</h1>
    <div className='dropdown__container'>
    <select name="show" id="" value={option.show} onChange={changeHandler}   >
    <option value="" disabled>Show</option>
      <option value="tv">TV</option>
      <option value="movie">Movie</option>
    </select>
    <select name="genre" id="" value={option.genre} onChange={changeHandler}  >
    <option value="" disabled>Genre</option>
      <option value={16} >Animation</option>
      <option value={80}>Crime</option>
      <option value={18}>Drama</option>
      <option value={10749}>Romance</option>
    </select>
    <select name="language" id="" value={option.language} onChange={changeHandler} >
    <option value="" disabled >language</option>
      <option value="en">English</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="hi">Hindi</option>
    </select>
    </div>
    </div>
    <div className="mylist__container">
      <div className="list__container">
      {
      shows.map((v)=>{
        return(
          <Link to={`/${v.id}`} key={v.id} state={{obj:v}}>
                      <div className="card__wrapper"  >
                        <img src={imageUrl+"/w500"+v.poster_path} alt="" />
                      </div>
          </Link>
        )
      })
    }
      </div>
    </div>
    </>
  )
}

export default Browse