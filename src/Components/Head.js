import React, { Component } from 'react'
import './App.css';
export default class Head extends Component {
    render() {
        return (
                <div class='container-fluid'>
                    <div class='row'>
                        <div class='col-sm-10 p-2 bg-dark'>
                            <nav class="navbar navbar-expand-lg p-1">
                                <ul class='nav'>
                                    <li class="nav-item">
                                        <a class="nav-link text-danger " href="Personal">Personal | </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white " href="Cards">Cards |</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white " href="DFCCPinnacle">
                                            DFCC Pinnacle |</a></li>
                                    <li class="nav-item ">
                                        <a class="nav-link text-white " href="DigitalBanking">
                                            Digital Banking |</a></li>
                                    <li class="nav-item ">
                                        <a class="nav-link text-white " href="Corporate">
                                            Corporate |</a></li>
                                    <li class="nav-item ">
                                        <a class="nav-link text-white " href="SME">
                                            SME |</a></li>
                                    <li class="nav-item ">
                                        <a class="nav-link text-white" href="International">
                                            International |</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class='col-sm-1 p-2 bg-dark'>
                            <ul class='nav justify-content-center'>
                                <li class="nav-item pt-1">
                                <a class="nav-link text-dark " href="Notification">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class='col-sm-1 p-2 bg-dark'>
                            <ul class='nav justify-content-center'>
                                <li class="nav-item pt-1">
                                <a class="nav-link text-dark " href="tools">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-universal-access" viewBox="0 0 16 16">
                                        <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}
