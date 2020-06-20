import React, { Fragment } from 'react';
import Card from './card.js';


const Body =(props)=>{
    return (

        <Fragment>
            <div>
                <p>{props.date[1]}</p> {/* accedinedo a travez de un arrrelgo */}
                <p>{props.d.day}</p> {/* accediento a travex de un objetp */}
            </div>
            
        </Fragment>
    )
}


export default Body