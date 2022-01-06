import Welcome from "../Welcome/Welcome";
import LoginForm from "../Login/Login";
import { useLocation } from "react-router-dom";
import Layout from "../../layout/Welcome";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Layout>
        <div className="card welcome__card">
          <div className="card__body welcome__card--body">
            <div className="welcome__card--content">
              <div className="welcome__card--content-list">
                <div className="welcome__card--content-icon">
                  <svg width="20" height="24px" viewBox="0 0 24 24">
                    <g
                      transform="translate(-329 -291) translate(250 209) translate(80 80) translate(1 4)"
                      stroke="none"
                      stroke-width="2.5"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M5.995 19.167a9.832 9.832 0 003.997.817 9.963 9.963 0 009.992-9.992A9.963 9.963 0 009.992 0 9.963 9.963 0 000 9.992c0 2.09.636 3.906 1.635 5.541"
                        stroke="#435369"
                        stroke-width="2.5"
                      ></path>
                      <path
                        stroke="#435369"
                        stroke-width="2.5"
                        d="M1.63934426 15.7377049L1.47540984 20.3278689 5.90163934 19.1803279"
                      ></path>
                      <path
                        d="M6.495 7.994l1.499-.5V5.496l-1-.5-.927 1.499c-.333 2.331.5 4.33 2.498 5.995 2.997 2.498 3.997 2.498 4.996 1.999.666-.333.809-.833.428-1.5l-1.499-.499-.999 1.5"
                        stroke="#0089FF"
                        stroke-width="2.62295082"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="welcome__card--content-details">
                  <h3 className="welcome__card--content-heading">
                    Verified WhatsApp
                  </h3>
                  <p className="welcome__card--content-text">
                    We help your business get on WhatsApp.
                  </p>
                </div>
              </div>
              <div className="welcome__card--content-list">
                <div className="welcome__card--content-icon">
                  <svg width="20" height="24px" viewBox="0 0 24 24">
                    <g
                      transform="translate(-327 -419) translate(250 209) translate(79 208) translate(0 4)"
                      stroke-width="2.5"
                      stroke="none"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        stroke="#435369"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        rx="5"
                      ></rect>
                      <path
                        d="M15 0a5 5 0 015 5v3.75a5 5 0 01-5 5l-1.423.001c-.427 1.456-1.64 2.499-3.577 2.499s-3.15-1.043-3.577-2.499L5 13.75a5 5 0 01-5-5V5a5 5 0 015-5h10z"
                        stroke="#435369"
                      ></path>
                      <path
                        stroke="#0089FF"
                        d="M13.75 5L9.52650279 8.75 7.5 6.79688191"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="welcome__card--content-details">
                  <h3 className="welcome__card--content-heading">
                    Inbox for everyone
                  </h3>
                  <p className="welcome__card--content-text">
                    24/7 support for you and your team, with local presence in 7
                    countries.
                  </p>
                </div>
              </div>
              <div className="welcome__card--content-list">
                <div className="welcome__card--content-icon">
                  <svg width="20" height="24px" viewBox="0 0 24 24">
                    <g
                      transform="translate(-329 -548) translate(250 209) translate(81 336) translate(0 5)"
                      stroke-width="2.5"
                      stroke="none"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M6.25 7.5h-5C.5 7.5 0 7 0 6.25v-5C0 .5.5 0 1.25 0h5C7 0 7.5.5 7.5 1.25v5C7.5 7 7 7.5 6.25 7.5zM6.25 20h-5C.5 20 0 19.5 0 18.75v-5c0-.75.5-1.25 1.25-1.25h5c.75 0 1.25.5 1.25 1.25v5C7.5 19.5 7 20 6.25 20zM18.75 20h-5c-.75 0-1.25-.5-1.25-1.25v-5c0-.75.5-1.25 1.25-1.25h5c.75 0 1.25.5 1.25 1.25v5c0 .75-.5 1.25-1.25 1.25z"
                        stroke="#435369"
                      ></path>
                      <path stroke="#0089FF" d="M16.25 0L16.25 7.5"></path>
                      <path stroke="#0089FF" d="M12.5 3.75L20 3.75"></path>
                    </g>
                  </svg>
                </div>
                <div className="welcome__card--content-details">
                  <h3 className="welcome__card--content-heading">
                    Channels supported
                  </h3>
                  <p className="welcome__card--content-inlineIcon">
                    <span className="supported--icon whatsapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="currentColor"
                          d="M12.976 10.092c-.208-.104-1.227-.603-1.417-.672-.19-.069-.329-.103-.467.103-.138.207-.535.672-.656.81-.121.137-.242.155-.45.051-.207-.103-.875-.32-1.667-1.024-.617-.547-1.033-1.223-1.154-1.43-.12-.206-.012-.318.091-.42.094-.093.208-.242.311-.362.104-.12.139-.207.208-.344.069-.138.034-.259-.018-.362-.051-.103-.466-1.119-.639-1.532-.168-.403-.34-.348-.466-.354a8.356 8.356 0 0 0-.398-.008.763.763 0 0 0-.553.258c-.19.207-.725.706-.725 1.722s.743 1.997.846 2.135c.104.137 1.462 2.222 3.542 3.116.495.212.881.34 1.182.434.497.157.95.135 1.306.082.399-.06 1.227-.499 1.4-.981.173-.482.173-.895.12-.981-.05-.086-.19-.138-.396-.241m-3.784 5.14H9.19a6.912 6.912 0 0 1-3.51-.956l-.252-.149-2.61.682.696-2.533-.164-.26a6.824 6.824 0 0 1-1.054-3.653c.001-3.785 3.095-6.864 6.9-6.864 1.842 0 3.574.715 4.876 2.013a6.807 6.807 0 0 1 2.019 4.856c-.002 3.785-3.096 6.865-6.898 6.865m5.87-12.707A8.264 8.264 0 0 0 9.192.104C4.618.104.895 3.809.894 8.362A8.2221 8.2221 0 0 0 2 12.492L.824 16.77l4.4-1.149a8.323 8.323 0 0 0 3.965 1.005h.003c4.574 0 8.297-3.705 8.299-8.258a8.19 8.19 0 0 0-2.429-5.843"
                        ></path>
                      </svg>
                    </span>
                    <span className="supported--icon whatsapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="currentColor"
                          d="M12.976 10.092c-.208-.104-1.227-.603-1.417-.672-.19-.069-.329-.103-.467.103-.138.207-.535.672-.656.81-.121.137-.242.155-.45.051-.207-.103-.875-.32-1.667-1.024-.617-.547-1.033-1.223-1.154-1.43-.12-.206-.012-.318.091-.42.094-.093.208-.242.311-.362.104-.12.139-.207.208-.344.069-.138.034-.259-.018-.362-.051-.103-.466-1.119-.639-1.532-.168-.403-.34-.348-.466-.354a8.356 8.356 0 0 0-.398-.008.763.763 0 0 0-.553.258c-.19.207-.725.706-.725 1.722s.743 1.997.846 2.135c.104.137 1.462 2.222 3.542 3.116.495.212.881.34 1.182.434.497.157.95.135 1.306.082.399-.06 1.227-.499 1.4-.981.173-.482.173-.895.12-.981-.05-.086-.19-.138-.396-.241m-3.784 5.14H9.19a6.912 6.912 0 0 1-3.51-.956l-.252-.149-2.61.682.696-2.533-.164-.26a6.824 6.824 0 0 1-1.054-3.653c.001-3.785 3.095-6.864 6.9-6.864 1.842 0 3.574.715 4.876 2.013a6.807 6.807 0 0 1 2.019 4.856c-.002 3.785-3.096 6.865-6.898 6.865m5.87-12.707A8.264 8.264 0 0 0 9.192.104C4.618.104.895 3.809.894 8.362A8.2221 8.2221 0 0 0 2 12.492L.824 16.77l4.4-1.149a8.323 8.323 0 0 0 3.965 1.005h.003c4.574 0 8.297-3.705 8.299-8.258a8.19 8.19 0 0 0-2.429-5.843"
                        ></path>
                      </svg>
                    </span>
                    <span className="supported--icon whatsapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="currentColor"
                          d="M12.976 10.092c-.208-.104-1.227-.603-1.417-.672-.19-.069-.329-.103-.467.103-.138.207-.535.672-.656.81-.121.137-.242.155-.45.051-.207-.103-.875-.32-1.667-1.024-.617-.547-1.033-1.223-1.154-1.43-.12-.206-.012-.318.091-.42.094-.093.208-.242.311-.362.104-.12.139-.207.208-.344.069-.138.034-.259-.018-.362-.051-.103-.466-1.119-.639-1.532-.168-.403-.34-.348-.466-.354a8.356 8.356 0 0 0-.398-.008.763.763 0 0 0-.553.258c-.19.207-.725.706-.725 1.722s.743 1.997.846 2.135c.104.137 1.462 2.222 3.542 3.116.495.212.881.34 1.182.434.497.157.95.135 1.306.082.399-.06 1.227-.499 1.4-.981.173-.482.173-.895.12-.981-.05-.086-.19-.138-.396-.241m-3.784 5.14H9.19a6.912 6.912 0 0 1-3.51-.956l-.252-.149-2.61.682.696-2.533-.164-.26a6.824 6.824 0 0 1-1.054-3.653c.001-3.785 3.095-6.864 6.9-6.864 1.842 0 3.574.715 4.876 2.013a6.807 6.807 0 0 1 2.019 4.856c-.002 3.785-3.096 6.865-6.898 6.865m5.87-12.707A8.264 8.264 0 0 0 9.192.104C4.618.104.895 3.809.894 8.362A8.2221 8.2221 0 0 0 2 12.492L.824 16.77l4.4-1.149a8.323 8.323 0 0 0 3.965 1.005h.003c4.574 0 8.297-3.705 8.299-8.258a8.19 8.19 0 0 0-2.429-5.843"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="welcome__card--form">
              {location.pathname === "/" ? <Welcome /> : <LoginForm />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
