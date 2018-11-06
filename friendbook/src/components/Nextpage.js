import React from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from './Card';
import Grid from './Grid';
import {
    Button,
} from 'reactstrap';

export default class Nextpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { userFriendListData: [], userData: [], value: '', levelid: this.props.location.state.detail.id };
        // console.log("seciomf ",this.props.location.state.detail.id)
        axios.get(`http://172.23.238.179:8080/api/v1/user/getUserFriendById/${this.props.location.state.detail.id}`)
            .then(userFriendListResp => {
                console.log("the friend list response from s", userFriendListResp.data)
                this.setState((state, props) => ({ userFriendListData: userFriendListResp.data }));
            });
    }
    change(event) {
        console.log("dropdownload display");
        console.log(document.getElementById("mySelect").selectedIndex);
        let indexValue = document.getElementById("mySelect").selectedIndex;
        // if(index==1)
        // {
        this.props.history.push({
            pathname: '/Grid',
            state: { levelid: this.state.levelid, index: indexValue }
        })
    }
    render() {
        return (

            console.log("in return ", this.props.location.state.detail.id),
            <fragment>
                {/* <div className="select"> */}
                <br></br>
                <Link to={{
                    pathname: "/GridSearch",
                    state: {
                        loginId: this.props.location.state.detail.id
                    }
                }} >
                    <button type="button" className="btn">Search Friend</button>
                    <Link to="/"  ><Button className="btn btn-primary" id="btn2"  >Logout</Button></Link>
                </Link>
                {/* <button >Search friend</button><Link> */}
                {/* <div class="custom-select" style={{width:"200px"}}> */}
                <select class="custom-select" style={{ width: "200px" }} id="mySelect" onChange={this.change.bind(this)}>
                    <option  >Recommendation</option>
                    <option  >Level1</option>
                    <option  >Level2</option>
                </select>
                {/* </div> */}
                {/* </div> */}
                <br></br>
                <div className="container emp-profile">
                    {/* <h1>User Details</h1> */}
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    {(this.props.location.state.detail.userProfileImageUrl) ? (<img src={this.props.location.state.detail.userProfileImageUrl} alt="user image" style={{ width: "100%" }} />)
                                        : (<img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="user image" style={{ width: "100%" }} />)}
                                    <h1>{this.props.location.state.detail.name}</h1>
                                    <p className="title">{this.props.location.state.detail.email}</p>
                                    <p>{this.props.location.state.detail.address}</p>
                                    <div style={{ margin: " 24px 0" }}>
                                        <i className="fa fa-dribbble"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-linkedin"></i>
                                        <i className="fa fa-facebook"></i>
                                    </div>
                                    {/* <p><Link to="/next-page2"><button>Contact</button></Link></p> */}
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h1 id="style">Friends Suggestion</h1>
                                    <div className="col-md-6">
                                        {console.log("checking user data ", this.state.userData)}
                                        {this.state.userFriendListData.length ?
                                            (this.state.userFriendListData.map((friend, index) => <Card key={index} {...friend} />)) : (<Grid loginId={this.props.location.state.detail.id} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                        </div>
                    </form>
                </div>
            </fragment>
        );
    }
}

