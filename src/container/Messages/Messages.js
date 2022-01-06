import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../layout/Dashboard";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Conversations</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Conversations
              </li>
            </ol>
          </nav>
        </div>

        <div className=" db__card">
          <div className=" db__card--header">
            <div className="db__card--header-left">
              <p className="result--date">
                Sender Number - 519 719 4085 | Recipient Numbe - 748 939 0373
              </p>
            </div>
            <div className="db__card--header-right">
              <form action="">
                <div className="input__field">
                  <div className="input__field--group">
                    <input type="search" placeholder="Search" name="search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" db__card--body">
            <div className="conFlow__chat">
              <ul className="conFlow__chat--msg">
                <li>
                  <div className="conFlow__chat--content">
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="conFlow__chat--timing">10:10 PM</div>
                </li>
                <li>
                  <div className="conFlow__chat--content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet consequatur ratione repellendus, unde suscipit illo
                    molestiae saepe veniam cum quod.
                  </div>
                  <div className="conFlow__chat--timing">11:10 PM</div>
                </li>
                <li className="sender">
                  <div className="conFlow__chat--content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam, expedita.
                  </div>
                  <div className="conFlow__chat--timing">01:05 AM</div>
                </li>
                <li>
                  <div className="conFlow__chat--content">
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="conFlow__chat--timing">10:10 PM</div>
                </li>
                <li>
                  <div className="conFlow__chat--content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet consequatur ratione repellendus, unde suscipit illo
                    molestiae saepe veniam cum quod.
                  </div>
                  <div className="conFlow__chat--timing">11:10 PM</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="db__card--footer">
            <div className="conFlow__chat--footer">
              <form action="" className="conFlow__chat--form">
                <div className="input__field">
                  <div className="input__field--group">
                    <textarea
                      type="text"
                      placeholder=""
                      name=""
                      style={{ height: "80px" }}
                    ></textarea>
                  </div>
                </div>
                <ul className="conFlow__chat--btnsGroup">
                  <li className="conFlow__chat--btnsItme">
                    <button>
                      <FontAwesomeIcon icon="book" />
                    </button>
                  </li>
                  <li className="conFlow__chat--btnsItme">
                    <button>
                      <FontAwesomeIcon icon="paper-plane" />
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Messages;
