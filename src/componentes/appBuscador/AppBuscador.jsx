import './AppBuscador.css'
import { CiLocationOn } from "react-icons/ci";
import { useContext } from 'react';
import { zonaContext } from '../../context/zonaProvider';



const AppBuscador = () => {
  
  const {zona,setZona,setBool} = useContext(zonaContext)
  
  const handleInputChange = ({target}) => {
    setZona(target.value)
  } 
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(zona)
    setBool('false')
  }

  return (
    <div className='app__buscador'>
        <p className='app__buscador__p'><CiLocationOn/> Veamos qué tenés cerca</p>
        <form>
          <input className='app__buscador__input' id='input' placeholder='Ingresa tu Localidad' onChange={handleInputChange} value={zona}></ input>
          <button type='submit' className='app__buscador__btn' onClick={handleSubmit}>Buscar</button>
        </form>  
    </div>
  )
}

export default AppBuscador