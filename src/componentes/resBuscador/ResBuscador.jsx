import './resBuscador.css'
import { useContext } from 'react';
import { zonaContext } from '../../context/zonaProvider';
import locales from '../../data/locales'
import ResBuscadorDetail from '../resBuscadorDetail/ResBuscadorDetail'



const ResBuscador = () => {
  
  const {zona} = useContext(zonaContext)
  const miZona = zona
  
  const localesCerca = locales.filter((local)=>{
    return local.localidad === miZona
  })

  return (
    <section className='resultado__localidad'>
      <button className='resultado__localidad__btn'>Volver</button>
      <ResBuscadorDetail producto={(localesCerca)}/>
    </section>
  )
}

export default ResBuscador