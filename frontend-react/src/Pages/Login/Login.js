import './Login.css'
import NavBar from '../../Components/NavBar/NavBar';
import { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'


const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail]= useState("")
  const [passwrod, setPassword]= useState("")
 

  const handleEmailChange=(event)=>
    {
      setEmail(event.target.value)

    }
    const handlePwChange=(event)=>
      {
        setPassword(event.target.value)
  
      }


    return (
    <div className='page-content-login'>
        <NavBar/>
        <div className="login__card--container">
        <div className="social__login">
          <h2 className="login__heading">Log In</h2>
          <button className="btn-login btn--facebook">Facebook</button>
        </div>
  
        <p className="alt__login__text">or log in with</p>
  
        <div className="manual__login">
          <form action="#" className="manual__login--form">
            <input className="login-input" type="text" placeholder="Your Email" id="email" onChange={handleEmailChange}/>
            <input className="login-input" type="password" placeholder="Password" id="password" onChange={handlePwChange}/>
            <button className="btn btn--manual btn-login" >Log In</button>
          </form>
        </div>
  
        <hr className="separate__line" />
  
        <div className="create__account">
          Don't have an account? Create <Link to='/register'>here.</Link>
        </div>
      </div>

    </div>
    
    );
  };
  
  export default LoginPage;
  