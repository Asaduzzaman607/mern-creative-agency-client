import React, { useEffect, useState } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import './Order.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'

const Order = () => {
    const { register, handleSubmit } = useForm()
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { name, email } = decodedToken
    const [file, setFile] = useState(null)
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('work', data.work)
        formData.append('detail', data.detail)
        formData.append('price', data.price)
        formData.append('status', "Pending")

        fetch('https://sajeeb-creative-agency.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order placed Successfully')
                }
            })
    }

    return (
        <div className='order-container p-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-3">
                            <input required ref={register} value={name} placeholder="Your name / company's name" className='form-control mb-3' type="text" name="name" id="" />
                            <input required ref={register} value={email} placeholder='Your email address' className='form-control mb-3' type="email" name="email" id="" />
                            <input required ref={register}  placeholder='Graphic Design' className='form-control mb-3' type="text" name="work" id="" />
                            <textarea required ref={register}  placeholder='Project Detail' name="detail" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                            <div className="d-flex">
                            <input required ref={register} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                           <div className='file-container'>
                           <input  onChange={e => setFile(e.target.files[0])} ref={register} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                            <label  htmlFor="uploadImg" id='upload-label' className='upload-file-btn text-center'> </label>
                           </div>

                            </div>
                      
                            <div>
                            <button className=" brand-btn mb-4">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;