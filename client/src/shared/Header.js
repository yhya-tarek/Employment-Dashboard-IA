// import logo from '../../assets/images/t1svg.svg';
import './Header.css';
import zero from "./zero.png";
export const Header = ()=>{

return(
    <header className="main-header">
      <div className='logo'>
    <img  src={zero} />
    </div>
  <nav>
    <ul>
    <li><a href="#">Find jobs</a></li>
    <li><a href="#">About</a></li>
   
    
  </ul>
</nav>
</header>
)

}