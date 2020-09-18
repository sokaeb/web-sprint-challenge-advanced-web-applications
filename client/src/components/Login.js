import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialCredentialData = {
  username: "",
  password: "",
}

const Login = () => {
  const [ credentials, setCredentials ] = useState(initialCredentialData);
  const history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const login = evt => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch(err => {
        console.log(err)
      });
  };

  const handleChange = evt => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="loginForm">
        <form onSubmit={login}>
          <label>Username:&nbsp;
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label>Password:&nbsp;
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
