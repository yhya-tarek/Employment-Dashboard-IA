import '../../style/Search.css';
import { FaSearch } from 'react-icons/fa';

export const Search = ()=>{


    return(
    <>
  <form className="example" action="">
  <input className="main-search"type="text" placeholder="Search for a job now!" name="search"/>
  <button type="submit"><i className=''></i>
  <FaSearch></FaSearch>
  </button>
</form>
    
    </>


    );
}