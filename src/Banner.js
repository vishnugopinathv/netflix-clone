import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {tmdbUrl,API_KEY,imageUrl} from './constants/constant'
import { useContextConsumer } from './context/contentContext';
function Banner({show,obj,title}) {
  const [movie, setMovie] = useState("");
  const[includes,setIncludes]=useState("");
  const{myList,setMyList}=useContextConsumer();
  let a=[];
    for(let i of myList){
      a.push(i.id)
    }
  useEffect(() => {
    
    async function getMovieTitle(){
      const response=await axios.get(`${tmdbUrl}trending/${show}/day?api_key=${API_KEY}`)
      const random=parseInt(Math.random()*20);
      const showName=response.data.results[random];
      !obj ? setMovie(showName): setMovie(obj);
      obj ? setIncludes(a.includes(obj.id)):setIncludes(a.includes(showName.id)) ;
    }
    getMovieTitle();
    // eslint-disable-next-line
  }, [show,obj])
  const addMyList=()=>{
    if(!includes){
      setIncludes(!includes)
      setMyList([...myList,movie])
    }
    else{
      setIncludes(!includes)
      const filtered=myList.filter(v=>{
        return(
          v.id!== movie.id 
        )
      })
      setMyList(filtered);
    }
  }
  return(
    movie ? <section className='banner' style={{backgroundImage: `url(${imageUrl+"original/"+movie.backdrop_path})`}}>
    <div className="banner__container">
        <h1 className='title'>{movie.title? movie.title: movie.name}</h1>
        <p className='description'>{movie.overview}</p>
        <div className="banner__buttons">
            <button className='banner__btn'><i className="fa-solid fa-play"></i> play</button>
            <button className='banner__btn' onClick={addMyList}><i className={`fa-solid ${includes ? 'fa-check' :'fa-plus'}`}></i> My List</button>
        </div>
    </div>
    <div className="grey__shade"></div>
</section>  : null
  )
}

export default Banner