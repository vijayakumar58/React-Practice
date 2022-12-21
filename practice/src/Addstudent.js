import React,{ Component } from 'react'
import Header from './title/Header'
import './Addstudent.css';
export class Addstudent extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      studentname: '',
      phone: ''
    }
    console.log(this.state);
    console.log("Constructor called - Add Student");
  }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
    console.log("inputChangeHandler called!!! - Add Student");
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addstudentHandler(this.state);
  }
  render() {
    console.log("Render called!!! - Add Student");
    const { studentname, phone } = this.state;
    return (
      <div>
        <Header heading="Add Student"></Header>
        <div className='component-body-container'>
          <button className='custom-btn'>Back</button>
          <form className='student-form' onSubmit={this.onFormSubmitted.bind(this)}>
            <label htmlFor='studentname' className='label-control'>Name: </label><br />
            <input id="studentname" type="text" className="input-control" name="studentname" onChange={this.inputChangeHandler}></input><br /><br />
            <label htmlFor='phone' className='label-control'>Phone: </label><br />
            <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangeHandler}></input><br /><br />
            <div className='student-info-container'>
              <span className='student-to-add-heading'>Student to be added:</span><br />
              <span className='student-info'>Name: {studentname}</span><br />
              <span className='student-info'>Phone: {phone}</span>
            </div>
            <button type="submit" className='student-btn add-btn'>Add</button>
          </form>
        </div>
      </div>
    )
     }
   }


export default Addstudent
