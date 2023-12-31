import React, { Component } from 'react'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Search } from '../SubComponents/Search';
export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-2  bg-white text-dark">
                        <img src="Sample1.png" alt="Logo" class="img-fluid" height={70} width={150} />
                    </div>
                    <div class="col-sm-6  bg-light text-dark">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                            <ul class='nav'>
                                <li class="nav-item">
                                    <a class="nav-link text-dark " href="AboutUS">About US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark " href="Careers">Careers</a></li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark " href="Sustainability">
                                        Sustainability</a></li>
                                <li class="nav-item ">
                                    <a class="nav-link text-dark " href="Media">
                                        Media</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class='col-sm-1  bg-light text-dark'>
                        <ul class='nav justify-content-center'>
                            <li class="nav-item ">
                                <a class="nav-link text-dark " href="Search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-1  bg-secondary ">
                        <ul class='nav justify-content-center'>
                            <li class="nav-item ">
                                <a class="nav-link text-dark " href="ContactUS">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg> ContactUS</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-1  bg-secondary ">
                        <ul class='nav justify-content-center'>
                            <li class="nav-item">
                                <a class="nav-link text-dark " href="LocateUS">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>LocateUS</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-1  bg-danger">
                        <ul class='nav justify-content-center'>
                            <li class="nav-item">
                                <a class="nav-link text-white " href="Login">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                    </svg>Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/Search' element={<Search/>}/>
            </Routes>
            </BrowserRouter>
        )
    }
}
