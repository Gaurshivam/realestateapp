import React,{useState} from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)


  return (
    <div className='navbar'>
      <div className='container'>
        <h1 className='logo'><HomeWorkIcon /><span>Real</span>Estate</h1>
        <ul className={click ?'nav-menu active' :'nav-menu' }>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Rent</a></li>
            <li><a href='#'>Buy</a></li>
            <li><a href='#'>Sell</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        <MenuIcon className='icon'/>
        </div>
        <button className='btn'>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar
