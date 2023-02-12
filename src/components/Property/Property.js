import React from 'react';
import './Property.css'

const img1 = "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80";
const img2 = "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
const img3 = "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const Property = () => {
  return (
    <div className='property'>
      <h1>Find Rental Properties</h1>
      <div>
        <p><span className='bold'>All</span></p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agriculture</p>
      </div>
      <div className='container'>
         <img src={img1} alt='img1' />
         <img src={img2} alt='img2' />
         <img src={img3} alt='img3' />
      </div>
      <button className='btn'>All View</button>
    </div>
  )
}

export default Property
