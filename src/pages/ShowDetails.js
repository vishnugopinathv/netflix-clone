import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contentrow from '../Contentrow';
import Banner from '../Banner';
function ShowDetails() {
  const location = useLocation();
  const{obj,id,lang,show}=location.state;
  useEffect(() => {
    window.scrollTo(0,0);
  }, [obj.title,obj.name])
  document.title=`Netflix-${obj.title? obj.title : obj.name}`
  return (
    <>
    <Banner obj={obj} title={obj.title? obj.title : obj.name} />
    <Contentrow title={`Similar shows like "${obj.title ? obj.title : obj.name}"`} genreid={id ? id : obj.genre_ids[0]} key={obj.title ? obj.title : obj.name} lang={lang ? lang : obj.original_language} show={show ? show :obj.media_type ? obj.media_type : "movie"}   />
    </>
    
  )
}

export default ShowDetails