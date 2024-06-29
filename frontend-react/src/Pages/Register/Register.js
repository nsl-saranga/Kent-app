import NavBar from '../../Components/NavBar/NavBar';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")
 
  const handleEmail=(event)=> setEmail(event.target.value)
  const handleLname=(event)=> setLastName(event.target.value)
  const handleFname=(event)=> setFirstName(event.target.value)
  const handlePassword=(event)=> setPassword(event.target.value)
  const handleConfirmPassword=(event)=> setConfirmPassword(event.target.value)
     
  const handleRegister= async(event)=>
  {
    event.preventDefault(); // Prevent the default form submission
    if(password !== confirmPassword)
      {
        setError("Password do not match !")
        return
      }

    try{
      const response = await axios.post('/api/register', {email,lastName,firstName,password,confirmPassword})
      window.alert(response.data.message)
      setError('')
    }
    catch(e)
    {
      setError(e.response?.data?.error || 'An error occurred');
    }
  }

    return (
    <div className='page-content-login'>
        <NavBar/>
        <div className="login__card--container">
        <div className="social__login">
          <h2 className="login__heading">Register</h2>
          <button className="btn-login btn--facebook">Google</button>
        </div>
  
        <p className="alt__login__text">or register manually</p>
  
        <div className="manual__login">
          {error && <p style ={{color:'red', textAlign:'center'}}>{error}</p>}
          <form onSubmit={handleRegister} className="manual__login--form">
            <input className="login-input" value={firstName} type="text" placeholder="First Name" id="firstname" required onChange={handleFname}/>
            <input className="login-input" value={lastName} type="text" placeholder="Last Name" id="lastname"  required onChange={handleLname}/>
            <input className="login-input" value={email} type="email" placeholder="Email" id="email"  required onChange={handleEmail}/>
            <input className="login-input" value={password} type="password" placeholder="Password" id="password"  required onChange={handlePassword}/>
            <input className="login-input" value={confirmPassword} type="password" placeholder="Confirm the Password" id="password"  required onChange={handleConfirmPassword}/>
            <button className="btn btn--manual btn-login">Register</button>
          </form>
        </div>
  
        <hr className="separate__line" />
  
        <div className="create__account">
          Already have an account?<Link to = '/login'> Login</Link>
        </div>
      </div>

    </div>
    
    );
  };
  
  export default RegisterPage;
  