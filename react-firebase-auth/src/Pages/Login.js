import {React,useState,useEffect} from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import {useHistory,link} from "react-router-dom"
import "./Login.css"

const Login = () => {

    const [state,setState] = useState({
        email:"",
        password:""
    })
    const {email,password} = state;

    const handleGoogleSignIn =()=>{}
    const handleSumbit =()=>{}
    const handlefbSignIn =()=>{}
    const handleChange=()=>{}
  return (
    <div>
        <div id='logreg-forms'>
            <form className='form-signin' onSubmit={handleSumbit}>
                <h1 className='h3 mb 3 font-weight-normal' style={{textAlign:"center"}}>
                    sign in
                </h1>
                <div className='social-login'>
                    <button className='btn google-btn social-btn' 
                    type='button' 
                    onClick={handleGoogleSignIn}>
                        <span>
                            <i className='fab- fa google-plus-g'></i> sign in with google
                        </span>
                    </button>

                    <button className='btn facebook-btn social-btn' 
                    type='button' 
                    onClick={handlefbSignIn}>
                        <span>
                            <i className='fab- fa facebook-plus-g'></i> sign in with facebook
                        </span>
                    </button>
                </div>
                <p style={{textAlign:"center"}}>or</p>
                <input 
                  type="email"
                  id='inputEmail'
                  className='form-control'
                  placeholder='Email address'
                  name='email'
                  onChange={handleChange}
                  value={email}
                  required
                  />
                  <input 
                  type="password"
                  id='inputPassword'
                  className='form-control'
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                  value={password}
                  required
                  />
                  <button className='btn btn-secondary btn-block' type='submit'>
                  <i className='fas fa-sign-in-alt'></i>sign in</button>
                  <hr/>
                  <p>Don't have an account</p>
                  <link to='/register'>
                  <button className='btn btn-primary btn-block' type='button' id='btn-signup'>
                    <i className='fas fa-user-plus'></i>sign up new account
                  </button>
                  </link>
            </form>
        </div>
    </div>
  )
}

export default Login
