import React from 'react'
import './Profile.css'
import pro from "../../img/profile.png";

export default function Profile() {
  return (
    <>
    <div class="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="profile-img ">
                            <div className=''>
                            <img src={pro} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <div className="profile-head">
                                    <h4 >
                                        Sabiha Jahan Mim
                                    </h4>
                                    <h6 className='text-secondary'>
                                       Jr. Software Engineer
                                    </h6>
                                    <p className="proile-rating">Joined <span>10</span> month ago</p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="profile-work text-start" >
                            <h5 className='mt-5'>WORK LINK</h5>
                            <a href="##">Bootply Profile</a> <br/>
                            <a href="##">Facebook Profile</a><br/>
                            <a href="##">LinkedIn Profile</a><br/>
                            <a href="##">GitHub Profile</a>
                            <h5 className='mt-5'>SKILLS</h5>
                            <a href="##">Web Designer</a><br/>
                            <a href="##">Web Developer</a><br/>
                            <a href="##">WordPress</a><br/>
                            <a href="##">WooCommerce</a><br/>
                            <a href="##">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active text-start" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                        <div className="col-md-3 d-flex justify-between">
                                                <label>User Name</label>
                                                <p className='ms-auto'>:</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p>{localStorage.getItem("userName")}</p>
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-3 d-flex justify-between">
                                                <label>Full Name</label>
                                                <p className='ms-auto'>:</p>
                                            </div>
                                            <div className="col-md-3">
                                            <p>{localStorage.getItem("userName")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-3 d-flex justify-between">
                                                <label>Email</label>
                                                <p className='ms-auto'>:</p>

                                            </div>
                                            <div className="col-md-3">
                                            <p>{localStorage.getItem("email")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-3 d-flex justify-between">
                                                <label>Phone</label>
                                                <p className='ms-auto'>:</p>
                                            </div>
                                            <div class="col-md-3">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-3 d-flex justify-between">
                                                <label>Profession</label>
                                                <p className='ms-auto'>:</p>
                                            </div>
                                            <div className="col-md-3">
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-3">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 d-flex justify-between">
                                                <label>Total Projects</label>
                                                <p>:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
      
    </>
  )
}
