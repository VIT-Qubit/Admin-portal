import React, { Component } from 'react' ;
import Map from "../../assets/images/map.jpeg";

class Maps extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container"> 
            <h3 className="custom-title"> Customer 1 current position</h3>
            <br />

            <div className="map-image"> 
                <img src={Map} alt="map" />
            </div>            
            
            </div>

        );
    }
}
 
export default Maps;