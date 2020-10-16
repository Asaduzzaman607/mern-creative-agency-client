import React from 'react';
import './ClientsFeedback.css'

const ClientsFeedback = ({feedback}) => {

    const { name, img, description,designation} = feedback;
    

    return (
       <div className="col-md-4" style={{ border: '.5px solid grey',padding: '5px', margin: '5px', border: '1px solid #BFBFBF',
       boxSizing: 'border-box',
       borderRadius: '4px'}}>
          <div className="feedback-header"style={{padding: '5px', margin: '2px'}}>
         
         <img src={img} alt="customer"/>
     
         <div className="feedback-name">
         <h5 className="feedback-title">{name}</h5>
         <h6>{designation}</h6>
         </div>
         </div>
         <p className="feedback-description">{description}</p>
       </div>
     
       
            
       
    );
};

export default ClientsFeedback;