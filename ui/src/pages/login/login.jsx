import React, { useEffect, useState } from "react";
import { api_config, state_config, url_config } from "../../utils/config";
import { FormFields } from "../../components/FormFields";
import { ChangeFormType } from "../../components/ChangeFormType";
import "./login.css";
export const Login = () => {
  /* 
    There would be a kind-of like switch between  
    This needs ot be dynamic, if it is login form, there would be two fields, username and password
    If it is register, there would be four fields, username, email, password and confirm password
    On each submit, there sepearate functionality functions would be called
  */

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // get user details
  // async function getUserDetails() {
  //   const res = await fetch(api_config.login, {});
  //   console.log("res");
  //   true &&
  //     setUser({
  //       id: res?.data?._id ?? "123",
  //       name: res?.data?.name ?? "John",
  //       email: res?.data?.name ?? "johndoe@domain.com",
  //     });
  //   true && setLoggedIn(true);
  // }
  // useEffect(() => {
  //   return getUserDetails();
  // }, []);

  // change form fields on click of button
  const [formType, setFormType] = useState("login");
  const changeFormType = (type) => {
    setFormType(type);
  };
  const submitForm = () => {
    console.log("submitting form");
    window.location.replace(`${url_config.todo}`);
  };
  return (
    <>
      <div className="container">
        <div className="title">{state_config[formType]?.title}</div>
        <FormFields fields={state_config[formType]?.fields} />
        <ChangeFormType
          type={formType}
          setFormType={setFormType}
          submitForm={submitForm}
        />
      </div>
    </>
  );
};
