import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_KEY} from './constants/constant'
import { v1 as uuidv1 } from 'uuid';
function Contentrow(props) {
  const{title,genreid}=props
  const [content, setContent] = useState([]);
   useEffect(() => {
     console.log(API_KEY)
    async function getContent(){
      const response=await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreid}&api_key=${API_KEY}`);
      console.log(response.data.results);
      setContent(response.data.results);
    }
    getContent();
    
   }, [])
   
  return (
    <section className='content__row'>
        <h1>{title}</h1>
        <div className="content">
        {
          content ? content.map(v=>{
            return(
                  <>
                  <div className="card__wrapper"  key={uuidv1()}>
                    <img src={"https://image.tmdb.org/t/p/w500"+v.poster_path} alt="" />
                    <div className="hover__content">
                      <h2>{v.title}</h2>
                      <div className="hover__content__btn">
                        <button><i className="fa-solid fa-play"></i>Watch</button>
                        <button><i className="fa-solid fa-plus"></i>My List</button>
                      </div>
                      </div>
                  </div>
                  </>
            )
          }):""
        }
        </div>
    </section>
  )
}

export default Contentrow