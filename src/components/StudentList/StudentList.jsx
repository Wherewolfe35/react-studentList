import React, { Component } from 'react';
import StudentDetails from "../StudentDetails/StudentDetails";

class StudentList extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <table>
          <thead>
            <tr>
              <th>Saved GitHub Usernames</th>
            </tr>
          </thead>
          <tbody>
          {this.props.studentList.map(student => (
            <tr key={student.id}>
              <td>{student.github_name} <button onClick={() => this.props.getDetails(student.github_name)}>More Details</button></td>
            </tr>
          
          ))}
          </tbody>
        </table>
        <StudentDetails detailList={this.props.detailList}/>
      </div>
     );
  }
}
 
export default StudentList;