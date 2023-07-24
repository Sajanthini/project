import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
                <div className="card-box">
                    <form >
                        <div class="row">
                            <h2 className='text-center mt-3' >Sign In</h2>
                        </div>

                        <div class="mb-3 mt-3">
                            <div class="row">
                                <div class="offset-lg-3 col-lg-6">
                                    <div class="form-group">
                                        <label>UserName</label>
                                        <input
                                            type="username"
                                            className="form-control mt-1"
                                            placeholder="Enter your UserName"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 mt-3">
                                <div class="row">
                                    <div class="offset-lg-3 col-lg-6">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control mt-1"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="offset-lg-3 col-lg-6">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <p className="forgot-password text-right mt-2 ">
                                            Forgot <a href="#">password?</a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
                
        )
    }
}
