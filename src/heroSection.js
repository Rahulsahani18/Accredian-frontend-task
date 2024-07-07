import React, { useState } from "react";
import TopImage from "./images/TopPic.png";
import MoneyImage from "./images/moneyPic.png";
import MiddleImage from "./images/MiddlePic.png";
import "./heroSection.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const HeroSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobile] = useState("");
  const [course, setCourse] = useState("");

  const handleClose = async () => {
    if (name == "" || email == "" || mobileNo == "" || course == "") {
      alert("All fields are required");
      setShow(true);
    } else {
      try {
        const res = await axios.post("https://accredian-backend-task-bkye.onrender.com/referrals", {
          name,
          email,
          mobileNo,
          course,
        });
        if (res && res.data.success) {
          alert("Refer successful");
        } else {
          alert("Something went wrong");
        }
      } catch (err) {
        alert("Something went wrong");
      }
      setShow(false);
      setName("");
      setEmail("");
      setMobile("");
      setCourse("");
    }
  };
  const handleCloseButton = () => {
    setShow(false);
  };
  return (
    <>
      <div className="row ">
        <div className="hero-btn">
          <p className="btn-hover">Refer</p>
          <p className="btn-hover">Benefits</p>
          <p className="btn-hover">FAQs</p>
          <p className="btn-hover">Supports</p>
        </div>
      </div>
      <div className="container-fluid mt-5 d-flex justify-content-center ">
        <div
          className="card shadow-lg"
          style={{
            width: "50rem",
            height: "22rem",
            backgroundColor: "#EEF5FF",
            borderRadius: "15px",
          }}
        >
          <div className="card-body ">
            <div className="row">
              <div className="col-md-6">
                <img className="MoneyPic " alt="photo" src={MoneyImage} />
                <h1 className="Head">
                  Let's Learn <br /> & Earn
                </h1>
                <span className="sub-head ms-4 fs-5">Get a chance to win </span>
                <br />
                <span className="ms-4 fs-5">up-to</span>
                <h4
                  className="fw-bold ms-4"
                  style={{ color: " #0268ed", fontSize: "30px" }}
                >
                  Rs. 15,000
                </h4>
                <div>
                  {" "}
                  <button
                    className=" navbtn2 ms-4 mt-3 btn-hover btn-dark"
                    onClick={handleShow}
                  >
                    Refer Now
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <img className="MoneyPic1 " alt="photo" src={MoneyImage} />
                <img className="MoneyPic2  " alt="photo" src={MoneyImage} />
                <img className="MoneyPic3" alt="photo" src={MoneyImage} />
                <img className="TopPic" alt="photo" src={TopImage} />
                <img className="MoneyPic4" alt="photo" src={MoneyImage} />
              </div>
            </div>
          </div>
        </div>

        {/* MODEL */}

        <Modal show={show} onHide={handleCloseButton} size="md">
          <Modal.Header closeButton onClick={handleCloseButton}>
            <h4 className="fw-bold">Enter Referee Details</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-4">
              <form>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    autoFocus
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    pattern="[0-9]*"
                    maxlength="10"
                    class="form-control"
                    placeholder="Mobile No."
                    required
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Course"
                    required
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary float-end mt-3"
                  onClick={handleClose}
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* MIDDLE SECTION */}
      <div className=" middle-container">
        <div className="container">
          <div className="d-flex justify-content-center pt-3">
            <h5>
              How Do I <span style={{ color: " #0268ed" }}>Refer</span>
            </h5>
          </div>

          <div className="row">
            <img className="middleImg" src={MiddleImage} alt="photo" />
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <span>
                <i className="fa-solid fa-user-plus user1"></i>
              </span>

              <div className="middle-text1">
                <br />
                <span>Submit referrals easily via</span>
                <br />
                <span className="ms-3">our website's referral</span>
                <br />
                <span className="ms-5">section.</span>
              </div>
            </div>
            <div className="col-md-4">
              <span>
                <i class="fa-solid fa-file-pen user2"></i>
              </span>

              <div className="middle-text2">
                <br />
                <span className="ms-2">Earn rewards once you</span>
                <br />
                <span className="ms-1">referral joins an Accredian</span>
                <br />
                <span className="ms-5">program.</span>
              </div>
            </div>
            <div className="col-md-4">
              <span>
                <i className="fa-solid fa-wallet user3"></i>
              </span>

              <div className="middle-text3">
                <br />
                <span className="ms-2">Both parties receive a</span>
                <br />
                <span className="ms-2">bonus 30 days after </span>
                <br />
                <span className="ms-2">program enrollment.</span>
              </div>
            </div>
            <div>
              {" "}
              <button
                className=" middlebtn  btn-hover btn-dark"
                onClick={handleShow}
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ALL PROGRAMS
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="btn-group dropend">
                  <h6
                    type="button"
                    style={{ width: "17rem" }}
                    className="btn btn-light dropdown-toggle btn-hover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropright
                  </h6>
                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body">
                <table className="table">
                  <thead className="tablecolor">
                    <tr className="fw-bold">
                      <th scope="col">Programs</th>
                      <th scope="col" className="pe-2">
                        Referrer Bonus
                      </th>
                      <th scope="col" className="pe-2">
                        Referee Bonus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Professional Certificate Program
                        <br />
                        in Product Management
                      </td>
                      <td>₹ 7,000</td>
                      <td>₹ 9,000</td>
                    </tr>
                    <tr>
                      <td>
                        Professional Certificate Program
                        <br />
                        in Product Management
                      </td>
                      <td>₹ 9,000</td>
                      <td>₹ 9,000</td>
                    </tr>
                    <tr>
                      <td>
                        Executive Program in Data Driven
                        <br />
                        in Product Management
                      </td>
                      <td>₹ 9,000</td>
                      <td>₹ 11,000</td>
                    </tr>
                    <tr>
                      <td>
                        Executive Program in Product Management
                        <br />
                        Digital Transformation
                      </td>
                      <td>₹ 10,000</td>
                      <td>₹ 11,000</td>
                    </tr>
                    <tr>
                      <td>
                        Professional Certificate Program
                        <br />
                        in Product Management
                      </td>
                      <td>₹ 10,000</td>
                      <td>₹ 12,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div>
              {" "}
              <button
                className=" middlebtn  btn-hover btn-dark"
                onClick={handleShow}
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h4>
                Frequently Asked{" "}
                <span style={{ color: "#448ff1" }}>Questions</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-light  shadow w-25 btn-hover"
            >
              Eligibility
            </button>
            <span
              className="fw-bold ms-5"
              style={{ color: "#448ff1", fontSize: "12px" }}
            >
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </span>
            <br />
            <button
              type="button"
              className="btn btn-light mb-4 w-25 btn-hover mt-4 ms-2"
              style={{ border: "2px solid black", marginRight: "25px" }}
            >
              How To Use?
            </button>
            <span style={{ fontSize: "10px" }}>
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals.
            </span>
             
            <br />
            <button
              type="button"
              className="btn btn-light w-25 btn-hover "
              style={{
                border: "2px solid black",
                fontSize: "13px",
                transform: "translate(-120px)",
              }}
            >
              Trems & Conditions
            </button>
            <select style={{ border: "none" }}>
              <option value="apple">
                What is the minimum system configuration required?
              </option>
              <option value="banana">
                <p>Professional Certificate Programin Product Management</p>
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center ">
            <div className="BlueImage">
              <svg
                className="pb-5"
                width="900"
                height="200"
                viewBox="0 0 1360 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_298)">
                  <path
                    d="M1048.39 644.193C1222.8 644.193 1364.19 502.803 1364.19 328.389C1364.19 153.975 1222.8 12.584 1048.39 12.584C873.974 12.584 732.584 153.975 732.584 328.389C732.584 502.803 873.974 644.193 1048.39 644.193Z"
                    fill="#237CF2"
                  />
                  <path
                    d="M1050.4 587.871C1192.6 587.871 1307.87 472.597 1307.87 330.4C1307.87 188.203 1192.6 72.9287 1050.4 72.9287C908.203 72.9287 792.929 188.203 792.929 330.4C792.929 472.597 908.203 587.871 1050.4 587.871Z"
                    fill="#3289FC"
                  />
                  <path
                    d="M1048.39 515.457C1151.7 515.457 1235.46 431.704 1235.46 328.388C1235.46 225.073 1151.7 141.319 1048.39 141.319C945.074 141.319 861.32 225.073 861.32 328.388C861.32 431.704 945.074 515.457 1048.39 515.457Z"
                    fill="#4696FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_298">
                    <rect width="1360" height="210" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              
                <h5 style={{transform:"translate(-10rem,-9rem)"}}>Want to delve deeper into the program?</h5>
                <p  style={{transform:"translate(-6rem,-9rem)"}}>Share your details to receive expert insights from our program team!</p>
                
              <svg
                width="70"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{transform:"translate(-22rem,-14.5rem)"}}
              >
                <rect
                  width="80"
                  height="80"
                  rx="12"
                  fill="#E2E8F0"
                  fill-opacity="0.35"
                />
                <rect x="4" y="4" width="72" height="72" rx="12" fill="white" />
                <path
                  d="M61 30.6667C63.5774 30.6667 65.6666 32.756 65.6666 35.3334V44.6667C65.6666 47.2441 63.5774 49.3334 61 49.3334H58.5222C57.374 58.5414 49.519 65.6667 40 65.6667V61C47.7319 61 54 54.732 54 47V33C54 25.2681 47.7319 19 40 19C32.268 19 26 25.2681 26 33V49.3334H19C16.4226 49.3334 14.3333 47.2441 14.3333 44.6667V35.3334C14.3333 32.756 16.4226 30.6667 19 30.6667H21.4777C22.626 21.4587 30.4809 14.3334 40 14.3334C49.519 14.3334 57.374 21.4587 58.5222 30.6667H61ZM30.1053 48.8315L32.579 44.8737C34.7304 46.2212 37.2742 47 40 47C42.7258 47 45.2696 46.2212 47.4209 44.8737L49.8947 48.8315C47.0261 50.6281 43.6344 51.6667 40 51.6667C36.3656 51.6667 32.9739 50.6281 30.1053 48.8315Z"
                  fill="#1A73E8"
                />
              </svg>
              <button
                className=" middlebtn3  btn-hover btn-dark " style={{transform:"translate(20rem,-15rem)"}}
               
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
