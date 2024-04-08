import React from 'react';
import Fade from 'react-awesome-reveal';


function SingleService({id, title, icon}) {

    return (
        <Fade bottom>
            <div key={id} className="single-service" >
                <div className="service-content"  >
                    <i className="service-icon">{icon}</i>
                    <h4 >{title}</h4>  
                </div>         
            </div>
        </Fade>
    )
}

export default SingleService