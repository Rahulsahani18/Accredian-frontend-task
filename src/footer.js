import React from 'react'
import '../src/footer.css'
const footer = () => {
    return (
        <div>
            <div className='mt-5 footer'>
                <div className='row '>
                    <div className='col-md-6'>
                        <div className="d-flex flex-column ">
                            <div className="navbar-brands footer-txt ">
                                <a
                                    className=" navbar-brand text-light "

                                    href="#"
                                >
                                    accredian
                                </a>
                            </div>
                            <div className="nav-span footer-Subtxt">
                                <span className="nav-span text-light">credentials that matter</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <button
                            className="footerBtn btn-hover btn-light"

                        >
                            Speak with our Adviser
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 text-light text-center'>
                       
                        <h6 className='me-4'>Programs</h6>
                        <label style={{textAlign:"left" , marginLeft:"30px", fontSize:"13px"}}>
                            <span>
                            Data Science & AI
                            </span>
                            <br/>
                            <span>
                            Product Management
                            </span>
                            <br/>
                            <span>
                            Business Analytics
                            </span>
                            <br/>
                            <span>
                            Digital Transformation
                            </span>
                            <br/>
                            <span>
                            Business Management
                            </span>
                            <br/>
                            <span>
                            Project Management
                            </span>
                            <br/>
                            <span>
                            Strategy & Leadership
                            </span>
                        </label>
                    </div>
                    <div className='col-md-4 text-light'>

                        <h6>Contact Us</h6>
                        <label style={{ textAlign: "left", fontSize: "13px" }}>
                            <span>
                                Email us (For Data Science Queries): admissions@accredian.com
                                Email us (For Product Management Queries):pm@accredian.com
                                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
                                Product Management Admission Helpline:+91 9625811095
                                Enrolled Student Helpline: +91 7969322507
                                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                                Haryana 122015
                                
                            </span>
                        </label>
                    </div>
                    <div className='col-md-4 text-light text-center'>
                        <h6 className='me-2'>Accredian</h6>
                        <label style={{textAlign:"left" , marginLeft:"25px", fontSize:"13px"}}>
                            <span>
                                About
                            </span>
                            <br/>
                            <span>
                                Career
                            </span>
                            <br/>
                            <span>
                                Blog
                            </span>
                            <br/>
                            <span>
                                Admission Policy
                            </span>
                            <br/>
                            <span>
                                Referral Policy
                            </span>
                            <br/>
                            <span>
                                Privacy Policy
                            </span>
                            <br/>
                            <span>
                                Master FAQs
                            </span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer