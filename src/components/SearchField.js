import React, { Fragment } from 'react';


const SearchField = (props) => {
    
    let date = new Date();
    let today = date.getFullYear()+'-'+("0"+(date.getMonth()+1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2); //stackoverflow
    

    return (
        <Fragment>
            <div  className='f6 p0 ma0 '>
               
                <label className='db' htmlFor="date">select date:</label>
                <input  className='bg-lightest-blue shadow-3 w-12' 
                        type="date" 
                        id='date' 
                        min='1995-06-20' 
                        max= {today}
                        value={props.date}
                        onChange={props.dateChange}
               />
            </div>
        </Fragment>
    )
}


export default SearchField;