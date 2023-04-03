import {useState} from 'react';
import "./pop.css";
// import '../style/NotificatonButton.css';
// import { FaBell } from 'react-icons/fa';
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
      <button className='icon-button' onClick={handleClick}>View</button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <div className='Contianer'>
            <div className='title'>
          
          </div>
          <div className='content'>
            
            <h2>Job description</h2>
             <hr/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              

              <div className='about_job'>
              <h2>About the job </h2>
              <hr/>
              <p className='aboutp'>
              <i class='bx bx-badge-check'></i> SALARY : 3500$ ,      
             <i class='bx bx-badge-check'></i> FULL TIME ,  
             <i class='bx bx-badge-check'></i> ADSFASDF
             

                  </p>
           </div>
           
    
            <h2>Required experience </h2>
    <hr/>
            <div className='requirement'>
            <i class='bx bx-badge-check'></i>
            <p className='req'>figma and using the right way</p>
            </div>
    
            <div className='requirement'>
            <i class='bx bx-badge-check'></i>
            <p className='req'>designing with design systems and design language</p>
            </div>

         
          <div>

          </div>
           
              
              
            
         
          
          </div>
        </div>
      ) : null}

    
      {isShown ? <></> : null}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}