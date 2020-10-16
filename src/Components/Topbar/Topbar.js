import React, { useContext } from 'react';
import jwt_decode from 'jwt-decode'
import { UserContext } from '../../App';

const Topbar = ({isAdmin}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { name, picture } = decodedToken
    return (
        <div className="d-flex justify-content-between align-items-center container" style={{ height: '80px' }}>
            {
                isAdmin?  <>    {<h3 className='mt-4 px-4'>Add Services</h3>}</>
                :
                <>    {<h3 className='mt-4 px-4'>Order</h3>}</>
            }
            
            <div>
                <h5 className='mt-4 mr-4'>{name}</h5>
            </div>
        </div>
    );
};

export default Topbar;