import '../styles/Icon.css'
import vegan from "../pics/vegan.png";
import diary from '../pics/diary.png';
import gluten from '../pics/gluten-free.png';
import halal from '../pics/halal.png';
import kosher from '../pics/kosher.png';
import nut from '../pics/peanut-free.png';
import vegetarian from '../pics/vegetarian.png';


const Icon = ({type})=>{

    if(type == "Vegan"){
        return <img style={{width: "28px", height: "28px", display:"block" }} src={vegan} />

    }
    if(type == "Dairy free"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={diary} />
 
    }
    if(type == "Gluten free"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={gluten} />
     
    }
    if(type == "Halal"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={halal} />
     
    }
    if(type == "Kosher"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={kosher} />
    }
    if(type == "Nut Free"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={nut} />
    }

    if(type == "Vegetarian"){
        return <img style={{width: "28px", height: "28px", display:"block"}} src={vegetarian} />
    }
    


}


export default Icon;