import React from 'react';
import './service-request.component.scss';

function AppServiceRequest(props){
    return(
     <div id="whole-service" className="mobile-container white-bg">
        <div className="service-req-cont">
            <div className="border-btm-grey">
                <span className="grey-font">Requested by</span>
                <span>
                    <img alt="person" src={props.serviceData.requested_by.profile_picture}/>
                    {props.serviceData.requested_by.first_name+" "+props.serviceData.requested_by.last_name}
                </span>
            </div>
            <div className="border-btm-grey">
                <span className="grey-font">Cost</span>
                <span>
                    ${props.serviceData.cost}
                </span>
            </div>
            <div className="border-btm-grey double-row">
                <div className="border-btm-grey">
                    <span className="grey-font">Renewal Frequency</span>
                    <span>
                        {props.serviceData.renewal_frequency_in_months} month
                    </span>
                </div>
                <div >
                    <span  className="grey-font">Annual Cost</span>
                    <span>
                        ${props.serviceData.cost*12}             
                    </span>
                </div>
            </div>
            <div className="border-btm-grey">
                <span className="grey-font">Expense Account</span>
                <span>
                    {props.serviceData.expense_account}
                </span>
            </div>
            {/* <div>
                <span>File</span>
                <span>
                    <img src={props.serviceDatafiles}/>
                </span>
            </div> */}
            <div>
                <span className="grey-font">Description</span>
                <span>
                    {props.serviceData.description}
                </span>
            </div>
        </div>
        <div className="small-font">
            <span className="orange-font">
                Your company is already paying for {props.serviceData.service.name} on a recurring basis.
            </span> 
            <div className="grey-font">
            (1 instance owned by  {props.serviceData.requested_by.first_name+" "+props.serviceData.requested_by.last_name}).
            </div>
        </div>
        <div className="btn-cont">
                        <button className="submit">Approve</button>
                        <button className="cancel">Reject</button>
        </div>
    </div>
       
    );
}

export default AppServiceRequest;