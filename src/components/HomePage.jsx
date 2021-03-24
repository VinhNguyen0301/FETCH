import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import hotel1 from "../hotel1.jpeg";
import DatePicker from "react-datepicker";

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

    const onChangeDate = (date) => {
        setStartDate(date);
    }

    return (
        <div className="App">
            <div className="background-navbar">

                <Container>
                    <Row className="nav-position">
                        <Col ></Col>
                        <Col>
                            <div className="form-group column">
                                <label>CHECK IN: </label>
                                <div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={onChangeDate}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col >
                            <div className="form-group column" >
                                <label>CHECK OUT: </label>
                                <div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={onChangeDate}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col >
                            <button className="button column">List all available room</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {listItems}
        </div>
    );
}

export default HomePage;	