import React, { useEffect, useState } from 'react';
import ClientsFeedback from './ClientsFeedback';
import './ClientsFeedbackInfo.css'


const ClientsFeedbackInfo = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sajeeb-creative-agency.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="container py-4">
            <div className="client-feedback text-center">
            <h2> <span className='client'>Clients</span> <span className='feedback'>Feedback</span></h2>
            </div>
            <div className="row" >
            {
             reviews.map(feedback => <ClientsFeedback feedback={feedback}></ClientsFeedback>)

            }
            </div>
        </section>
    );
};

export default ClientsFeedbackInfo;