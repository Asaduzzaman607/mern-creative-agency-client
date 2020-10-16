import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import jwt_decode from 'jwt-decode'
const ServiceList = () => {
    const [orders, setOrders] = useState([])
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { email } = decodedToken
    useEffect(() => {
        fetch(`https://sajeeb-creative-agency.herokuapp.com/userOrder/${email}`)
            .then(res => res.json())
            .then(data=>setOrders(data))
    },[])
    return (
        <div service-list-container p-5>
           <div className="row">
           {
                orders.map(order=><ServiceListCard order={order} ></ServiceListCard>)
            }
           </div>
        </div>
    );
};

export default ServiceList;