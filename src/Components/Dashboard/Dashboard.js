import React, { useContext, useEffect, useState } from 'react';
import MakeAdmin from '../../Components/Dashboard/AdminSection/MakeAdmin/MakeAdmin';
import Order from '../../Components/Dashboard/CustomerSection/Order/Order';
import Review from '../../Components/Dashboard/CustomerSection/Review/Review';
import ServiceList from '../../Components/Dashboard/CustomerSection/ServiceList/ServiceList';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AdminServiceList from '../Dashboard/AdminSection/AdminServiceList/AdminServiceList';
import AddServices from '../Dashboard/AdminSection/AddServices/AddServices';
import { UserContext } from '../../App';
import { Col, Row } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'

const Dashboard = () => {
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { email, picture } = decodedToken
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(isAdmin)
    const [navigation, setNavigation] = useState(isAdmin ? 'Admin Service list' : 'Order')
    useEffect(() => {
        fetch('https://sajeeb-creative-agency.herokuapp.com/admins/' + email)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)
                if(data){
                    setNavigation("Admin Service list")
                }
            })
    }, [])
    return (
        <section className='CustomerDashboard'>
            <div className='row'>
                <Sidebar navigation={navigation} setNavigation={setNavigation} isAdmin={isAdmin} />
                <div className="col-md-10 p-0">
                    <Topbar />
                    {
                        isAdmin ?
                            <>
                                {navigation === 'Add Service' && <AddServices />}
                                {navigation === 'Admin Service list' && <AdminServiceList />}
                                {navigation === 'Make Admin' && <MakeAdmin />}
                            </>
                            :
                            <>
                                {navigation === 'Order' && <Order />}
                                {navigation === 'Service list' && <ServiceList />}
                                {navigation === 'Review' && <Review />}
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;