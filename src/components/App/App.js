import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from "../StudentList/StudentList";


class App extends Component {
  state = {
    studentList: [],
    detailList: []
  };

  componentDidMount() {
    console.log('Mounting');
    this.getStudents();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios.post(`/students`, newStudent).then((response) => {
      console.log(response);
      this.getStudents();
    }).catch((error) => {
      console.log(error);
    })
  }

  getStudents = () => {
    console.log('In getStudent');
    axios.get('/students').then((response) => {
      console.log(response.data);
      this.setState({
        studentList: response.data
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  getDetails = (name) => {
    console.log('In getDetails');
    axios.get(`https://api.github.com/users/${name}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`).then((response) => {
      console.log(response.data);
      this.setState({
        detailList: [response.data]
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <StudentList studentList={this.state.studentList} getDetails={this.getDetails} detailList={this.state.detailList}/>
      </div>
    );
  }
}

export default App;
