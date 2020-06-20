import React, { Fragment } from 'react';


const SearchField = () => {
    return (
        <Fragment>
            <div  className='f4 p0 ma0 '>
                <label className='db' for="date">select date:</label>
                <input className='bg-lightest-blue' type="date" id='date' min='1995-06-20'    />
                <p className='red f7     '>start date 1995-06=20</p>
            </div>
        </Fragment>
    )
}







export default SearchField;