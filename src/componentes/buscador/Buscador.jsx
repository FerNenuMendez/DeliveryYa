import './buscador.css'
import AppBuscador from '../appBuscador/AppBuscador'
import ResBuscador from '../resBuscador/ResBuscador'
import { useContext } from 'react';
import { zonaContext } from '../../context/zonaProvider';



const Buscador = () => {

  const {bool} = useContext(zonaContext)

  if (bool==='true'){
    return (
      <AppBuscador/>
    )
  } else if (bool==='false') {
    return(
      <ResBuscador/>
    )
  }
}

export default Buscador