import React from 'react'

function Banner() {
  return (
    <section className='banner'>
        <div className="banner__container">
            <h1 className='title'>Money Heist</h1>
            <div className="banner__buttons">
                <button className='banner__btn'>play</button>
                <button className='banner__btn'>My List</button>
            </div>
        </div>
        <div className="grey__shade"></div>
    </section>   
  )
}

export default Banner