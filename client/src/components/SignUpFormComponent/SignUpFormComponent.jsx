import React from 'react'
import { Grid } from '@mui/material'
import { StyledTextField, theme } from '../../assets/theme/theme' // Import theme here

const SignUpFormComponent = (props) => {
    const email = props.LoginForm.email;
    const passWord = props.LoginForm.passWord;
    const mobile = props.LoginForm.passWord;
    const fullName = props.LoginForm.passWord;
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
        value={mobile.value}
        error={!!mobile.error}
        disabled={mobile.disable}
        required={mobile.isRequired}
        helperText={props.helperText && mobile.error}
        onFocus={() => props.handleInputFocus('mobile', 'GI')}
        onChange={(event) => props.onInputHandleChange('mobile', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="Country"
        placeholder="Enter Country"
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
    
    <Grid item xs={12} md={6}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="job Category"        
        placeholder="Enter job Category"
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
  </Grid>
  )
}

export default SignUpFormComponent