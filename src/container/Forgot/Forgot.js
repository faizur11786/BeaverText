import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <>
      <Header />
      <section className="onboarding__layout--section">
        <div className="card forgot__card">
          <div className="card__body forgot__card--body">
            <div className="forgot__card--form">
              <div className="brand_name">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <path
                      fill="#0089FF"
                      d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"
                    />
                  </svg>
                </Link>
              </div>
              <h1>Recover your password</h1>
              <p>
                Fill in your e-mail address below and we will send you an email
                with further instructions
              </p>
              <form action="">
                <div className="input__field">
                  <label for="" className="input__field--lable">
                    Email address
                  </label>
                  <div className="input__field--group">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
                <Link to="#" className="btn--block disabled">
                  Recover your password
                </Link>
                <p className="help--text">
                  Already have an Account? <Link to="/login">Log in here.</Link>
                </p>
                <p className="help--text">
                  No account yet? <Link to="/">Sign up for free</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Forgot;
