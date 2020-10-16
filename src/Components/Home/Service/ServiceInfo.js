import React, { useEffect, useState } from 'react';
import ServiceSection from './ServiceSection';


const ServiceInfo = () => {

    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://sajeeb-creative-agency.herokuapp.com/getServices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="container-fluid service-container">
            <div className="client-feedback text-center">
            <h2> <span className='client'>Provide awesome</span> <span className='feedback'>Services</span></h2>
            </div>
           <div className="row">
           {
                services.map(service => <ServiceSection service={service}></ServiceSection>)
            }
           </div>
        </section>
    );
};

export default ServiceInfo;