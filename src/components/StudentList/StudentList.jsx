import React, { Component } from 'react';

class StudentList extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <table>
          <thead>
            <tr>
              <th>Student GitHub Username</th>
            </tr>
          </thead>
          <tbody>
          {this.props.studentList.map(student => (
            <tr key={student.id}>
              <td>{student.github_name}</td>
            </tr>
          
          ))}
          </tbody>
        </table>
      </div>
     );
  }
}
 
export default StudentList;