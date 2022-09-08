import Upload from "../assets/react.svg";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-Me</span>
        <span className="title">Register</span>
        <form className="form">
          <label>Enter your name</label>
          <input type="text" />
          <label>Enter your Email</label>
          <input type="email" />
          <label>Enter your Password</label>
          <input type="password" />
          <label htmlFor="file" className="uploadContainer">
            <img src={Upload} style={{ width: "32px", height: "10px" }} />
            Upload your profile picture
          </label>
          <input
            type="file"
            id="file"
            style={{ padding: "0px", margin: "0.5rem 0rem", display: "none" }}
          />
          <button className="registerBtn">Sign up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
