//import {MdDeleteForever} from 'react-icons/md';
import delogo from '../del-icon.png';

const Note =({id, text, date, handleDeleteNote}) => {
     return <div className='note'>
         <span>{text}</span>
         <div className='note-footer'>
             <small>{date}</small>
        
             <img src={delogo} className='delete-icon' 
             onClick={() => handleDeleteNote(id)}></img>
         </div>
     </div>
 }

 export default Note;