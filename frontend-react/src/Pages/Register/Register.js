import NavBar from '../../Components/NavBar/NavBar';
import {Link} from 'react-router-dom'

const RegisterPage = () => {
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
          <form action="#" className="manual__login--form">
            <input className="login-input" type="text" placeholder="Username" id="username" />
            <input className="login-input" type="password" placeholder="Password" id="password" />
            <input className="login-input" type="password" placeholder="Password" id="password" />
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
  