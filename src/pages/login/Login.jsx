import "./login.css";

export default function login() {
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
            <input placeholder="email" className="loginInput"/>
            <input placeholder="password" className="loginInput"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
</div>
  )
}
