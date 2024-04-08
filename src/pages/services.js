import React from 'react';

import { servicesData } from '../data/dataServices';

import SingleService from '../components/singleService';

function Services() {

    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services">
                    <div className="services-header">
                        <h1>Services</h1>
                    </div>
                    <div className="services-body">
                        <p>
                        Voici quelques-uns des services que je propose. N'hésitez pas à me contacter !
                        </p>
                        <div className="services-bodycontainer">
                            {servicesData.map(services => (
                                <SingleService
                                key={services.id}
                                id={services.id}
                                title={services.title}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services