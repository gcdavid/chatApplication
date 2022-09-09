import Upload from "../assets/upload.svg";
import Image from "../assets/image.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Upload} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file" style={{ paddingBottom: "0px", margin: "0px" }}>
          <img src={Image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
