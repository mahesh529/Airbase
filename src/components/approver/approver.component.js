import React from 'react';
import './approver.component.scss';
import tick from  './../../assets/tick.png';

function AppApprover(props){
    let accepted=[],pending=[];
    let toShortFormat = (date)=> {
        date= new Date(date);
        var month_names =["Jan","Feb","Mar",
                          "Apr","May","Jun",
                          "Jul","Aug","Sep",
                          "Oct","Nov","Dec"];
        
        var day = date.getDate();
        var month_index = date.getMonth();
        var year = date.getFullYear();
        
        return month_names[month_index] + " " + day + ", " + year;
    }

    let getApprover=(obj,index,status)=>{
        return (
            <div key={index}>
                <div>
                    <span className="number small-font bold-font grey-font">{index+1}</span>
                    {obj.approver.profile_picture?
                      <img className="profile_pic" src={obj.approver.profile_picture} alt="pic"/>
                    :null}
                </div>
                <div className="cont-elipse">
                    <div className='title-cont'>
                        <span className="bold-font ellipses">
                            {obj.approver.first_name+" "+obj.approver.last_name+" "}
                        </span>
                        <span className="small-font grey-font ellipses">
                            ({obj.approver.email})
                        </span>
                    </div>
                    <div className="small-font grey-font">
                        {status==='accepted'?"Approved "+toShortFormat(obj.last_updated_date):"Last notified "+toShortFormat(obj.last_notified_time)}
                    </div>
                </div>
                <div className="circle">
                    {
                        status==='accepted'?<img alt='success' src={tick}/>:<span ></span>
                    }
                </div>
            </div>
        );
    };

    props.serviceData.approvers.sort((a, b) => a.status.localeCompare(b.status))

    props.serviceData.approvers.forEach((element,index) => {
        if(element.status=== "accepted"){
            accepted.push(getApprover(element,index,element.status));
        }else{
            pending.push(getApprover(element,index,element.status));
        }
    });
    
    return(
        <div className="white-bg aprrovers">
            <div className="mobile-container" id="approver-cont">
                <div className="approved">
                    <div className="small-font bold-font grey-font">Approved</div>
                    {accepted}
                </div>
                <div className="hr"></div>
                <div className="pending">
                    <div className="small-font bold-font grey-font">Pending</div>
                    {pending}
                </div>
            </div>
          </div>
    );
}

export default AppApprover;