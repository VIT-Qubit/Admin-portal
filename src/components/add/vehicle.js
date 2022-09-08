import React, { Component } from "react";
import Map from "../../assets/images/map.jpeg";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios'; 

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: "",
      hours: "", 
      customers : "",
      showMap: false, 
      show : false , 

      live_loc : []
    };
  }

  componentDidMount() { 
    axios.get(
      'http://0.0.0.0:8000/api/get-worker-live-location'
    ) 
    .then((res) => { 
      this.setState({ live_loc : res.data['data']})
      console.log(res.data['data']);
    })
    .catch((err)=> { 
      console.log(err);
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  postPredict = async (e) => {
    console.log("postPredict");
    e.preventDefault();

    axios.post( 
      "http://0.0.0.0:8001/predict-worker", 
      {
        days: this.state.days, 
        hours: this.state.hours, 
      }
    ) 
    .then((response) => {
      // handle success
      console.log(response); 
      this.setState({customers : response.data['prediction']});
    })
    .catch((error)=> {
      // handle error
      console.log(error);
    })
  } 


  render() {
    return (
      <div className="container">

          
          <Modal centered size="lg" show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header closeButton>
          <Modal.Title>Predict number of customers by Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.postPredict}>
            <div className="container">
            <div className="row"> 
            <div className="col-md-6"> 
              <input className="form-control" type="text" id="days" name="days" placeholder="Days" onChange={this.changeHandler} />
            </div>
            <br />
            <div className="col-md-6">
            <input className="form-control" type="text" id="hours" name="hours" placeholder="Hours" onChange={this.changeHandler} />
            </div>
            <br />
{this.state.customers === "" ? null :
<h4 className="custom-title">No of predicted customers : {this.state.customers}</h4>
}
<br />
<button className="btn btn-primary" type="submit">Predict</button>
            </div>
            </div> 
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setState({ show: false })}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.setState({ show: false })}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal centered size="lg" show={this.state.showMap} onHide={() => this.setState({ showMap: false })}>
        <Modal.Header closeButton>
          <Modal.Title>Current Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="map-image"> 
                <img style={{ "height" : "335px"}} src={Map} alt="map" />
            </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setState({ showMap: false })}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.setState({ showMap: false })}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        
        <h3 className="custom-title"> Agent </h3>
        <br />
         
        

        <div className="row">
          <div className="col-md-3">
            <div className="profile-details">
              <a onClick={() => this.setState({ showAddCategory: true })}>
                <i class="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </div>
        
        <br />
        <table className="table table-hover responsive">
                <thead> 
                    <tr>
                        <th>ID</th> 
                        <th>Worker Location</th>
                        <th>Status</th> 
                        <th>Predict</th> 
                        <th>Latitude</th> 
                        <th>Longitude</th>  
                        <th>Accept</th> 
                        <th>Decline</th> 
                    </tr>
                </thead>
                <tbody>

                {this.state.live_loc.length ? this.state.live_loc.map((index , loc)=> (
                    <tr key={index}>
                    <td>{index.worker_id}</td>
                    <td><a 
                        style={{'cursor': "pointer" , 'color':"blue"}}                        
                        onClick={() => this.setState({ showMap: true })}>
              <i class='bx bx-map-alt' ></i> 
              </a>  </td>
                    <td>{index['data']['data'][0]['status']}</td> 

                    <td>
                            <div className="col-3 col-md-3 profile-details">
                    <div className="appointment-text" onClick={() => this.setState({ show: true })}> 
                    
                      <i class="bx bxs-check-circle"></i>
                    
                      {/* <i class="bx bxs-x-circle"></i> */}
                                           
                    </div>
                  </div></td>  
                    <td>{index['data']['data'][0]['lat']}</td> 
                    <td>{index['data']['data'][0]['lon']}</td> 
                    <td>
                        <div className="col-3 col-md-3 profile-details">
                <div className="appointment-text"> 
                
                  <i class="bx bxs-check-circle"></i>
                
                  {/* <i class="bx bxs-x-circle"></i> */}
                                       
                </div>
              </div></td>  

              <td>
                        <div className="col-3 col-md-3 profile-details">
                <div className="appointment-text"> 
                
                <i class='bx bxs-x-circle' ></i>
                
                  {/* <i class="bx bxs-x-circle"></i> */}
                                       
                </div>
              </div></td>  
                </tr>
                  )) : null}

                  
                </tbody>
            </table>

        <br />
      </div>
    );
  }
}

export default Vehicle;
