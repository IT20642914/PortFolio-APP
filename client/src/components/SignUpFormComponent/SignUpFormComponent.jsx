import React from 'react'
import { Grid } from '@mui/material'
import { StyledTextField, theme } from '../../assets/theme/theme' // Import theme here

const SignUpFormComponent = (props) => {
    const userName = props.LoginForm.userName;
    const passWord = props.LoginForm.passWord;
  return (
    <Grid container spacing={4}>
    <Grid item xs={12} md={12}>
      <StyledTextField
        theme={theme} // Pass the theme object here
        fullWidth
        label="User Name"
        placeholder="Enter User Name"
        size="small"
        value={userName.value}
        error={!!userName.error}
        disabled={userName.disable}
        required={userName.isRequired}
        helperText={props.helperText && userName.error}
        onFocus={() => props.handleInputFocus('userName', 'GI')}
        onChange={(event) => props.onInputHandleChange('userName', event.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={12}>
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