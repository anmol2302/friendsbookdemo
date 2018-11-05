import React from 'react';
import axios from 'axios';
import { timingSafeEqual } from 'crypto';


export default class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={userFriendListData:[],userData1:[],value:'',view:false};
        this.handleSearch=this.handleSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSearch(event){
        event.preventDefault();
        console.log("from grid value ",this.state.value);
        this.setState({view:true})
         let user = {
          'email': this.state.value
        }
      
        axios.post(`http://172.23.238.179:8080/api/v1/user/isUserExists`,user)
        .then(response => {
            console.log()
          this.setState((state, props) => ({userData1: response.data}))
        })}
handleChange(event) {
    this.setState({value: event.target.value})
  }
  addFriend(event)
  {
      event.preventDefault();
      console.log("Add friend",this.props.location.state.loginId);
      console.log("friedn id ",this.state.userData1.id);
      console.log("fried name ",this.state.userData1.name);
      axios.post(`http://172.23.238.179:8080/api/v1/user/addFriend/${this.props.location.state.loginId}/${this.state.userData1.id}`)
      .then(resp=>{
          alert("Friend Added")
        console.log("friends ADDED ",resp);}
        )
  }
    render(){
       
        return(
            console.log("login User id",this.props.location.state.loginId),
            console.log("navpage to grid 2",this.props.userFriendListData),
            console.log("user data",this.state.userData1),
            console.log("user data name ",this.state.userData1.name),
            console.log("user data length ",this.state.userData1.length),
            <div className="search">
            <Fragment>
          <form onSubmit={this.handleSearch}>
      <table><tr><td>
      <input  type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search"/></td><td>
      <button ><i className="fa fa-search"></i></button>
      </td></tr></table>
       </form>
{(this.state.view)?(
  (this.state.userData1)?(
  <div className="card col-sm-12 mx-auto my-5 recommendation-card" >
  {(this.state.userData1.userProfileImageUrl )?
  (<img className="card-img-top" src={this.state.userData1.userProfileImageUrl} alt="" style={{ width: "100%" }}></img>):(<img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="" style={{ width: "100%" }} />)}
               <div className="card-body text-center">
                   <h5 className="card-title">
                       <h4>{this.state.userData1.name}</h4>
                       <h4>{this.state.userData1.email}</h4>
                       <h4>{this.state.userData1.contactNo}</h4>
                   </h5>
                <button onClick={this.addFriend.bind(this)} className="btn btn-info">Add Friend</button>
               </div>
           </div>):<h4>You have no friends right now :</h4>):<h3>Enter mail first</h3>
 }
            </Fragment>
            </div>
        )
    }
}