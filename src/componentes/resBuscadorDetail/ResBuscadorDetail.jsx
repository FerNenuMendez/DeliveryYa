import './resBuscadorDetail.css'
import ResBuscadorDetailIcon from '../resBuscadorDetailIcon/ResBuscadorDetailIcon'

const ResBuscadorDetail = ({producto}) => {
  const detalle = producto.map((local)=>{
    return(
        <div key={local.id} className="resBuscadorDetail">
            <ResBuscadorDetailIcon tipo={(local.tipo)}/>
            <h2 className="resBuscadorDetail__h2">{local.nombre}</h2>
            <h3 className="resBuscadorDetail__h3">{local.tipo}</h3>
            <p className="resBuscadorDetail__p">{local.direccion}</p>
            <p className="resBuscadorDetail__p2">{local.localidad}</p>
        </div>
    )
  })
  return (
    detalle
  )
}

export default ResBuscadorDetail