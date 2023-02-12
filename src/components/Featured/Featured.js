import React from 'react';
import './Featured.css'
import CardOne from '../Card/CardOne'

const image1 = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60';
const image2 = 'https://media.istockphoto.com/id/1454430108/photo/luxurious-and-dark-apartment-master-bedroom-interior.jpg?s=612x612&w=0&k=20&c=oFIIUn74_qJcdYJbzcL1tfrVU0QKz_JlMFAT9-nUeuo=';
const image3 = 'https://media.istockphoto.com/id/1136834725/photo/bedroom-interior-for-mockup-3d-rendering.jpg?s=612x612&w=0&k=20&c=I17jr57P2IKwgAm3TOszGKHM3WsuXmeQLZe-_ZbkimI=';
const image4 = 'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const House = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const Bed = 'https://media.istockphoto.com/id/1194686012/photo/bedroom-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=X6Ymu7p4GM7X_Su11DAZ_3WT8McL4xchV7ZLv6IMsM4=';
const Bed2 = 'https://media.istockphoto.com/id/1325718317/photo/modern-luxurious-gray-bedroom.jpg?s=612x612&w=0&k=20&c=K7ZEJj974Tw9iAed-M60S3JcE5gMnSztsEOd4LoepQ0=';
const Kitchen = 'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const Bathroom = 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const H = 'H';
const B = 'B';
const K = 'K';



const Featured = () => {
    return (
        <div className='container-box'>
            <h1>Top Featured Listing</h1>
            <p>Selected listings by city, state based on view</p>

            <div className='card-box'>
            <CardOne className="Img-Card" img={image1} logo={H} />
            <CardOne className="Img-Card" img={image2} logo={B}/>
            <CardOne className="Img-Card" img={image3} logo={B}/>
            <CardOne className="Img-Card" img={image4} logo={K}/>
            </div>
            <div className='card-box-two'>
            <CardOne className="Img-Card" img={House}    logo={H}/>
            <CardOne className="Img-Card" img={Bed}      logo={B}/>
            <CardOne className="Img-Card" img={Bed2}     logo={B}/>
            <CardOne className="Img-Card" img={Bathroom} logo={K}/>
            </div>
            
        </div>
    )
}

export default Featured
