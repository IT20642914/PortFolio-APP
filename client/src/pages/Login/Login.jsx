import React, {  useState } from "react";
import styles from "./Login.module.scss"
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from '@mui/material'
import { logo } from "../../assets/Images";
import LoginFomComponent from "../../components/LoginFomComponent/LoginFomComponent";
const Login = () => {

    const INITIAL_LOGIN_FORM={
        userName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        passWord:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
      }
    const [LoginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
    const navigate = useNavigate();
    const [helperText, setHelperText] = useState(true);
  


const handleLogin = async () => {

}

const onInputHandleChange = (property, value) => {
    setHelperText(true);

}

const handleInputFocus=(property,section)=>{

}
  return (
    <section
      className={`${styles.container} `}
    >
        <section className={`${styles.login}`}>
        <aside className={styles.logincard}>
          <aside className={styles.loginActions}>
            <aside>
            <img className={styles.logo} src={logo} alt="logo" />
              <h1>Welcome to TEA FACTORY MANAGEMENT  System</h1>
            </aside>

<LoginFomComponent
   helperText={helperText}
   LoginForm={LoginForm}
   onInputHandleChange={onInputHandleChange}
   handleInputFocus={handleInputFocus}
/>
<Button
              className={`${styles.primaryBtn} `}
              startIcon={
              <CircularProgress size={18} />
              }
              variant="contained"
              disabled={
            false
              }
              onClick={() => handleLogin()}
            >
              Login with TEA FACTORY MANAGEMENT SYSTEM
            </Button>
            <div className={styles.loginFooter}>
              <p>
              Designed to streamline your operations,
               our Tea Factory Management System ensures efficient management of your production processes. .
              </p>
            </div>
          </aside>
        </aside>
      </section>
    </section>
  )
}

export default Login