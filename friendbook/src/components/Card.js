import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Form,
    Button,
} from 'reactstrap';
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUserFriendData: this.props.userFriendList,
            friendId: this.props.id,
            detail: "",
            isButtonClicked: false
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isButtonClicked: true
        })

    }
    render() {
        console.log("data", this.props.userFriendList);
        console.log('name', this.props.name);
        console.log('email', this.props.email);
        console.log('address', this.props.address);
        console.log('contactNo', this.props.userProfileImageUrl);
        return (
            console.log("data inside retuen  ", this.props.userFriendList),
            <div >
                <div className="card col-md-2 mx-auto my-5 recommendation-card" >
                    <img className="card-img-top" src={this.props.userProfileImageUrl} alt="Profile Picture"></img>
                    <div className="card-body text-center">
                        <h5 className="card-title">
                            <a href="#">{this.props.name}</a>
                            <p id="friendId">{this.props.id}</p>
                        </h5>
                        <p className="title">{this.props.email}</p>
                        <p>{this.props.address}</p>
                        <button className="btn btn-info" onClick={this.handleSubmit.bind(this)}>view</button>
                        {
                            this.state.isButtonClicked ? <Redirect to={{ pathname: "/next-page2", state: { friendId: this.state.friendId } }} /> : null
                        }
                        {/* </Link> */}
                        {/* </Form> */}
                    </div>
                </div>
            </div>
        );
    }

}
