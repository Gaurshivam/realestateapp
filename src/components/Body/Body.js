import React from 'react'
import './Body.css'
import SearchIcon from '@mui/icons-material/Search';


const Body = () => {
    return (
        <div className='body'>
            <div className='content'>
                <h1>Find the perfect Place</h1>
                <p className='search-text'>Don’t miss the best property rental WordPress theme to promote your apartment or house with a striking website.</p>
                 <form className='search'>
                    <div>
                        <input type='text' placeholder='Search best properties.......' />
                    </div>
                    <div className='radio'>
                    {/* <input type='radio' checked />
                    <label>Buy</label>
                    <input type='radio'  />
                    <label>Rent</label> */}
                    <button className='icon' type='submit'><SearchIcon /></button>
                    </div>
                 </form>
            </div>
        </div>
    )
}

export default Body
