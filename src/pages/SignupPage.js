import React from 'react'
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

import './LoginPage.css'
function SignupPage() {
    return (
        <div className="signupPage">
             <h2 className="Heading">Sign in</h2>
            <form>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={12}>
              <p  className="forget2"><Link to="/login">Already Have an account?</Link></p><br></br>
        <Button className="loginBtn" variant="contained" color="secondary">Create Account</Button>
        </Grid>
        <Grid item xs={12} md={12}>
        <Button className="loginBtn" variant="contained" color="primary">Sign in with facebook</Button>
        <Button className="loginBtn" variant="contained" >Sign in with Google</Button>
        </Grid>
        
         </Grid>

            
          
</form>
        </div>
    )
}

export default SignupPage
