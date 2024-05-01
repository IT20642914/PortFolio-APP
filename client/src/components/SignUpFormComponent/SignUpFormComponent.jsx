import React from 'react'
import { Grid } from '@mui/material'
import { StyledTextField, theme } from '../../assets/theme/theme' // Import theme here
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import styles from './SignUpFormComponent.module.scss'
const SignUpFormComponent = (props) => {

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

    const email = props.LoginForm.email;
    const passWord = props.LoginForm.passWord;
    const fullName = props.LoginForm.fullName;
    const dob = props.LoginForm.dob;
    const address = props.LoginForm.address;
    const country = props.LoginForm.country;
    const jobCategory = props.LoginForm.jobCategory;
    const mobile = props.LoginForm.mobile;
  return (
    <Grid container spacing={4}>
         
    <Grid item xs={12} md={12}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Full Name"
        placeholder="Enter User Full Name"
        size="small"
        value={fullName.value}
        error={!!fullName.error}
        disabled={fullName.disable}
        required={fullName.isRequired}
        helperText={props.helperText && fullName.error}
        onFocus={() => props.handleInputFocus('fullName', 'GI')}
        onChange={(event) => props.onInputHandleChange('fullName', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="User Email"
        placeholder="Enter User Email"
        size="small"
        value={email.value}
        error={!!email.error}
        disabled={email.disable}
        required={email.isRequired}
        helperText={props.helperText && email.error}
        onFocus={() => props.handleInputFocus('email', 'GI')}
        onChange={(event) => props.onInputHandleChange('email', event.target.value)}
      />
    </Grid>
    
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Mobile Number"
        placeholder="Enter Mobile Number"
        size="small"
        value={mobile.value}
        error={!!mobile.error}
        disabled={mobile.disable}
        required={mobile.isRequired}
        helperText={props.helperText && mobile.error}
        onFocus={() => props.handleInputFocus('mobile', 'GI')}
        onChange={(event) => props.onInputHandleChange('mobile', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Address"        
        placeholder="Enter Address"
        size="small"
        value={address.value}
        error={!!address.error}
        disabled={address.disable}
        required={address.isRequired}
        helperText={props.helperText && address.error}
        onFocus={() => props.handleInputFocus('address', 'GI')}
        onChange={(event) => props.onInputHandleChange('address', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Country"
        placeholder="Enter Country"
        size="small"
        value={country.value}
        error={!!country.error}
        disabled={country.disable}
        required={country.isRequired}
        helperText={props.helperText && country.error}
        onFocus={() => props.handleInputFocus('country', 'GI')}
        onChange={(event) => props.onInputHandleChange('country', event.target.value)}
      />
    </Grid>
    
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="job Category"        
        placeholder="Enter job Category"
        size="small"
        value={jobCategory.value}
        error={!!jobCategory.error}
        disabled={jobCategory.disable}
        required={jobCategory.isRequired}
        helperText={props.helperText && jobCategory.error}
        onFocus={() => props.handleInputFocus('jobCategory', 'GI')}
        onChange={(event) => props.onInputHandleChange('jobCategory', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Password"
        placeholder="Enter Password"
        size="small"
        value={passWord.value}
        error={!!passWord.error}
        disabled={passWord.disable}
        required={passWord.isRequired}
        helperText={props.helperText && passWord.error}
        onFocus={() => props.handleInputFocus('passWord', 'GI')}
        onChange={(event) => props.onInputHandleChange('passWord', event.target.value)}
      />
    </Grid>
    
    <Grid item xs={12} md={6}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Date OF Birth"
      value={new moment(mobile.value)}
      onChange={(newValue) => props.onInputHandleChange('mobile', newValue)}
      textField={(params) => (
        <StyledTextField
          {...params}
          theme={theme}
          fullWidth
          size="small"
          error={!!dob.error}
          disabled={dob.disable}
          required={dob.isRequired}
          helperText={props.helperText && dob.error}
          onFocus={() => props.handleInputFocus('mobile', 'GI')}
        />
        
      )}
    />
  </LocalizationProvider>
</Grid>
  </Grid>
  )
}

export default SignUpFormComponent