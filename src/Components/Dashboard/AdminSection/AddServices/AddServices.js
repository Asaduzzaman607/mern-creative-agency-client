import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import Topbar from '../../../Topbar/Topbar';
import './AddServices.css'

const AddServices = () => {

    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

    const history = useHistory();

    const [allService, setAllService] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newService = { ...allService };
        newService[e.target.name] = e.target.value;
        setAllService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(allService);
        formData.append('file', file);
        formData.append('title', allService.title);
        formData.append('description', allService.description);
       

        fetch('https://sajeeb-creative-agency.herokuapp.com/allServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
        
    return (
      
         
        <div className="container add-service-container">

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Service Title</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="textarea" className="form-control" name="description" placeholder="Enter description" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a icon</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="brand-btn" >Submit</button>
            </form>
        </div>
        

     
    );
};

export default AddServices;