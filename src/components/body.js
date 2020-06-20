import React, { Fragment } from 'react';
import Card from './card.js';


const Body =(props)=>{
    return (

        <Fragment>
            <div>
                {/* //// <p>{props.date[1]}</p>  accedinedo a travez de un arrrelgo */}
                <p>{props.date.year}-{props.date.month}-{props.date.day}</p> {/* accediento a travex de un objetp */}
                <Card />
            </div>

            {
                
            }
            
        </Fragment>
    )
}


export default Body