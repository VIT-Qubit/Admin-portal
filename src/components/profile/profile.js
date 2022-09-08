import React, { Component } from 'react'
import UserProfile from "../../assets/images/useravatar.png"
import { Tab, Tabs } from "react-bootstrap";
class Profile extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      key: "information",  
      specialisation  : [
        {
            "location" : "porur",
        } , 
        {
            "location" : "vadapalani",
        }, 
        {
            "location" : "kodambakkam",
        } , 
        {
            "location" : "padi",
        } , 
        {
            "location" : "vandalur",
        }
      ]
    };
  }
    render() { 
        const { key , specialisation } = this.state;
        return (
            <div className="container">
              <h3 className="custom-title">Profile</h3>
              
              <br />
              <div className="row">
                <div className="col-5 col-md-5">
                  <div className="container">
                    <img className="img-fluid" style={{ 'height' : '200px' , 'width' : '200px' , 'borderRadius' : '90%' , 'objectFit' : 'cover'}}  src={UserProfile} alt="profile" />
                    
                     <h3 className="custom-subtitle">Username : Fox Admin</h3>
                      <br />
                     
                  </div>
                </div>
                <div className="col-7 col-md-7">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    transition={false}
                    onSelect={(k) => this.setState({ key: k })}
                    className="mb-3"
                  >
                    <Tab eventKey="information" title="Information">
                      <div className="profile-info container">
                        <h3 className="custom-subtitle">Information</h3>
                        
                        <br />
                         
                        <div className="custom-input-box">
                          <input
                            type="text"
                            className="form-control" 
                            placeholder={"ID: AD1"}
                            disabled
                          />
                        </div>
                        <br />
                        <div className="custom-input-box">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={"Name: Fox Admin "}     
                            disabled                 
                          />
                        </div>
                        <br />
                        <div className="custom-input-box">
                          <input
                            type="number"
                            className="form-control"
                            placeholder= {"Mobile: 1234567890"} 
                            disabled
                          />
                        </div>
                        <br />
      
                        <div className="custom-input-box">
                        <input
                            type="email"
                            className="form-control"
                            placeholder= {"Email: foxAdmin@gmail.com"} 
                            disabled
                          />
                        </div>
                        <br />
                        {/* <div className="col-3 col-md-3">
                        <div className="appointment-progress">
                          {userdata.is_blocked == true ? (
                            <small
                              style={{ background: "#f7d4d7", color: "#e05260" }}
                            >
                             Status: Blocked
                            </small>
                          ) : (
                            <small
                              style={{ background: "#C0F2D8", color: "#2BD47D" }}
                            >
                             Status: Active
                            </small>
                          )}
                        </div>
                      </div> */}
                      <br />
                        
                      </div>
                    </Tab>
                    <Tab eventKey="password" title="Password">
                      <div className="profile-info container">
                        <h3 className="custom-subtitle">Change Password</h3>
                        <br />
                        <form onSubmit={this.changePasswordHandler}>
                        <div className="custom-input-box">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Old Password"
                            name="oldpassword"
                            id="oldpassword" 
                            onChange={this.changeHandler}
                            required
                          />
                        </div>
                        <br />
                        <div className="custom-input-box">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            name="newpassword"
                            id="newpassword" 
                            onChange={this.changeHandler}
                            required
                          />
                        </div>
                        <br />
                        <button class="btn btn-tertiary" type="submit">
                          Change Password
                        </button>
                        </form>
                      </div>
                    </Tab>
                  </Tabs>
                </div>          
              </div>
              <br />
              
              <h3 className="custom-title">Departments</h3>
                <br />
                <div className="activitylog-boxes" style={{"background" : "#e9ecef"}}>
              <div className="row">
              <div className="col-2 col-md-1 appointment-name">Image</div>
              <div className="col-3 col-md-2 appointment-name">Location ID</div>
              <div className="col-3 col-md-3 appointment-name">Location Name</div>
              </div>
              </div>
              {specialisation.length > 0 ? (
                specialisation.map((item, index) => (
          <div className="activitylog-boxes" key={index}>
            <div className="row">
              <div className="col-2 col-md-1">
                <div className="profile-details">
                <img
                            className="img-fluid table-img"
                            src=  {UserProfile}
                            alt="profile"
                />                    
              </div> 
              </div>
              <div className="col-3 col-md-2">
              <div className="appointment-name">                    
                 Location {index}</div>
              </div>
              <div className="col-3 col-md-3">
              <div className="appointment-name">                    
                  {item.location}</div>
              </div>
              
            </div>
          </div>
              ))) : (
                <h3 className="custom-subtitle">No departments</h3>
              )} 
            </div>
          );
    }
}
 
export default Profile;