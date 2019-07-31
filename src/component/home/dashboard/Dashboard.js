import React, { Component } from 'react';
import axios from 'axios';
    

class Dashboard extends Component {
    state = {
        student: {}
    }
    componentDidMount() {
        const loggedInStudent = JSON.parse(localStorage.getItem('loggedInStudent'));
        const email = loggedInStudent.email;

        axios.get('http://localhost:8080/findStudent', {
            params:{
            email: email
            }
        })
            .then(response => {

                this.setState(
                    {
                        student: response.data
                    }
                )
            })
    }
    render() {
        return (

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.student.firstName}</td>
                        <td>{this.state.student.lastName}</td>
                        <td>{this.state.student.email}</td>
                        <td>{this.state.student.telephone}</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default Dashboard;