import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import hotel1 from "../hotel1.jpeg";
function HomePage() {
    const [startDate, setStartDate] = useState(new Date());
    const number = [1, 2, 3, 4, 5];
    const listItems = number.map((num) => (
        <div className="item-image" key={num.toString()}>
            <Row>
                <Col className="position-logo">
                    <img className="width-image" src={hotel1} alt="hotel1" />
                </Col>
                <Col xs={5}>
                    <h4>Double Bed</h4>
                    <p>Desc here {num}</p>
                </Col>
                <Col>
                    <div className="position-price">
                        <p>price</p>
                        <p>2.000.000 VND</p>
                    </div>

                    <button className="btn-book">Book</button>
                </Col>
            </Row>
        </div>
    ));
    return (
        <div className="App">
            <div className="background-navbar">
                <div className="position-element">
                    <input className="date-picker" type="text" />
                    <input className="date-picker" type="text" />
                    <button className="button">List all available room</button>
                </div>
            </div>
            {listItems}
        </div>
    );
}

export default HomePage;	