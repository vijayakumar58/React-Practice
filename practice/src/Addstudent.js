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
        <Header heading="( HIGHER SECONDERY STUDENT ADMISSION PORTAL )" instituteName="OIP SCHOOL OF EDUCATION"></Header>
        <div className='component-body-container'>
          <button className='custom-btn'>Back</button>
          <form className='student-form' onSubmit={this.onFormSubmitted.bind(this)}>
            <div className='container-lg'>
              <div className='row'>
                <div className='col-md-6'>
                  <h4>Student Details</h4><br/>
                <label htmlFor='studentname' className='label-control'>Student Name :</label><br />
                <input id="studentname" type="text" className="input-control" name="studentname" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='parentname' className='label-control'>Parent Name :</label><br />
                <input id="parentname" type="text" className="input-control" name="parentname" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='address' className='label-control'>Address  : </label><br />
                <input id="address" type="text" className="input-control" name="address" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='date of birth' className='label-control'>Date Of Birth : </label><br />
                <input id="date of birth" type="text" className="input-control" name="date of birth" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='select your group' className='label-control'>Select Your Group : </label><br />
                <select name="select your group" id="select your group" className="input-control">
                   <option value="Maths Biology">Maths Biology</option>
                   <option value="Computer Maths">Computer Maths</option>
                   <option value="Agri">Agri</option>
                   <option value="Commers">Commers</option>
                   <option value="History">History</option>
                   <option value="Science">Science</option>
                   <option value="Vocational">Vocational</option>
                </select><br /><br />
                <label htmlFor='emai id' className='label-control'>Email Id : </label><br />
                <input id="email id" type="text" className="input-control" name="email id" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='mobile number' className='label-control'>Mobile Number : </label><br />
                <input id="mobile number" type="text" className="input-control" name="mobile number" onChange={this.inputChangeHandler}></input><br />
                </div>
                <div className='col-md-6'>
                 <h4>10th Subject Marks Out Of 100</h4><br/>
                <label htmlFor='language' className='label-control'>Language : </label><br />
                <input id="language" type="number" className="input-control" name="language" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='english' className='label-control'>English : </label><br />
                <input id="english" type="number" className="input-control" name="english" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='maths' className='label-control'>Maths : </label><br />
                <input id="matha" type="number" className="input-control" name="maths" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='science' className='label-control'>Science : </label><br />
                <input id="science" type="number" className="input-control" name="science" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='social science' className='label-control'>Social science : </label><br />
                <input id="social science" type="number" className="input-control" name="social science" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='total marks' className='label-control'>Total Marks : </label><br />
                <input id="total marks" type="number" className="input-control" name="total marks" onChange={this.inputChangeHandler}></input><br /><br />
                <label htmlFor='percentage of mark' className='label-control'>Percentage of Mark : </label><br />
                <input id="percentage of mark" type="number" className="input-control" name="percentage of mark" onChange={this.inputChangeHandler}></input><br /><br />
                </div>
              </div>
             </div>
           <div className='student-info-container'>
            <div className='row'>
            <h4 className='student-to-add-heading'>Student to be added</h4><br />
              <div className='col-sm-6'>
              <span className='student-info'>StudentName : {studentname}</span><br />
              <span className='student-info'>Parent Name : {parentname}</span><br />
              <span className='student-info'>Address : {address}</span><br />
              <span className='student-info'>Date Of Birth : {dateofbirth}</span><br />
              <span className='student-info'>Select Your Group : {selectyourgroup}</span><br />
              <span className='student-info'>Email Id : {emailid}</span><br />
              <span className='student-info'>Mobile Number : {mobilenumber}</span><br />
              </div>
              <div className='col-sm-6'>
              <span className='student-info'>Language : {language}</span><br />
              <span className='student-info'>English : {english}</span><br />
              <span className='student-info'>Maths : {maths}</span><br />
              <span className='student-info'>Science : {Science}</span><br />
              <span className='student-info'>Social Science : {socialscience}</span><br />
              <span className='student-info'>Total Marks : {totalmarks}</span><br />
              <span className='student-info'>Percentage : {percentage}</span><br />
              </div>
            </div>
            </div>
            <button type="submit" className='student-btn add-btn'>submit</button>
          </form>
        </div>
      </div>
    )
     }
   }


export default Addstudent
