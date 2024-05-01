import React,{useState} from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styles from './SignUp.module.scss'
import { logo } from "../../assets/Images";
import SignUpFormComponent from '../../components/SignUpFormComponent/SignUpFormComponent'
import { validateFormData } from '../../helper/index'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
const SignUp = () => {

    const INITIAL_LOGIN_FORM={
        email:  { value: "", isRequired: true, disable: false, readonly: false, validator: "email", error: "", },
        fullName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        passWord:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        address:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        country:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        jobCategory:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        dob:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        mobile:  { value: "", isRequired: true, disable: false, readonly: false, validator: "number", error: "",charLength: [10], },
      }
    const [LoginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
    const navigate = useNavigate();
    const [helperText, setHelperText] = useState(true);

      
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
      const HandleSignUp=async ()=>{
        const [validateData, isValid] = await validateFormData(LoginForm);
        setLoginForm(validateData);
        if(isValid){
          console.log("Login Success")
        }
      }
      
      const onInputHandleChange = (property, value) => {
          setHelperText(true);
          if (property === "email") {
            setLoginForm({
                ...LoginForm,
                email: {
                  ...LoginForm.email,
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

  return (
    <section
    className={`${styles.container} `}
  >
      <section className={`${styles.login}`}>
      <aside className={styles.logincard}>
        <aside className={styles.loginActions}>
          <aside className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo" />
            <h1 style={{color:"white"}}>WELCOME TO PORTFOLIO MANAGEMENT  SYSTEM</h1>
          </aside>

<SignUpFormComponent
 helperText={helperText}
 LoginForm={LoginForm}
 onInputHandleChange={onInputHandleChange}
 handleInputFocus={handleInputFocus}
/>
      <Button
            className={`${styles.primaryBtn} `}
            variant="contained"
            disabled={false}
            onClick={() => HandleSignUp()}
          >
           Register Your Account
          </Button>
          <Button
            className={`${styles.secondary} `}
            variant="contained"
            disabled={false}
            onClick={() => navigate("/")}
          >
              have an account? Sign IN Now
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

export default SignUp