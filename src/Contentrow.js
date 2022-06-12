import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v1 as uuidv1} from "uuid";
import {API_KEY,tmdbUrl,imageUrl} from './constants/constant'
import { Link } from 'react-router-dom';
function Contentrow(props) {
  const{title,genreid,show,lang}=props
  const[content,setContent]=useState([])
   useEffect(() => {
    console.log(show)
    async function getContent(){
      const response=await axios.get(`${tmdbUrl}discover/${show}?with_genres=${genreid}&api_key=${API_KEY}&with_original_language=${lang}`);
      setContent(response.data.results.map(v=>{
        return(
          {...v,item_id:uuidv1()}
        )
      }));
      console.log(response);
    }
    getContent();
   }, [genreid,lang,show])
  return (
    <section className='content__row'>
        <h1>{title}</h1>
        <div className="content">
        {
          content ? content.map(v=>{
            return(
                    <Link to={`/${v.id}`} key={v.item_id} state={{obj:v,id:genreid,lang:lang,show:show}}>
                      <div className="card__wrapper"  >
                        <img src={imageUrl+"w500"+v.poster_path} alt="" />
                      </div>
                    </Link>
            )
          }):""
        }
        </div>
    </section>
  )
}

export default Contentrow