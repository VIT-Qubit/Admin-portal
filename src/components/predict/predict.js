import React, { Component } from 'react'; 
import axios from 'axios';
import Chart  from "../../assets/images/chart.png";
// import { Bar } from 'react-chartjs-2';


// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [2 , 3 ,4, 5,6,7,9],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [2 , 3 ,4, 5,6,7,9],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

class Predict extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          workers: "",
          days: "",
          customers : "", 

        };
      }

  

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
      }; 

      postPredict = async (e) => { 
        e.preventDefault();

        axios.post( 
          "http://0.0.0.0:8001/predict-product", 
          {
            workers: this.state.workers, 
            days: this.state.days, 
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
        <h3 className="custom-title"> Predict your Customers using AI</h3>
        <br />
        <form className="form-horizontal" onSubmit={this.postPredict}>
          
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                id="workers"
                name="workers"
                type="number"
                placeholder="Workers"
                onChange={this.changeHandler}
                required
              />
              <br />
              <input
                className="form-control"
                id="days"
                name="days"
                type="number"
                placeholder="Days"
                onChange={this.changeHandler}
                required
              />
              <br />
               
            </div>
          </div>
        <button type="submit" className="btn btn-primary">Predict</button>
        </form>
        <br />  

        {this.state.customers === "" ? null :        
        <h3 className="custom-title">No of customers predicted : {this.state.customers}</h3>
        }

        <br />
<h3 className="custom-title">Graph Analysis</h3>
        <br />

        <img src={Chart} alt="chart" />

        {/* <Bar options={options} data={data} /> */}
      </div>  
        );
    }
}
 
export default Predict;