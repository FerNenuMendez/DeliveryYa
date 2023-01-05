import './AppBuscador.css'
import { CiLocationOn } from "react-icons/ci";


const AppBuscador = () => {


  return (
    <div className='app__buscador'>
        <p className='app__buscador__p'><CiLocationOn/> Veamos qué tenés cerca</p>
        <input type="search" className='app__buscador__input' id='input' name='Direccion' autocomplete="on"></ input>
        <button className='app__buscador__btn'>Buscar</button>
    </div>
  )
}

export default AppBuscador