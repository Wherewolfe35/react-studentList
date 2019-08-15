import React, { Component } from 'react';
import Controller from "../Utility/Controller";
import Select from "../Utility/Select"
import Tooltip from 'tooltip';


class StudentDetails extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
          <ul>
            <Controller>
            <Select><li>{this.props.detailList.followers}</li></Select>
            <Tooltip />
            </Controller>
          </ul>
        
      </div>
     );
  }
}
 
export default StudentDetails;