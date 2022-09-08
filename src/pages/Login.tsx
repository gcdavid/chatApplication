import Upload from "../assets/react.svg";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-Me</span>
        <span className="title">Login</span>
        <form className="form">
          <label>Enter your Email</label>
          <input type="email" />
          <label>Enter your Password</label>
          <input type="password" />
          <button className="loginBtn">Sign up</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
