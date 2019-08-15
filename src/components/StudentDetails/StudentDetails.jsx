import React, { Component } from 'react';


class StudentDetails extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {this.props.detailList.map(detail=>(
          <ul>
            <li>{detail.followers}</li>
          </ul>
        ))}
      </div>
     );
  }
}
 
export default StudentDetails;