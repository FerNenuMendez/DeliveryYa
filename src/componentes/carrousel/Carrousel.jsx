import './Carrousel.css'
import almacen from '../../assets/almacen-de-pizzas.png'
import burger from '../../assets/burger_king.png'
import club from '../../assets/el_club_de_la_milanesa.png'
import fabric from '../../assets/fabric.png'
import noble from '../../assets/el_noble.png'
import sushi from '../../assets/sushi_pop.png'
import pain from '../../assets/pain_quotidien.png'
import morita from '../../assets/morita.png'
import farola from '../../assets/la-farola.png'

const Carrousel = () => {
  return (
    <div className="carrousel" id="carrousel">
        <section id="slideshow">
            <p className="carrousel-p">Los mejores restaurantes</p>
            <div className="entire-content">
                <div className="content-carrousel">
                    <figure className="shadow"><img  alt="img-carrousel" src={almacen}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={morita} /></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={sushi}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={pain}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={burger}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={farola}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={noble}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={club}/></figure>
                    <figure className="shadow"><img alt="img-carrousel" src={fabric}/></figure>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Carrousel