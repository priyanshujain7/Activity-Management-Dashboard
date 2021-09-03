import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { RouteNames } from "../../routes/_base";
import "./style.scss";
const Login = () => {
  const history = useHistory();
  console.log("history", history);
  const [login, setLogin] = useState(true);
  const signUpChange = () => {
    setLogin(!login);
    if (login) {
      console.log("Login success");
    } else {
      console.log("SignUp Success");
    }
  };
  const routeToDash = () => {
    history.push(RouteNames.Dashboard);
  };
  return (
    <div className="login-form body-bg">
      {login ? (
        <div className="login-section">
          <div className="login-card header-bg">
            <h1>Log In</h1>
            <Input
              label="Email"
              id="email"
              placeholder="Enter your Email Id"
            ></Input>
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your Password"
            ></Input>
            <Button
              click={routeToDash}
              background="light"
              text="Login"
            ></Button>
            <h6>Or Sign Up using the button below</h6>
            <div onClick={signUpChange}>
              <Button background="light" text="Sign Up" />
            </div>
          </div>
        </div>
      ) : (
        <div className="login-section">
          <div className="login-card header-bg">
            <h1>Sign Up</h1>
            <Input
              label="Name"
              id="name"
              placeholder="Enter your Full Name"
            ></Input>
            <Input
              label="Email"
              id="email"
              placeholder="Enter your Email Id"
            ></Input>
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your Password"
            ></Input>
            <Button background="light" text="Sign Up"></Button>
            <h6>Or Log In using the button below</h6>
            <div onClick={signUpChange}>
              <Button background="light" text="Log In" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
