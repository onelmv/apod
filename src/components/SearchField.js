import React, { Fragment } from 'react';


const SearchField = (props) => {
    return (
        <Fragment>
            <div  className='f6 p0 ma0'>
                {/* //// <label className='db' for="date">select date:</label>
                ////<input className='bg-lightest-blue' type="date" id='date' min='1995-06-20'    />
                ////<p className='red f7     '>start date 1995-06=20</p> 
                */}

                
                <div  className='dib ma2'>
                    <label className='db ' htmlFor="year-select">Year</label>
                    <input className='br2 shadow-3 bg-lightest-blue w3' 
                            type="number" 
                            id='year-select' 
                            min='1995' 
                            max={new Date().getFullYear()} 
                            onChange={props.dateChange}
                    />
                </div>

                <div className='dib ma2'>
                    <label className='db ' htmlFor="month-select">Month</label>
                    <input className='br2 shadow-3 bg-lightest-blue w3' 
                            type="number" 
                            id='month-select' 
                            min='1' 
                            max='12' />                    
                </div>

                <div className='dib  ma2'>
                    <label className='db ' htmlFor="day-select">Day</label>
                    <input className='br2 shadow-3 bg-lightest-blue w3' 
                            type="number" 
                            id='day-select' 
                            min='1' 
                            max='31'/>
                </div>
            </div>
        </Fragment>
    )
}







export default SearchField;