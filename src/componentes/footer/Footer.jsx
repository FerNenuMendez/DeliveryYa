import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__atajos'>
        <div>
          <ul className='footer__atajos__detalle'>
            <li><a className='footer__atajos__detalle__li' href="https://www.pedidosya.com.ar/about">Quiénes somos</a></li>
            <li><a className='footer__atajos__detalle__li' href="https://www.pedidosya.com.ar/about/terminos-condiciones">Términos y Condiciones</a></li>
            <li><a className='footer__atajos__detalle__li' href="https://www.pedidosya.com.ar/about/privacy_policies">Privacidad</a></li>
            <li><a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/">Sé parte de DeliveryYa</a></li>
            <li><a className='footer__atajos__detalle__li' href="https://medium.com/pedidosyalatam">Blog</a></li>
          </ul>
        </div>
        <div >
          <ul className='footer__atajos__detalle'>
            <li><a className='footer__atajos__detalle__li' href="#top__comidas">Top Comidas</a></li>
            <li><a className='footer__atajos__detalle__li' href="#top__ciudades">Top Ciudades</a></li>
            <li><a className='footer__atajos__detalle__li' href="#top__barrios">Top Barrios</a></li>
          </ul>
        </div>
        <div >
          <ul className='footer__atajos__detalle'>
            <li><a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/">Registra tu negocio</a></li>
            <li><a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/">Centro de Socios</a></li>
          </ul>
        </div>
        <div >
          <ul className='footer__atajos__detalle'>
            <li><a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/">Acuerdos corporativos</a></li>
          </ul>
        </div>
      </div>
      <div className='footer__atajos'>
        <div className='footer__atajos__2'>
          <ul className='footer__atajos__detalle'>
            <li className='footer__atajos__detalle__li'>Te arrepentis de una compra?<a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/"> Boton de arrepentimiento</a></li>
            <li className='footer__atajos__detalle__li'>Defensa de las y los Consumidores.<a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/"> Ingresa Aca</a></li>
            <li className='footer__atajos__detalle__li'>Ley 24.240 de Defensa del Consumidor.<a className='footer__atajos__detalle__li' href="https://empleos.pedidosya.com/"> Ver contratos de adhesión</a></li>          
          </ul>
        </div>
      </div>
      <div>
        <div className='footer__atajos'>
          <ul className='footer__atajos__detalle2'>
            <li className='footer__atajos__detalle__li'>Todos los derechos reservados</li>
            <li className='footer__atajos__detalle__li'>Esta web es una muestra grafica, no se asocia con ningun local gastronomico.</li>
            <li className='footer__atajos__detalle__li'>By Fernando Mendez 2023</li>          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer