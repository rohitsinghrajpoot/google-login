import {React,useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useHistory,link} from "react-router-dom"
import { registerInitiate } from '../Redux/action'
import "./Register.css"

const Register = () => {

    const [state,setState] = useState({
        displayName:"",
        email:"",
        password:"",
        passwordConfirm:""
    })
    const {email,password,displayName,passwordConfirm} = state;
    const {currentUser} = useSelector((state)=>state.user)
    const history =useHistory()

    useEffect(()=>{
      if(currentUser){
        history.push("/")
      }
    },[currentUser,history])

    const dispatch =useDispatch()
    const handleSumbit =(e)=>{
        e.preventDefault()
        if(password!==passwordConfirm){
            return
        }
        dispatch(registerInitiate(email.password,displayName))
        setState({email:"",displayName:"",password:"",passwordConfirm:""})
    }
    
    const handleChange=(e)=>{
        let {name,value}= e.target;
        setState({...state, [name] :value})
    }
  return (
    <div>
        <div id='register-form'>
            <form className='form-signin' onSubmit={handleSumbit}>
                <h1 className='h3 mb 3 font-weight-normal' style={{textAlign:"center"}}>
                    sign up
                </h1>
                <input 
                  type="text"
                  id='displayName'
                  className='form-control'
                  placeholder='Full Name'
                  name='displayName'
                  onChange={handleChange}
                  value={displayName}
                  required
                  />
                
                <input 
                  type="email"
                  id='user-email'
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
                   <input 
                  type="password"
                  id='psswordConfirm'
                  className='form-control'
                  placeholder='Repeat password'
                  name='passwordConfirm'
                  onChange={passwordConfirm}
                  value={password}
                  required
                  />
                  <button className='btn btn-primary btn-block' type='submit'>
                    <i className='fas fa-user-plus'></i>sign up</button>
                  <link to="/login">
                          <i className='fas fa-anle-left'></i> Back
                  </link>
            </form>
            <br></br>
        </div>
    </div>
  )
}

export default Register
