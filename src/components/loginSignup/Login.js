import React, { useEffect, useState } from "react";
import "./css/util.css";
import "./css/main.css";
import logo from "../../img/ll.png";
import { auth, provider } from "./Config.js";
import LockIcon from "@mui/icons-material/Lock";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
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

  const handleLogin = (e) => {
    //console.log(email);
    //console.log(pass);

    signInWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("user", data.user);
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

  const googleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className="container-login100 bg flex-col">
        {(user || googlelog) && (
          <h3 className="my-3 text-light">
            <span className="fw-bold">Congratulation</span> !! Your login is
            done.
            <p className="mt-2"><a href="/home" className="px-2 py-2 w- rounded-pill">
                <button className="btn btn-info px-3 py-1 text-light">Home</button>
                </a> </p>
          </h3>
        )}
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <img className="mb-5" src={logo} alt="" width="100px" />
          <form className="login100-form validate-form">
            <span className="fw-bold pb-5 fs-1 ">Login</span>

            <div
              className=" wrap-input100 validate-input m-b-23 text-start"
              data-validate="Email is reauired"
            >
              <span className="text-start">Enter email</span>
              <div className="d-flex">
                <MarkEmailReadIcon className="my-auto" />
                <input
                  onChange={handleEmailchange}
                  className="input100 px-2"
                  type="email"
                  name="username"
                  placeholder="Type your email"
                />
              </div>
            </div>

            <div
              className="wrap-input100 validate-input text-start"
              data-validate="Password is required"
            >
              <span className="">Password</span>
              <div className="d-flex">
                <LockIcon className="my-auto"/>
                <input
                  onChange={handlePassChange}
                  className="input100 px-2"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                />
              </div>
            </div>

            <div className="container-login100-form-btn mt-3">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button onClick={handleLogin} className="login100-form-btn">
                  Login
                </button>
              </div>
            </div>

            <div className="text-dark my-3 text-center "></div>

            <div className="flex-c-m">
              <button
                onClick={handleGoogleLogin}
                type=""
                className="btn btn-info py-2 text-light  w-100 rounded-pill "
              >
                Google Log In
              </button>
            </div>

            <div className="d-flex mt-5 mb-1">
              <p className="text-center mx-auto">
                <span class="">Are you new to voice-io</span>

                <a href="/signup" className="px-1 text-decoration-none">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
          {user && (
            <button
              onClick={googleLogout}
              className="btn btn-info text-light  px-5  py-2 rounded-pill"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
