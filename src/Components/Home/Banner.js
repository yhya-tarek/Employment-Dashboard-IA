import image from '../../assets/images/web04.jpg';
import '../../style/Banner.css';

import { Search } from './Search';
export const Banner = ()=>{

    return(
       
        <div className="container">
        {/* <img src={image} className="banner" alt="banner" /> */}
        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:610,
    }}>
  
    </div>
        
        <div className="centered">
          <Search></Search></div>
      </div>





    )}