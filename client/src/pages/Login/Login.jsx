import React, {  useState } from "react";
import styles from "./Login.module.scss"
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from '@mui/material'
import { logo } from "../../assets/Images";
import LoginFomComponent from "../../components/LoginFomComponent/LoginFomComponent";
import { validateFormData } from "../../helper/index";

const Login = () => {

    const INITIAL_LOGIN_FORM={
        userName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        passWord:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
      }
    const [LoginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
    const navigate = useNavigate();
    const [helperText, setHelperText] = useState(true);
  


const handleLogin = async () => {
  const [validateData, isValid] = await validateFormData(LoginForm);
  setLoginForm(validateData);
  if(isValid){
    console.log("Login Success")
  }
}

const onInputHandleChange = (property, value) => {
    setHelperText(true);
    if (property === "userName") {
      setLoginForm({
          ...LoginForm,
          userName: {
            ...LoginForm.userName,
            value: value,
          },
        });
      }
      if (property === "passWord") {
        setLoginForm({
            ...LoginForm,
            passWord: {
              ...LoginForm.passWord,
              value: value,
            },
          });
        }

}

const handleInputFocus=(property,section)=>{
  if (section === "GI")
  setLoginForm({
    ...LoginForm,
    [property]: {
      ...LoginForm[property],
      error: null,
    },
  });
  
}
const HandleSignUp=()=>{
    navigate("/signup")
}
  return (
    <section
      className={`${styles.container} `}
    >
        <section className={`${styles.login}`}>
        <aside className={styles.logincard}>
          <aside className={styles.loginActions}>
            <aside className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
              <h1 style={{color:"white"}}>WELCOME TO PORTFOLIO MANAGEMENT  System</h1>
            </aside>

<LoginFomComponent
   helperText={helperText}
   LoginForm={LoginForm}
   onInputHandleChange={onInputHandleChange}
   handleInputFocus={handleInputFocus}
/>
        <Button
              className={`${styles.primaryBtn} `}
              variant="contained"
              disabled={false}
              onClick={() => handleLogin()}
            >
             Login  Into Your Account
            </Button>
            <Button
              className={`${styles.secondary} `}
              variant="contained"
              disabled={false}
              onClick={() => HandleSignUp()}
            >
            Don't have an account? Sign Up Now
            </Button>
            <div className={styles.loginFooter}>
              <p>
              Optimize your investments with our Portfolio Management System. Track, analyze, and manage your diverse assets effortlessly for informed decision-making.
              </p>
            </div>
          </aside>
        </aside>
      </section>
    </section>
  )
}

export default Login