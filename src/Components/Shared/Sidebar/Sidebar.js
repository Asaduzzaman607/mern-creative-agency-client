import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus, faUserPlus, faLock, faShoppingCart, faComment } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logos/logo.png';
import './Sidebar.css'


const Sidebar = ({ navigation, setNavigation, isAdmin }) => {

 
    const history = useHistory()

    return (

            <aside className='col-md-2 sidebar text-center p-0 col-sm-12'>
                <div>
                    <img className='my-4 sidebar-logo' onClick={()=>history.push('/')} src={logo} width='150' alt="" />
                    <ul className='list-unstyled text-left ml-4 mt-4 ul-style col-md-10 col-sm-12'>
                        {
                            !isAdmin ?
                                <>
                                    <li style={{ color: navigation === 'Order'}} className='md-3 li-color' onClick={() => setNavigation('Order')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faShoppingCart} /> <span>Order</span>
                                    </li>
                                    <li style={{ color: navigation === 'Service list' }} className='md-3 li-color' onClick={() => setNavigation('Service list')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faLock} /> <span>Service list</span>
                                    </li>
                                    <li style={{ color: navigation === 'Review' }} className='md-3 li-color' onClick={() => setNavigation('Review')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faComment} /> <span>Review</span>
                                    </li>
                                </>
                                :
                                <>
                                    <li style={{ color: navigation === 'Admin Service list'}} className='md-3 li-color' onClick={() => setNavigation('Admin Service list')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faLock} /> <span>Service list</span>
                                    </li>
                                    <li style={{ color: navigation === 'Add Service'}} className='md-3 li-color' onClick={() => setNavigation('Add Service')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faPlus} /> <span>Add Service</span>
                                    </li>
                                    <li style={{ color: navigation === 'Make Admin'}} className='md-3 li-color' onClick={() => setNavigation('Make Admin')}>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '20px' }} icon={faUserPlus} /> <span>Make Admin</span>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </aside>
    );
};

export default Sidebar;