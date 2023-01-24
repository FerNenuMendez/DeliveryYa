import './BuscadorLocalidad.css'
import Buscador from '../buscador/Buscador'

const BuscadorLocalidad = () => {
  
  return (
    <div className='buscador__localidad'>
      <div className='buscador__localidad__text'>
        <h2 className='buscador__localidad__text__h2'>¡PEDI LO QUE QUIERAS!</h2>
        <p className='buscador__localidad__text__p'>Restaurantes, mercados, farmacias, kioskos y otros...</p>
      </div>
      <div className='buscador__localidad__app'>
          <Buscador/>
      </div>
    </div>
  )
}

export default BuscadorLocalidad