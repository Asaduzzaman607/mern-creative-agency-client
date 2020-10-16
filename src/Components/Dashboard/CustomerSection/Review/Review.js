import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode'
import './Review'

const Review = () => {
    const { register, handleSubmit } = useForm()
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { name, picture } = decodedToken

    const onSubmit = data => {
        data.img = picture
        fetch('https://sajeeb-creative-agency.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Review submitted successfully")
                }
            })
    }
    return (
            <div className='review-container order-container p-4'>
                <Form  onSubmit={handleSubmit(onSubmit)} className="w-50">
                <Form.Group controlId="ControlInput1">
                <Form.Control required ref={register} value={name} className="font-weight-light" type="text" name="name" placeholder="Your Name/Company's Name" />
                </Form.Group>
                <Form.Group controlId="ControlInput3">
                <Form.Control required ref={register}  className="font-weight-light" type="text" name="designation" placeholder="Company's Name,Designation" />
                </Form.Group>
                <Form.Group controlId="ControlTextarea1">
                <Form.Control required ref={register}  className="font-weight-light" as="textarea" name="description"  placeholder="Description" rows={3} />
                </Form.Group>
                  <button className="brand-btn" type="submit">Submit</button>
               
                </Form>
                
            </div>
    );
};

export default Review;