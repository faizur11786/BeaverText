import Button from "../../components/Button";
import { Link } from "react-router-dom";



const LoginForm = () => {
  return (
    <form action="">
      <div className="input__field">
        <label for="" className="input__field--lable">
          Email address
        </label>
        <div className="input__field--group">
          <input type="email" placeholder="Your email address" name="email" />
        </div>
      </div>
      <div className="input__field">
        <label for="" className="input__field--lable">
          Password
        </label>
        <div className="input__field--group">
          <input type="password" placeholder="Your password" name="password" />
          <span className="input__field--validation-icon">
            <i className="fas fa-eye"></i>
          </span>
          <div className="input__field--validation">
            <small className="input__field--validation-msg error">
              Lorem ipsum dolor sit.
            </small>
          </div>
        </div>
      </div>
      <div className="inline--content">
        <div className="check__field">
          <input
            className="check__field--input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="check__field--label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <Link to="/forgot" className="">
          I forgot my password
        </Link>
      </div>
      <div className="inline--content">
        <Button BtnLabel="Back" BtnLink="/" BtnClass="btn--s" />
        <Button BtnLabel="Log in" BtnLink="/pricing" BtnClass="btn--p" />
      </div>
    </form>
  );
};

export default LoginForm;
