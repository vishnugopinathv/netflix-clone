import React from 'react'
import Banner from '../Banner'
import Contentrow from '../Contentrow'
const Seriespage = () => {
  window.scrollTo(0,0)
  document.title="Netflix-TVShows"
  return (
    <>
    <Banner show="tv" />
        <Contentrow title="Comedy" genreid={35} show="tv" lang="en"/>
        <Contentrow title="Crime" genreid={80} key="Crime" show="tv" lang="en"/>
        <Contentrow title="Japanese Anime" genreid={16} show="tv" lang="ja" />
        <Contentrow title="Family" genreid={10751} show="tv" lang="en"/>
        <Contentrow title="KDrama" genreid={18} show="tv" lang="ko"/>
        <Contentrow title="Mystery" genreid={9648} show="tv" lang="en"/> 
        <Contentrow title="Romance" genreid={10749} show="tv" lang="ko" />
        <Contentrow title="Documentary" genreid={99} show="tv" lang="en" />
    </>
  )
}

export default Seriespage