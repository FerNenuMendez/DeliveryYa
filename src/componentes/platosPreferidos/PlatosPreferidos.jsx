import './PlatosPreferidos.css'
import point from '../../assets/point.svg'
import medal from '../../assets/medal.svg'
import comida from '../../assets/comida.svg'

const PlatosPreferidos = () => {
  return (
    <div className="pp">
      <div className="pp__text">
        <h3>Delivery que satisface los sentidos</h3>
        <p>¿Con Hambre y Nada te Copa? Aca tu Comida Sabrosa, Hoy Puede Tener otro Gusto.</p>
        <p>DeliveryYa, Te Llena el Corazon</p>
      </div>
      <div className="pp__container">
        <div className="pp__sector">
          <img src={point} alt="point-img" className="pp__sector__img"/>
          <div>
            <h3 id="top__ciudades">Top Ciudades</h3>
            <p>La Plata, Rosario, San Isidro, Córdoba, Buenos Aires, Vicente López</p>
          </div>
        </div>
        <div className="pp__sector">
          <img src={medal} alt="point-img" className="pp__sector__img"/>
          <div>
            <h3 id="top__barrios">Top Barrios</h3>
            <p>Palermo, Caballito, Belgrano, Recoleta, Microcentro, Nueva Córdoba</p>
          </div>
        </div>
        <div className="pp__sector">
          <img src={comida} alt="point-img" className="pp__sector__img"/>
          <div>
            <h3 id="top__comidas">Top Comidas</h3>
            <p>Picadas, Empanadas, Desayunos, Helados, Pizzas, Parrilla, Ensaladas</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlatosPreferidos