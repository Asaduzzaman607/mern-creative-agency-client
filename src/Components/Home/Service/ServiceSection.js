import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceSection.css'
const ServiceSection = (props) => {
    const{title, description, image, _id}=props.service
    const history = useHistory()
   

    return (
      <div>

            <div className="col-md-4 col-lg-4 col-sm-12 align-items-center m-auto py-3"  onClick={()=>history.push('/dashboard')}  >
         <div class="card event" style={{maxwidth: '100px'}}>
           
         <img  id='sweetlandia' style={{maxHeight:'100px',maxWidth:'100px', alignItems: 'center', justifyContent: 'center', margin:'auto', padding:'5px'}} src={`data:image/png;base64,${image.img}`} alt=""/>
        <div class="card-body">
             <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              </div>
       </div>
        
    </div>
      </div>
    );
};

export default ServiceSection;