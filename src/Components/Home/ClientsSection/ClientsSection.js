import React from 'react';

const ClientsSection = ({client}) => {

    return (
        <div className="col-12 col-md-2 md-offset-2 col-sm-2 sm-offset-2 col-xs-2 xs-offset-2 md-offset-2 align-items-center justify-content-around m-auto py-3 ">
            <div>
                <img className="img-fluid" style={{maxWidth: '100px'}} src={client.image} alt=""/>
            </div>
            
        </div>
    );
};

export default ClientsSection;