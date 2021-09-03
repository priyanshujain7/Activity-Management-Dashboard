import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { RouteNames } from "../../routes/_base";
import "./style.scss";
const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
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
    console.log(name, email, pass);
  };

  const submitVal = (e, inputType) => {
    switch (inputType) {
      case "email":
        setEmail(e.target.value);
        break;

      case "name":
        setName(e.target.value);
        break;

      case "password":
        setPass(e.target.value);
        break;
    }
  };

  return (
    <div className="login-form body-bg">
      {login ? (
        <form>
          <div className="login-section">
            <div className="login-card header-bg">
              <h1>Log In</h1>
              <Input
                label="Email"
                id="email"
                placeholder="Enter your Email Id"
                change={submitVal}
              ></Input>
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Enter your Password"
                change={submitVal}
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
        </form>
      ) : (
        <div className="login-section">
          <div className="login-card header-bg">
            <h1>Sign Up</h1>
            <Input
              label="Name"
              id="name"
              placeholder="Enter your Full Name"
              change={submitVal}
            ></Input>
            <Input
              label="Email"
              id="email"
              placeholder="Enter your Email Id"
              change={submitVal}
            ></Input>
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your Password"
              change={submitVal}
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
