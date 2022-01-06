import Button from "../../components/Button";
import GoogleIcon from "../../style/img/google-icon.svg";
import FacebookIcon from "../../style/img/facebook-icon.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome to TextApp</h1>
      <Button BtnLabel="Log in with email" BtnLink="/login" BtnClass="btn--block" />

      <div className="or--divider">
        <span className="or--divider-text">OR</span>
      </div>

      <Button
        BtnLabel="Log in with Google"
        BtnLink="#"
        BtnClass="icon__btn"
        BtnIcon={GoogleIcon}
      />

      <Button
        BtnLabel="Log in with Facebook"
        BtnLink="#"
        BtnClass="icon__btn"
        BtnIcon={FacebookIcon}
      />

      <p className="help--text">
        No account yet? <Link to="#">Sign up for free</Link>
      </p>
    </>
  );
};

export default Welcome;
