import React, { useState,useEffect } from 'react';
import './request.component.scss';
import AppHeader from '../header/header.component';
import AppServiceRequest from '../service-request/service-request.component';
import AppApprover from '../approver/approver.component';
import serviceMockData from '../../request.json';

function AppRequest(){
    const [serviceData, setServiceData] = useState();

    useEffect(() =>
        setServiceData(serviceMockData)
    ,[]);
  
    return(
        <div>
            <AppHeader/>
            {
                serviceData?
                <div className="service-cont desk-container">
                    <div>
                        <div className="title white-bg mobile-container">
                            <img alt="amozon" src={serviceData.service.logo}/>
                            Request for {serviceData.service.name} (#{serviceData.service.usage_count})
                        </div>
                        <div className="req-cont">
                            <AppServiceRequest serviceData={serviceData}/>

                            <AppApprover  serviceData={serviceData}/>
                        </div>
                    </div>
                    
                </div>:null
            }
        </div>
    );
}

export default AppRequest;