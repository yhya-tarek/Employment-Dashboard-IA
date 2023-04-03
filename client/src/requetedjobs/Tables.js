import { useState } from 'react'
import "./table.css"
// import { FaDots } from 'react-icons/fa';
// import Icon from '../assets/images/verticalDots.png';
const INITIAL_STATE = [
  
  { id: 2, name: 'Yahia', position: 'Design', status: 'pending' },
  { id: 3, name: 'Ayman', position: "Market", status: 'pending' },
  { id: 4, name: 'Hazim', position: "Developer", status: 'pending' },
  { id: 2, name: 'Yahia', position: 'Design', status: 'pending' },
  { id: 3, name: 'Ayman', position: "Market", status: 'pending' },
  { id: 4, name: 'Hazim', position: "Developer", status: 'pending' },
  
  
]

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}

function Table() {
  const [users, setUsers] = useState(INITIAL_STATE)
  const [Reqstatus,setStatus]=useState('pending');
   const accept =()=>{
    setStatus('Accepted');
   };
   const decline =()=>{
    setStatus('Declined');
   };

   const renderUsers = () => {
    return users.map(({ id, name, position, status }) => {
       
      return <tr key={id} >
         
      <td style={{ padding: '10px', border: '1px solid black' }}>{id}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{position}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{Reqstatus}</td>
      
    </tr>
    })
  }

   const renderHeader = () => {
    return <tr className='table-header'>
      {Object.keys(INITIAL_STATE[0]).map(key => <th>{capitalize(key)}</th>)}
    </tr>
  }

  return (
    
      <table>
        {renderHeader()}
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
   
  );
}

export default Table;