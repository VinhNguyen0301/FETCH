import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Booking = props => (
    <tr>
        <td>{props.booking.username}</td>
        <td>{props.booking.description}</td>
        <td>{props.booking.type}</td>
        <td>{props.booking.quantity}</td>
        <td>{props.booking.prices}</td>
        <td>{props.booking.date.substring(0, 10)}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/" + props.booking._id} style={{ color: "white" }}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => { props.deleteBooking(props.booking._id) }}>Delete</button>
        </td>
    </tr>
)

class BookingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }

        this.deleteBooking = this.deleteBooking.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/bookings/')
            .then(res => {
                this.setState({ bookings: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteBooking(id) {
        axios.delete('http://localhost:5000/bookings/' + id)
            .then(res => console.log(res.data));

        this.setState({ bookings: this.state.bookings.filter(el => el._id !== id) })
    }

    bookingsList() {
        return this.state.bookings.map(currentbooking => {
            return <Booking booking={currentbooking} deleteBooking={this.deleteBooking} key={currentbooking._id} />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Manage Booking</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Prices</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.bookingsList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookingsList;