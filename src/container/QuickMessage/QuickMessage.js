import Layout from "../../layout/Dashboard";
import CannedMessageCard from "../../components/CannedMessagePopup";
import { Link } from "react-router-dom";
import { useState } from "react";

const QuickMessage = () => {
  const [selectedMessage, setSelectedMessage] = useState("");
  const t = () => {
    setSelectedMessage("GHello");
  };


  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Send Quick Message</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Send Quick Message
              </li>
            </ol>
          </nav>
        </div>
        <div className="db__card campaing__card quickMessage">
          <div className="db__card--header">
            <div className="db__card--header-left">
              <div className="inline__content">
                <div className="input__field">
                  <label for="" className="input__field--lable">
                    Contact
                  </label>
                  <div className="input__field--group">
                    <input
                      type="text"
                      placeholder="Search Contact"
                      name=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input__field">
                  <label for="" className="input__field--lable">
                    Sender Number
                  </label>
                  <div className="input__field--group">
                    <input
                      type="text"
                      placeholder="Search Sender Number"
                      name="text"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="db__card--header-right"></div>
          </div>
          <div className="db__card--body">
            <div className="create__card--grid">
              <div className="create__card--fullItem">
                <div className="input__field">
                  <label for="" className="input__field--lable">
                    Message
                  </label>
                  <div className="input__field--group">
                    <textarea
                      name=""
                      placeholder=""
                      id="canned-message"
                      rows="6"
                      value={selectedMessage}
                    ></textarea>
                  </div>
                  <div className="inline__btns">
                    <Link to="campaigns/scheduled" className="cancel__btn">
                      Cancel{" "}
                    </Link>
                    <Link to="#" className="btn--p">
                      Send Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="create__card--col4">
                <div className="tabs__content">
                  <div className={"tabs__panel active"}>
                    <CannedMessageCard
                      // setSelectedMessage={setSelectedMessage}
                      title="Canned Messages"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QuickMessage;
