import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Header = ({handlerSearchDate}) => {

    const [searchDate, setSearchDate] = useState('');

    const handleChangeDate = (date) => {
        setSearchDate(date);
        handlerSearchDate(date);
    }

    return(
        <div className='header'>
            <h1>Notes</h1>
            <DatePicker placeholderText='Search by Date'
             selected={searchDate!==''?searchDate:''}
             onChange={handleChangeDate}
             />
             
        </div>
    )
}

export default Header;