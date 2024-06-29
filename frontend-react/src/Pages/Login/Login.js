import './Login.css'
import NavBar from '../../Components/NavBar/NavBar';
import { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [error, setError]= useState("")
 

  const handleEmailChange=(event)=>
    {
      setEmail(event.target.value)

    }
    const handlePwChange=(event)=>
      {
        setPassword(event.target.value)
  
      }
  const handleLogin= async(event)=>
    {
      event.preventDefault(); // prevent default form submission
      try {
        const response = await axios.post('/api/login', { email, password });
        localStorage.setItem('token', response.data.token);
        window.alert("Login is Succesful")
        // Redirect or update state to indicate logged in

        navigate('/')
      } catch (e) {
        setError(e.response?.data?.error || 'An error occured')
        // Handle error, e.g., show an error message to the user
      }
    }


    return (
    <div className='page-content-login'>
        <NavBar/>
        <div className="login__card--container">
        <div className="social__login">
          <h2 className="login__heading">Log In</h2>
          <button className="btn-login btn--facebook">Google</button>
        </div>
  
        <p className="alt__login__text">or log in with</p>
  
        <div className="manual__login">
          {error && <p style ={{color:'red', textAlign:'center'}}>{error}</p>}
          <form className="manual__login--form">
            <input className="login-input" required type="text" placeholder="Your Email" id="email" value={email} onChange={handleEmailChange}/>
            <input className="login-input" required type="password" placeholder="Password" id="password" value={password} onChange={handlePwChange}/>
            <button className="btn btn--manual btn-login" onClick={handleLogin}>Log In</button>
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
  