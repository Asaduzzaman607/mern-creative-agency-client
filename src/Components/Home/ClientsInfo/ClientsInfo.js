import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png';
import ClientsSection from '../ClientsSection/ClientsSection';
import './ClientInfo.css'
const clientsData=[{
    
    image:slack,
},
{
   
    image:google,
},
{
   
    image:uber,
},
{
  
    image:netflix,
},
{
    
    image:airbnb,
},

]


console.log(clientsData)

const ClientsInfo = () => {
    
    return (
        <section className="container">
           <div className="row">
           {
                clientsData.map(client => <ClientsSection client={client}></ClientsSection>)
            }
           </div>
        </section>
    );
};

export default ClientsInfo;