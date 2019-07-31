import React, { Component } from 'react';
import pic03 from '../../images/pic03.jpg'
import pic04 from '../../images/pic04.jpg'
import pic05 from '../../images/pic05.jpg'
import pic06 from '../../images/pic06.jpg'
import {Card, CardActions, CardText, Button, CardTitle} from 'react-mdl';


class StudentLife extends Component {
    render() {
        return (
            <section id="two" className="wrapper-style1-special">
            <div className="row">
                <div className="row">
                    <div className="box-person">
                        <div className="image-round">
                            <img src={pic03} alt="Person 1" />
                        </div>
                        <h3>Magna</h3>
                        <p>Cipdum dolor</p>
                    </div>
                    <div className="box-person">
                        <div className="image-round">
                            <img src={pic04} alt="Person 2" />
                        </div>
                        <h3>Ipsum</h3>
                        <p>Vestibulum comm</p>
                    </div>
                    <div className="box-person">
                        <div className="image-round">
                            <img src={pic05} alt="Person 3" />
                        </div>
                        <h3>Tempus</h3>
                        <p>Fusce pellentes</p>
                    </div>
                    <div className="box-person">
                        <div className="image-round">
                            <img src={pic06} alt="Person 4" />
                        </div>
                        <h3>Dolore</h3>
                        <p>Praesent placer</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default StudentLife;