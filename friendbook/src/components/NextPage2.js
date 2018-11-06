import React from "react";
import axios from "axios";
import Card from './Card';
import Grid from './Grid';
export default class NextPage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userfriend: [],
        }
    }

    componentDidMount() {
        axios.get(`http://172.23.238.179:8080/api/v1/user/getById/${this.props.location.state.friendId}`)
            .then((resp) => {
                console.log(resp.data);
                this.setState({
                    user: resp.data
                })
            }
            ).then((resp) => {
                axios.get(`http://172.23.238.179:8080/api/v1/user/getUserFriendById/${this.props.location.state.friendId}`)
                    .then((resp) => {
                        this.setState({ userfriend: resp.data })
                        console.log("friends Data in next page 2 ", resp.data)
                    }
                    )
            });
    }


    render() {
        return (
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                {console.log("in return mounting dtata", this.state.user)},
                                {(this.state.user) ? (<img src={this.state.user.userProfileImageUrl} alt="user image" style={{ width: "100%" }} />)
                                    : (<img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="user image" style={{ width: "100%" }} />)}
                                {/* <h1>{this.state.user.data.name}</h1> */}
                                <p className="title">{this.state.user.email}</p>
                                <p>{this.state.user.address}</p>
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
                                    {console.log("checking user data ", this.state.userfriend)}
                                    {this.state.userfriend.length ?
                                        (this.state.userfriend.map((friend, index) => <Card key={index} {...friend} />)) : (<Grid loginId={this.props.friendId} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                    </div>
                </form>
            </div>
        );


    }

}

