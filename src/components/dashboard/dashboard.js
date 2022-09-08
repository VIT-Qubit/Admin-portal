import React, { Component } from "react";
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        img : null,
        camera_number : "",
        response : "" ,

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

  assignWorker = async (e) => {
    e.preventDefault(); 

      axios.post( 
      'http://0.0.0.0:8000/api/assign-worker', 
      { 
        "customer_ticket_id" : 1
      }
    ) 
    .then((res) => {
      // window.location.reload();
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
         
    })
  } 

  render() {
    const {response} = this.state;
    return (
      <div className="container">
        <h3 className="custom-title">Admin Panel</h3>
        <br />
        <h3 style={{"color":"red"}}>{response}</h3>
        <br/>         <br />
         
        <div className='container'>
            <h3 className="custom-title">Assign Task</h3>
            <br />
            <table className="table table-hover responsive">
                <thead> 
                    <tr>
                        <th>ID</th>  
                        <th>Worker Location</th>
                        <th>Accept</th>  
                        <th>Decline</th> 
                    </tr>
                </thead>
                <tbody>
                  {this.state.live_loc.length ? this.state.live_loc.map((index , loc)=> (
                    <tr key={index}>
                    <td>{index.worker_id}</td>
                    <td><a><i class='bx bx-map-alt' ></i></a></td> 
                    <td>
                        <div 
                        className="col-3 col-md-3 profile-details"                       
                        >
                <div className="appointment-text" 
                > 
                <a onClick={this.assignWorker} >
                  <i class="bx bxs-check-circle"></i>

                  </a>
                
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
            </div>

      </div>
    );
  }
}

export default Dashboard;
