import React from 'react'
import { Grid } from '@mui/material'
import { StyledTextField, theme } from '../../assets/theme/theme' // Import theme here

const LoginFomComponent = (props) => {
  const email = props.LoginForm.email;
  const passWord = props.LoginForm.passWord;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12}>
        <StyledTextField
          theme={theme} // Pass the theme object here
          fullWidth
          label="User name"
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

export default LoginFomComponent
