import './Navbar.css'
import img from '../../assets/logoD192.png'
import { BsShop } from "react-icons/bs";


const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h2 className='navbar__h2'>D</h2>
        <p className='navbar__p'>Delivery Ya!</p>
      </div>
      <div className='navbar__interaccion'>
        <button className='navbar__btn'><BsShop className='navbar__btn__icon'/> Registra tu Negocio</button>
        <img src={img} alt="logo" className='navbar__img'/>
      </div>
    </div>
  )
}

export default Navbar