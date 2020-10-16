import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        fetch('https://sajeeb-creative-agency.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div className='make-admin-container p-4'>
            <div className="service-form p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="m-0">Email</p>
                    <input required ref={register} type="email" placeholder='asaduzzamansajeeb@gmail.com' name="email" id="" className="form-control" />
                    <button className="brand-btn ml-2 px-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;