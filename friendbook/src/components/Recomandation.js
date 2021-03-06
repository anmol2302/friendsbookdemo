import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {  } from 'react-router-dom';
export default class Recomandation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levelone: [],
            id: this.props.location.state.levelid,
            index: this.props.location.state.index,
            isButtonClicked:false
        }
        if (this.state.index == 1) {
            axios.get(`http://172.23.238.179:8090/api/v1/user/getRecommendations/1/${this.state.id}`)
                .then((resp) => {
                    console.log("resp data index 1 ", resp.data);
                    this.setState((state, props) => ({ levelone: resp.data }));
                })
        }
        if (this.state.index == 2) {
            axios.get(`http://172.23.238.179:8090/api/v1/user/getRecommendations/2/${this.state.id}`)
                .then((resp) => {
                    console.log("resp data index 2 ", resp.data);
                    this.setState((state, props) => ({ levelone: resp.data }));
                })
        }

    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isButtonClicked: true
        })

    }

    render() {
        console.log("level 1 page", this.state.id);
        console.log("Level grid drop index", this.state.index);
        return (
            this.state.levelone.map((resp) =>
                <div className="row" id="rec">
                    <div className="col-md-4">
                        <div className="card">
                            {/* {(this.props.userProfileImageUrl )? */}
                            <img className="card-img-top" src={resp.userProfileImageUrl} alt="" style={{ width: "100%" }}></img>
                            {/* :(<img src="https://articles-images.sftcdn.cnet/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="" style={{ width: "100%" }} />)} */}
                            <div className="card-body text-center">
                                <h5 className="card-title">
                                    <h4>{resp.name}</h4>
                                    <h4>{resp.email}</h4>
                                    <h4>{resp.contactNo}</h4>
                                </h5>
                                <button className="btn btn-info" onClick={this.handleSubmit.bind(this)}>View</button>
                                {
                            this.state.isButtonClicked ? <Redirect to={{ pathname: "/next-page2", state: { friendId: resp.id } }} /> : null
                        }
                            </div>
                        </div>
                    </div>
                </div>
            )

        )

    }

}