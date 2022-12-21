import React, { Component } from 'react'
import Addstudent from './Addstudent'

class StudentDetails extends Component {

  constructor() {
    super();
    this.state = {
      studentList: []
    }
  }

  addstudent = (newStudent) => {
    let studentListNew = this.state.studentList;
    if (studentListNew.length > 0) {
      newStudent.id = studentListNew[studentListNew.length - 1].id + 1;
    }
    else {
      newStudent.id = 1;
    }
    studentListNew.push(newStudent);
    this.setState({ studentList: studentListNew });
    console.log(this.state.studentList);
  }

  render() {
    return (
      <Addstudent addStudentHandler={this.addstudent} />
    )
  }
}

export default StudentDetails;