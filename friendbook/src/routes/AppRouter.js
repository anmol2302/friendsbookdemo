import React from "react";
import {BrowserRouter , Route,Switch ,Link} from  "react-router-dom";
import NextPage from "../components/Nextpage";
import NextPage2 from "../components/NextPage2"
import App from "../components/App";
import Grid from "../components/Grid";
import Recomandation from "../components/Recomandation";
import Signup from "../components/Signup";
import Search from "../components/Search";

class AppRouter extends React.Component 
{
    render  ()
    {
        return (
            <fragment>        
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" id="atag" href="#">FriendsBook</a>
</nav> 

            <BrowserRouter>
            <Switch>
                <Route path = "/" component ={App} exact = {true}/>
                <Route path = "/next-page" component = {NextPage}/>
                <Route path = "/next-page2" component = {NextPage2}/>
                <Route path= "/Grid" component = {Recomandation}/>
                <Route path= "/Grid2" component = {Grid}/>
                <Route path="/signup" component = {Signup}/>
                <Route path="/GridSearch" component = {Search}/>
            </Switch>
                 
            </BrowserRouter>
            </fragment>
        );
    }
}
export default AppRouter;