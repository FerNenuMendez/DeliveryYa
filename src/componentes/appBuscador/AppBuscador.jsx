import './AppBuscador.css'


const AppBuscador = () => {
  return (
    <div className='app__buscador'>
        <p className='app__buscador__p'>Veamos qué tenés cerca</p>
        <input type="text" value=' Direccion o punto de referencia' className='app__buscador__input'></input>
    </div>
  )
}

export default AppBuscador