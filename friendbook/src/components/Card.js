import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Card extends Component {
constructor(props){
  super(props);
  this.state={loginUserFriendData:this.props.userFriendList,friendId:this.props.id};
 }
// viewFriend(event)
//   {
//       event.preventDefault();
//       console.log("Click event");
//       console.log("Id of  a particulaor Id",this.state.friendId);
//       this.props.history.push({  pathname: '/next-page2',
//       state: { friendId:this.state.friendId}})
//   }
   render() {
    console.log("data",this.props.userFriendList);
    console.log('name', this.props.name);
    console.log('email', this.props.email);
    console.log('address', this.props.address);
    console.log('contactNo', this.props.userProfileImageUrl);
       return (
         console.log("data inside retuen  ",this.props.userFriendList),
         <div >
           <div className="card col-md-2 mx-auto my-5 recommendation-card" >
           {/* {this.props.userProfileImageUrl==null? */}
               <img className="card-img-top" src={this.props.userProfileImageUrl} alt="Profile Picture"></img>
               {/* (<image className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt=""></image>)} */}
               <div className="card-body text-center">
                   <h5 className="card-title">
                       <a href="#">{this.props.name}</a>
                       <p id="friendId">{this.props.id}</p>
                   </h5>
                   <p className="title">{this.props.email}</p>
                                <p>{this.props.address}</p>
                                <button  className="btn btn-info">view</button>
               </div>
           </div>
           </div>
         
       );
   }

}
