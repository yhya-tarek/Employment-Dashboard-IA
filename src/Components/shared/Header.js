import logo from '../../assets/images/t1svg.svg';
import { Button } from '../Home/LgnButton';
import '../../style/Header.css';

export const Header = ()=>{

return(
    <header className="main-header">
      <div className='logo'>
    <img  src={logo} alt="logo"/>
    </div>
  <nav>
    <ul>
    <li><a href="#">Find jobs</a></li>
    <li><a href="#">About</a></li>
   
    <Button></Button>
    
  </ul>
</nav>
</header>
)

}