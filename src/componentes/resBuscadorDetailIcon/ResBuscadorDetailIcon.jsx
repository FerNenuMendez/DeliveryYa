import './resBuscadorDetailIcon.css'
import { MdDinnerDining, MdIcecream } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiMeat, GiFishingBoat, GiHamburger, GiCupcake, GiSushis, GiTeapot, GiTomato } from "react-icons/gi";

const ResBuscadorDetailIcon = ({tipo}) => {
  
    const iconHandler =()=>{
        if(tipo==='Fabrica de Pastas'){
            return(
                <MdDinnerDining/>
            )
        } else if(tipo==='Heladeria'){
            return(
                <MdIcecream/>
            ) 
        } else if(tipo==='Restaurante'){
            return(
                <BiRestaurant/>
            )
        } else if(tipo==='Pizzeria'){
            return(
                <FaPizzaSlice/>
            )
        } else if(tipo==='Rotiseria'){
            return(
                <GiMeat/>
            )
        } else if(tipo==='Comidas de Mar'){
            return(
                <GiFishingBoat/>
            )
        } else if(tipo==='Hamburgueseria'){
            return(
                <GiHamburger/>
            )
        } else if(tipo==='Pasteleria'){
            return(
                <GiCupcake/>
            )
        } else if(tipo==='Fabrica de Sandwichs'){
            return(
                <GiCupcake/>
            )
        } else if(tipo==='Casa de Sushi'){
            return(
                <GiSushis/>
            )
        } else if(tipo==='Casa de Empanadas'){
            return(
                <FaPizzaSlice/>
            )
        } else if(tipo==='Casa de Té') {
            return(
                <GiTeapot/>
            )
        } else if(tipo==='Casa de Comidas Veganas') {
            return(
                <GiTomato/>
            )
        }
    }

    return (
        iconHandler()
    )
}

export default ResBuscadorDetailIcon