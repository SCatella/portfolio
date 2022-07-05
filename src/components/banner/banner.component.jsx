import { Link } from 'react-router-dom';

import './banner.styles.scss';

import React from 'react'

const Banner = ({ title }) => {
  return (
    <div className='banner-container'>
      <Link to='/projects' className='banner'>{`${title}`}</Link>
    </div>
  )
}

export default Banner;