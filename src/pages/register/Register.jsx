import "./register.css";

export default function Register() {
  return (
<div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasase</h3>
          <span className="loginDesc">
            hhi everyone this is my first project in react js
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input placeholder="Username" className="loginInput"/>
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Password" className="loginInput"/>
            <input placeholder="Password Again" className="loginInput"/>
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
</div>
  )
}
