import React from 'react';
import { useHistory } from 'react-router-dom';
import Frame from '../../../images/logos/Frame.png'
import './HeaderMain.css'

const HeaderMain = () => {

  
    return (
        <main style={{textAlign: 'left',height: '684px'}} className="row d-flex align-items-center">
        <div className="main-title col-md-4 offset-md-1">
          <h1 className=" font-weight-bold mb-4">Lets Grow Your <br></br> Brand to the <br></br>Next Level </h1>
          <p className="mb-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet ducimus, omnis similique dolorum officiis. </p>
          <button className='brand-btn'>Hire Us</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid header-img" src={Frame} alt="frame" />
        </div>
      </main>
    );
};

export default HeaderMain;