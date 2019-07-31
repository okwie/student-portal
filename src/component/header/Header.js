import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    
    state={
        email:'',
        password:'',
    }
    signInSubmitHandler = (event) =>{
        event.preventDefault();
        //axios is expecting an object so we're declaring it with studentLogin
        const studentLogin = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:8080/login', studentLogin)
        
        .then(response=>{
            //store student credentials
            const loggedInStudent = response.data;
            localStorage.setItem('loggedInStudent', JSON.stringify(loggedInStudent));
            this.props.history.push('/')
            console.log("testing login: ", loggedInStudent);
            //navigate to home page
        })
        .catch({
            //error user name or password is invalid
        })
        

    }
    signInChangeHandler = (event) =>{
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]:value
        })

    }
    signOut = (event)=>{
        localStorage.removeItem('loggedInStudent');
        this.props.history.push('/');
    }
    render() {
        let signInForm=(
            <React.Fragment>
                <form onSubmit={this.signInSubmitHandler} className="form-inline my-2 my-lg-0">
                        <input onChange={this.signInChangeHandler} value={this.state.email} name="email"className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" />
                        <input onChange={this.signInChangeHandler} value={this.state.password} name="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Sign In</button>
                        </form>
            </React.Fragment>

        )
        let navigationList = (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">Sign-Up</Link>
                </li>
            </React.Fragment>
        )
        if (localStorage.getItem('loggedInStudent')){
            navigationList=
            <React.Fragment>
            <li className="settings">
                <Link className="nav-link" to="/settings">Settings</Link>
            </li>
            <li className="account">
                <Link className="nav-link" to="/account">Account</Link>
            </li>
            </React.Fragment>
            signInForm= <button onClick={this.signOut} className="btn btn-secondary my-2 my-sm-0" type="button">Sign Out</button>;
        }
        return (
            <div className='header-bottom-padding'>
                   <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="nav-link" href="#">Student Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            {navigationList}
                        </ul>
                        {signInForm}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;