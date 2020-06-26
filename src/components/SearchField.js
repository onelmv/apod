import React, { Fragment } from 'react';


const SearchField = ({date,dateChange}) => {
    
    let dateObj = new Date();
    let today = dateObj.getFullYear()+'-'+("0"+(dateObj.getMonth()+1)).slice(-2)+'-'+("0" + dateObj.getDate()).slice(-2); //stackoverflow
    

    return (
        <Fragment>
            <div  className='f6 p0 ma0 '>
               
                <label className='db' htmlFor="date">select date:</label>
                <input  className='bg-lightest-blue shadow-3 w-12' 
                        type="date" 
                        id='date' 
                        min='1995-06-20' 
                        max= {today}
                        value={date}
                        onChange={dateChange}
               />
            </div>
        </Fragment>
    )
}


export default SearchField;