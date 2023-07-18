import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const serverUrl = "http://localhost:8080/"

const WelcomePage = () => {

  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const navigate = useNavigate();

  const loginUserAction = (e:any) => {

    e.preventDefault();

    console.log(JSON.stringify({
          
      password: password,
      email: email,             
  }));
    fetch(serverUrl + "signin",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
          
        password,
        email,             
      })
    }).then(res=>res.json())
    .then(data => {

      if(data.error) {

        console.log("Error logging in", data.error);
      }

      navigate('/dash');      

    }).catch(err => {

      console.log(err)
    })

  }

  const registerUserAction = async (e:any) =>{

    e.preventDefault();

    console.log(JSON.stringify({
          
      password,
      email             
    }));

    await fetch(serverUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          
          console.log("Error registering", data.error);
          
        } else {

          navigate("/");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <ul className="nav nav-tabs" id="account-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="singin-tab"
            data-bs-toggle="tab"
            data-bs-target="#sing-in"
            type="button"
            role="tab"
            aria-controls="sign-in"
            aria-selected="true"
          >
            Sign In
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="register-tab"
            data-bs-toggle="tab"
            data-bs-target="#register"
            type="button"
            role="tab"
            aria-controls="register"
            aria-selected="false"
          >
            Register
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="sing-in"
          role="tabpanel"
          aria-labelledby="signin-tab"
        >
          <form className="form-signin text-center" onSubmit={loginUserAction}>
            <img src="./logo.png" alt="" width="72" height="72" />
            <h3> Sign in </h3>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success" onSubmit={loginUserAction}>
              Submit
            </button>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <form className="form-register text-center" onSubmit={registerUserAction}>
            <img src="./logo.png" alt="" width="72" height="72" />
            <h3> Register </h3>
            <div className="form-group mb-2">
              <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                className="form-control mb-2"
                id="registerPassword"
                placeholder="Password"
              />
              <label htmlFor="registerRepeatPassword">Repeat password</label>
              <input
                type="password"
                className="form-control"
                id="registerRepeatPassword"
                placeholder="Repeat password"
              />
            </div>
            <button type="submit" className="btn btn-outline-success" onSubmit={registerUserAction}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
