import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v1 as uuidv1} from "uuid";
import {API_KEY,tmdbUrl,imageUrl} from './constants/constant'
function Contentrow(props) {
  const{title,genreid}=props
  const [content, setContent] = useState([]);
   useEffect(() => {
    async function getContent(){
      const response=await axios.get(`${tmdbUrl}discover/movie?with_genres=${genreid}&api_key=${API_KEY}`);
      setContent(response.data.results.map(v=>{
        return(
          {...v,item_id:uuidv1()}
        )
      }));
    }
    getContent();
   }, [genreid])
   
  return (
    <section className='content__row'>
        <h1>{title}</h1>
        <div className="content">
        {
          content ? content.map(v=>{
            return(
                  <div className="card__wrapper"  key={v.item_id}>
                    <img src={imageUrl+v.poster_path} alt="" />
                    <div className="hover__content">
                      <h2>{v.title}</h2>
                      <div className="hover__content__btn">
                        <button><i className="fa-solid fa-play"></i>Watch</button>
                        <button><i className="fa-solid fa-plus"></i>My List</button>
                      </div>
                      </div>
                  </div>
            )
          }):""
        }
        </div>
    </section>
  )
}

export default Contentrow