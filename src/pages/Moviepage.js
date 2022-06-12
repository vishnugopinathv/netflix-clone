import React from 'react'
import Banner from '../Banner'
import Contentrow from '../Contentrow'
const Moviepage = () => {
  window.scrollTo(0,0);
  document.title="Netflix-Movies"
  return (
    <>
    <Banner show="movie"/>
        <Contentrow title="Fantasy" genreid={14} show="movie" lang="en" />
        <Contentrow title="Anime Movies" genreid={16} show="movie" lang="ja" />
        <Contentrow title="Horror" genreid={27} show="movie" lang="en"/>
        <Contentrow title="Science Fiction" genreid={878} show="movie" lang="en"/>
        <Contentrow title="Romance" genreid={10749} show="movie" lang="en"/>
        <Contentrow title="Crime" genreid={80} key="Crime" show="movie" lang="en"/>
        <Contentrow title="Documentary" genreid={99} show="movie" lang="en" />
        <Contentrow title="KDrama" genreid={18} show="movie" lang="ko"/>
        <Contentrow title="History" genreid={36} show="movie" lang="en" />
    </>
  )
}

export default Moviepage