import {useState} from 'react';
import '../../style/AddJob.css';
import {FaPlus}from 'react-icons/fa';
import '../../style/AddEmployee.css';
export default function Pop() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button className='icon-button' onClick={handleClick}><FaPlus></FaPlus> &nbsp;Add Employee</button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form >
        <div className='AddEmployee-Contianer'>
            <div className='title'>
          <h2>Add Employee</h2>
          <hr className='add-employee-hr'></hr>
          </div>
          
          <div className='Job-content'>
           
      
      {/* <Upload></Upload> */}
            <label> username<input type='text'></input>
            </label>
            
            <label> password<input type='password' ></input>
            </label>
            <label> Email<input type=''></input>
            </label>
            <input type="file" accept="image/*" onchange="loadFile(event)"/>
            <label> Mobile number<input type=''></input>
            </label>
            <label> Skills<input type=''></input>
            </label>
            <label> Bio</label><textarea id="w3review" name="w3review" rows="4" cols="30"></textarea>
            
            <button className='add-button'>Add now!</button>
            <button className='delete-button'>Delete now!</button>
          </div>
         
        </div>
        </form>
      ) : null}

    
      {isShown ? <></> : null}
    </div>
  );
}


// function Box() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
// }
// const Upload =()=>{
//           var loadFile = function(event) {
//               var image = document.getElementById('output');
//               image.src=URL.createObjectURL(event.target.files[0]);
              
              
//           }
//         };
    