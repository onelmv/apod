import React, { Fragment } from 'react';


const SearchField = (props) => {
    return (
        <Fragment>
            <div  className='f6 p0 ma0 '>
                <p>debug:{props.date}</p> {/* //!debug */}
                <label className='db' htmlFor="date">select date:</label>
                <input  className='bg-lightest-blue shadow-3 w-12' 
                        type="date" 
                        id='date' 
                        min='1995-06-20' 
                        max={new Date().toJSON().slice(0,10)}
                        value={props.date}
                        onChange={props.dateChange}
               />
        
                

                {/* {console.log(new Date().toJSON().slice(0,10))} */}
            </div>
        </Fragment>
    )
}


export default SearchField;