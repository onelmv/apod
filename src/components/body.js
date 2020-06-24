import React, { Fragment } from 'react';


const Body =(props)=>{


    let block = ""
    if(props.apod.media_type === 'video'){
        block =  <iframe title='video' className='db w-100  br2 br--top grow tc'  height='450' src={props.apod.url} ></iframe> 
        console.log(props.apod.url)
    }else{
        
        block = <img src={props.apod.url} className='db w-100 br2 br--top grow' alt={props.apod.title}/>
    }
    
    
    return (
        
        <Fragment>
            <div>
                <div className="br2 ba dark-gray bg-washed-blue b--black-10 mv4 w-90 w-90-m w-90-l mw7 center ">
                    
                    
                    {/* <img src={props.apod.url} className="db w-100 br2 br--top grow" alt={props.apod.title}/> */}
                    
                    <a href={props.apod.url}>
                        {block}
                    </a>

                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="tc">
                                <h1 className="f5 f4-ns">{props.apod.title}</h1>
                            </div>
                        </div>
                        <p className="f6 lh-copy pa2 mt2 mid-gray">{props.apod.explanation}</p>
                        {/* if the image have copyright , incert , otherwise dont put nothing */}
                        <h6 className='f6 ma1'>{props.apod.copyright?`\u00A9 ${props.apod.copyright}`:``}  </h6>
                    </div>
                </div>
                <div>
                    <footer className='f6'>onelmv</footer>
                </div>
            </div>
            
        </Fragment>
    )
}


export default Body