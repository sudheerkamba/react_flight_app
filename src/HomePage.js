
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import flight_logo from './flight_logo.png';
import HomeForm from './Home/HomeForm';
import './App.css';

import { React } from 'react';
import { useNavigate } from 'react-router-dom'
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';




function HomePage() {
    let state = {
        redirect: false
    }
    const navigate = useNavigate();

    const onAdminClick = (event) => {
        const { redirect } = true;
        navigate('/AdminLog')

    };
    const onUserClick = (event) => {

    };
    return (
        <div>
            {/* <div className="header">
    <div className="navbar navbar-default">
    <div className="container-fluid">
    <img src={flight_logo} className="App-logo" alt="logo" width="1740px"/>
       <div className="collapsed navbar-collapse">
        <ul className="list-inline">
             <li className="list-inline-item"><button type="button"  onClick={onAdminClick}>Admin</button></li>
            <li className="list-inline-item"> <button type="button"  onClick={onUserClick}>User</button></li>
        </ul>
       </div>
    </div>
    </div>
    </div> */}
            <div className="App">
                <nav className="navbar navbar-expand-lg">
                
                    <div className="container">
                        <img src={flight_logo} className="App-logo" alt="logo" width="1740px" />
                        </div>
                        </nav>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="container">
                        <br/>
                        <div className="collapsed navbar-collapse">
                        
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <button className="bg-light" type="button" onClick={onAdminClick}>Admin</button>
                                </li>
                                <li className="list-inline-item"> 
                                <button className="bg-light" type="button" onClick={onUserClick}>User</button>
                                </li>
                            </ul>
                            
                        </div>
                       
                    </div>
                </nav>
            </div>
            <div className="container">
            <HomeForm></HomeForm>
            </div>

        </div>
    );

}
export default HomePage;