import React, { Fragment } from 'react';


const Body =(props)=>{
    return (

        <Fragment>
            <div>
                <p>{props.date}</p>
                
                <div className="br2 ba dark-gray bg-washed-blue b--black-10 mv4 w-90 w-90-m w-90-l mw8 center">
                
                    <img src="/* {props.apod.url} */" className="db w-100 br2 br--top" alt="/* {props.apod.title} */"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="tc">
                                <h1 className="f5 f4-ns">{/* {props.apod.title} */}</h1>
                            </div>
                            <div>
                                <h2 className="f5 mv0">{props.date}</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">{/* {props.apod.explanation}} */}</p>
                    </div>
                </div>



            </div>
            
        </Fragment>
    )
}


export default Body