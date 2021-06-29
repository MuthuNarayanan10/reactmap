import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class XRLearning extends Component {
    render() {
        return (
            <div className="learning">
                <div className="landing-sections">
                    <div className="content-section">
                        <div className="NavContainer">
                            <Header />
                        </div>
                        <div className="contents-xr">
                            <img src="mobile.png"/>
                            <div className="xr-content">
                            <h1><span>Your</span> Content Reality </h1>
                            <a href="#" class="custom-btn pa black xrnow"> Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <h2 className="mb-75 mt-100">XR Learning</h2>
                    <div className="list-box">
                        <div className="aboutus-top-sections">


                            <div className="video-box">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/JXP_hrFuTLc" allowfullscreen></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="how-section1 content-section">
                        <h2 className="mb-75">EON Reality Services</h2>
                        <div class="row m-0">
                            <div class="col-md-6">
                                <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                    Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                            </div>
                            <div class="col-md-6 how-img">
                                <img src="image11.png" class=" img-fluid" alt="" />
                            </div>
                        </div>

                        <div class="row m-0">
                            <div class="col-md-6 how-img">
                                <img src="image11.png" class=" img-fluid" alt="" />
                            </div>
                            <div class="col-md-6">

                                <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                    Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-md-6">

                                <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                    Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                            </div>
                            <div class="col-md-6 how-img">
                                <img src="image11.png" class=" img-fluid" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="sectionsD">
                        <div className="short-contentD">
                            <h2 className="mb-75">Eorn reality video window</h2>
                            <div className="image-containerD text-center">
                                <img src="device.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row m-0 text-center">

                            <br />
                            <p>
                                <a href="#" class=" btn-store">
                                    <img src="gplay.png"></img>
                                </a>

                                <a href="#" class=" btn-store ">
                                    <img src="windows.png"></img>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
