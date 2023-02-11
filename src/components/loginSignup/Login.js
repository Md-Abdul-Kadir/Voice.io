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

  const googleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div class="container-login100 bg flex-col">
        {(user || googlelog) && (
          <h3 className="my-5 text-light">
            <span className="fw-bold">Congratulation</span> !! Your login is
            done.
          </h3>
        )}
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <img className="mb-5" src={logo} alt="" width="100px" />
          <form class="login100-form validate-form">
            <span class="fw-bold pb-5 fs-1 ">Login</span>

            <div
              className=" wrap-input100 validate-input m-b-23 text-start"
              data-validate="Email is reauired"
            >
              <span class="text-start">Enter email</span>
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
              class="wrap-input100 validate-input text-start"
              data-validate="Password is required"
            >
              <span class="">Password</span>
              <div className="d-flex">
                <LockIcon className="my-auto"/>
                <input
                  onChange={handlePassChange}
                  class="input100 px-2"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                />
              </div>
            </div>

            <div class="text-right p-t-8 p-b-31">
              <a href="#home">Forgot password?</a>
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button onClick={handleLogin} className="login100-form-btn">
                  Login
                </button>
              </div>
            </div>

            <div class="text-dark my-3 text-center "></div>

            <div class="flex-c-m">
              <button
                onClick={handleGoogleLogin}
                type=""
                className="btn btn-info py-2 text-light  w-100 rounded-pill "
              >
                Google Log In
              </button>
            </div>

            <div class="d-flex mt-5 mb-1">
              <p className="text-center mx-auto">
                <span class="">Are you new to voice-io</span>

                <a href="/signup" className="px-1 ">
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
