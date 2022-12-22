import React,{ Component } from 'react'
import Header from './title/Header'
import './Addstudent.css';
export class Addstudent extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      studentname: '',
      parentname:'',
      address:'',
      dateofbirth:'',
      english:'',
      maths:'',
      Science:'',
      socialscience:'',
      totalmarks:'',
      percentage:'',
      selectyourgroup:'',
      emailid:'',
      mobilenumber:''
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
    const { studentname,parentname,address,dateofbirth,language,english,maths,Science,socialscience,totalmarks,percentage,selectyourgroup,emailid,mobilenumber} = this.state;
    return (
      <div>
        <Header heading="( HIGHER SECONDERY STUDENT ADMISSION PORT )" instituteName="OIP SCHOOL OF EDUCATION"></Header>
        <div className='component-body-container'>
          <button className='custom-btn'>Back</button>
          <form className='student-form' onSubmit={this.onFormSubmitted.bind(this)}>
            <span><label htmlFor='studentname' className='label-control'>Name: </label><input id="studentname" type="text" className="input-control" name="studentname" onChange={this.inputChangeHandler}></input></span>     <span><label htmlFor='parentname' className='label-control'>Parent Name: </label><input id="parentname" type="text" className="input-control" name="parentname" onChange={this.inputChangeHandler}></input></span><br /><br />
             <span><label htmlFor='address' className='label-control'>Address: </label><input id="address" type="text" className="input-control" name="address" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='date of birth' className='label-control'>Date Of Birth: </label><input id="date of birth" type="text" className="input-control" name="date of birth" onChange={this.inputChangeHandler}></input></span><br /><br />
            <p>Subject Marks Out Of 100</p>
            <span><label htmlFor='language' className='label-control'>Language: </label><input id="language" type="text" className="input-control" name="language" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='english' className='label-control'>English: </label><input id="english" type="text" className="input-control" name="english" onChange={this.inputChangeHandler}></input></span><br /><br />
            <span><label htmlFor='maths' className='label-control'>Maths: </label><input id="matha" type="text" className="input-control" name="maths" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='science' className='label-control'>Science: </label><input id="science" type="text" className="input-control" name="science" onChange={this.inputChangeHandler}></input></span><br /><br />
            <span><label htmlFor='social science' className='label-control'>Social science: </label><input id="social science" type="text" className="input-control" name="social science" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='total marks' className='label-control'>Total Marks: </label><input id="total marks" type="text" className="input-control" name="total marks" onChange={this.inputChangeHandler}></input></span><br /><br />
            <span><label htmlFor='percentage of mark' className='label-control'>Percentage of Mark: </label><input id="percentage of mark" type="text" className="input-control" name="percentage of mark" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='select your group' className='label-control'>Select Your Group: </label><select name="select your group" id="select your group">
                   <option value="Maths Biology">Maths Biology</option>
                   <option value="Computer Maths">Computer Maths</option>
                   <option value="Agri">Agri</option>
                   <option value="Commers">Commers</option>
                   <option value="History">History</option>
                   <option value="Science">Science</option>
                   <option value="Vocational">Vocational</option>
            </select></span><br /><br />
            <span><label htmlFor='emai id' className='label-control'>Email Id: </label><input id="email id" type="text" className="input-control" name="email id" onChange={this.inputChangeHandler}></input></span><span><label htmlFor='mobile number' className='label-control'>Mobile Number: </label><input id="mobile number" type="text" className="input-control" name="mobile number" onChange={this.inputChangeHandler}></input></span><br /><br />
           <div className='student-info-container'>
              <span className='student-to-add-heading'>Student to be added:</span><br />
              <span className='student-info'>StudentName: {studentname}</span><span className='student-info'>Parent Name: {parentname}</span><br />
              <span className='student-info'>Address: {address}</span><span className='student-info'>Date Of Birth: {dateofbirth}</span><br />
              <span className='student-info'>Language: {language}</span><span className='student-info'>English: {english}</span><br />
              <span className='student-info'>Maths: {maths}</span><span className='student-info'>Science: {Science}</span><br />
              <span className='student-info'>Social Science: {socialscience}</span><span className='student-info'>Total Marks: {totalmarks}</span><br />
              <span className='student-info'>Percentage: {percentage}</span><span className='student-info'>Select Your Group: {selectyourgroup}</span><br />
              <span className='student-info'>Email Id: {emailid}</span><span className='student-info'>Mobile Number: {mobilenumber}</span><br />
            </div>
            <button type="submit" className='student-btn add-btn'>Add</button>
          </form>
        </div>
      </div>
    )
     }
   }


export default Addstudent
