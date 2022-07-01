import { Link } from 'react-router-dom';

import './banner.styles.scss';

import React from 'react'

const Banner = () => {
  return (
    <div className='banner-container'>
      <Link to='/portfolio' className='banner'>full portfolio list</Link>
    </div>
  )
}

export default Banner;