import React from 'react'
import Contentrow from '../Contentrow'
import Banner from '../Banner'
import { useContextConsumer } from '../context/contentContext'
const Home = () => {
  document.title=`Netflix-Home`
  window.scrollTo(0,0);
  const{myList}=useContextConsumer();
  return ( 
    <>
        <Banner show="all"/> 
        {myList.length!==0&&<Contentrow mylist title="My List"/>}  
        <Contentrow title="Adventure" genreid={12} show="movie" lang="en" />
        <Contentrow title="War" genreid={10752} show="movie" lang="en"/>
        <Contentrow title="Japanese Anime" genreid={16} show="tv" lang="ja" />
        <Contentrow title="Horror" genreid={27} show="movie" lang="en"/>
        <Contentrow title="Indian Romance" genreid={10749} show="movie" lang="hi"/>
        <Contentrow title="Crime" genreid={80} key="Crime" show="tv" lang="hi"/>
        <Contentrow title="Documentary" genreid={99} show="tv" lang="en" />
        <Contentrow title="KDrama" genreid={18} show="tv" lang="ko"/>
        <Contentrow title="History" genreid={36} show="movie" lang="en" />
    </>
  )
}

export default Home