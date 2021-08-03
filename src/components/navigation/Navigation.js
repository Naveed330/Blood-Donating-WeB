import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginOne from '../login/Login'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home'
import Contact from '../contactUs/Contact'
import Register from '../registration/Registration'
import Footer from '../footer/Footer'
import SignUpPage from '../signup/Signup'
import PrivateRoute from '../privateRoute/PrivateRoute'
export default function Navigation() {
    return(
        <>
        <Router>
        <NavBar/>
        <Switch>
            <Route path='/LoginOne'>
               <LoginOne/>
            </Route>
            <Route path='/SignUpPage'>
               <SignUpPage/>
            </Route>

            <PrivateRoute path='/Home'>
               <Home/>
            </PrivateRoute>

            <PrivateRoute path='/Contact'>
               <Contact/>
            </PrivateRoute>

            <PrivateRoute  path='/Register'>
               <Register/>
            </PrivateRoute>
        </Switch>
        <Footer/>
        </Router>
        </>)}
