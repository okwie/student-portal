import React, { Component } from 'react';
import Header from '../header/Header';
import SignUp from '../sign-up/SignUp';
import {Route, withRouter} from 'react-router-dom';
import About from '../about/About';
import ThankYou from './../thankyou/ThankYou';
import Home from './../home/Home';
import StudentLife from './../student-life/StudentLife';
class Layout extends Component {
    render() {
        let routes = (
            <React.Fragment>
                <Route exact path='/' component={SignUp} />
                <Route exact path='/sign-up' component={SignUp}/>
                <Route exact path='/thank-you' component={ThankYou}/>
            </React.Fragment>
        )
        if(localStorage.getItem('loggedInStudent')){
            routes = (
            <React.Fragment>
                <Route exact path='/' component={Home} />   
                <Route path='/home' component={Home}/>
            </React.Fragment> 
            )
        }
        return (
            <div>
                <Header {...this.props}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/home    /student-life' component={StudentLife}/>
                {routes}
            </div>
        );
    }
}

export default withRouter(Layout);