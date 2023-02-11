import React, { useEffect, useState } from "react";
import "./css/util.css";
import "./css/main.css";
import logo from "../../img/ll.png";
import { auth, provider } from "./Config.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

export default function SignUp() {
  const [googlelog, setGooglelog] = useState("");
  const [user, setUser] = useState("");

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handleEmailchange = (e) => {
    setemail(e.target.value);
    // console.log(email);
  };
  const handlePassChange = (e) => {
    setpass(e.target.value);
    // console.log(pass);
  };

  const handleSignUp = (e) => {
    console.log(email);
    console.log(pass);

    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        setUser(user.user);
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  };
  const handleGoogleLogin = (e) => {
    signInWithPopup(auth, provider).then((data) => {
      setGooglelog(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    e.preventDefault();
  };

  //   useEffect(() => {
  //     setGooglelog(localStorage.getItem("email"));
  //   });

  return (
    <div>
      <div class="container-login100 bg">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <img className="mb-5" src={logo} alt="" width="100px" />
          <form class="login100-form validate-form">
            <span class="fw-bold pb-5 fs-1 ">Sign Up</span>

            <div
              className=" wrap-input100 validate-input m-b-23 text-start"
              data-validate="Username is reauired"
            >
              <span class="text-start">Username</span>
              <div className="d-flex">
                <PersonIcon className="my-auto" />
                <input
                  class="input100 px-2"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div
              className=" wrap-input100 validate-input m-b-23 text-start"
              data-validate="email is reauired"
            >
              <span class="text-start">Enter email</span>
			  <div className="d-flex">
                <MarkEmailReadIcon className="my-auto" />
              <input
                onChange={handleEmailchange}
                class="input100 px-2"
                type="email"
                name="username"
                placeholder="Enter your email"
              />
              </div>
            </div>

            <div
              class="wrap-input100 validate-input text-start"
              data-validate="Password is required"
            >
              <span class="">Password</span>
			  <div className="d-flex">
                <LockIcon className="my-auto" />
              <input
                onChange={handlePassChange}
                class="input100 px-2"
                type="password"
                name="pass"
                placeholder="Enter your password"
              />
             </div>
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn mt-4">
                <div class="login100-form-bgbtn "></div>
                <button onClick={handleSignUp} className="login100-form-btn">
                  Sign Up
                </button>
              </div>
            </div>

            <div class="flex-c-m">
              <button
                onClick={handleGoogleLogin}
                type=""
                className="btn btn-info w-100 py-2 rounded-pill mt-3 text-light "
              >
                Google Sign In
              </button>
            </div>

            <div class="d-flex p-t-155">
              <p className="mx-auto">
                Already Sign Up?
                <a href="/login" className="px-2 py-2 w- rounded-pill">
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
