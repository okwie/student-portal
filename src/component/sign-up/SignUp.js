import React, { Component } from 'react';

import axios from 'axios';

class SignUp extends Component {
  state={
    student: {
    firstName:'',
    lastName:'',
    age:'',
    telephone:'',
    email:'',
    password:''
    }
  }
  signUpSubmitHandler = (event) =>{
    event.preventDefault();

    axios.post('http://localhost:8080/submitStudentDetails', this.state.student)
    .then(response =>{
      //navigate to a thank you page
      this.props.history.push('/thank-you');
    })
    .catch(error =>{
      //how to handle error
    })
  }
  signUpChangeHandler = (event)=>{
      const key = event.target.name;
      const value = event.target.value;

      let tempStudent = {...this.state.student};
      tempStudent[key]=value;
      this.setState(
          {
            student:tempStudent
          }
      )
  }
  
    render() {
        return (
        <form onSubmit={this.signUpSubmitHandler} className='container'>
            <h1>Sign Up</h1>
            <div class="row">
                <div class="col">
                <input value={this.state.student.firstName} onChange={this.signUpChangeHandler} name="firstName" type="text" className="form-control" placeholder="First name"/>
              </div>
              <div class="col">
                <input value={this.state.student.lastName} onChange={this.signUpChangeHandler} name="lastName" type="text" className="form-control" placeholder="Last name"/>
              </div>
              </div>
              <div class="row">
                <div class="col">
                <input value={this.state.student.age} onChange={this.signUpChangeHandler} name="age" type="text" className="form-control" placeholder="Age"/>
              </div>
              <div class="col">
                <input value={this.state.student.telephone} onChange={this.signUpChangeHandler} name="telephone" type="text" className="form-control" placeholder="Telephone"/>
              </div>
              </div>
              <div class="row">
                <div class="col">
                <input value={this.state.student.email} onChange={this.signUpChangeHandler} name="email" type="text" className="form-control" placeholder="Email"/>
              </div>
              <div class="col">
                <input value={this.state.student.password} onChange={this.signUpChangeHandler} name="password" type="password" className="form-control" placeholder="Password"/>
              </div>
              </div>  
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
    }
}

export default SignUp;