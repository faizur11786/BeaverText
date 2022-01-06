import { useState } from "react";
import Layout from "../../layout/Dashboard";
import CannedMessageCard from "../../components/CannedMessagePopup";
// import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
// import TableButton from "../../components/TableButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Tooltip } from "react-tippy";

const AddMessage = () => {
  const [tabs, setTabs] = useState(1);

  const makeMeToggle = (e) => {
    setTabs(e);
  };
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Create Campaign - Step 2 of 2 </h2>
        </div>
        <div className="db__card add__message campaing__card">
          <div className="db__card--body">
            <div className="create__card--grid top_content">
              <div className="create__card--hulfItem">
                <p>Campaign Name</p>
                <h4>Default-CampaignName-2021-feb-15</h4>
              </div>
              <div className="create__card--2hulfItem">
                <p>Sender Number</p>
                <h4>123 456 7899</h4>
              </div>
              <div className="create__card--2hulfItem">
                <p>Recipients Added to the Campaign</p>
                <h4>99,999</h4>
              </div>
            </div>
            <div className="create__card--grid CcbodyContent">
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
                    ></textarea>
                  </div>
                  <div className="inline__btns">
                    <Link to="scheduled" className="cancel__btn">
                      Cancel
                    </Link>
                    <Link to="scheduled" className="btn--p">
                      Send Now
                    </Link>
                    <Link to="/campaigns/schedule" className="circle__icon--btn schedule__btn">
                      <FontAwesomeIcon icon="clock" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="create__card--col4">
                <div className="tabs__content">
                  <div className="tabsBtns">
                    <button
                      className={"tabsBtns__item " + (tabs === 1 && "active")}
                      onClick={() => makeMeToggle(1)}
                    >
                      <FontAwesomeIcon icon="book" /> Canned Message
                    </button>
                    <button
                      className={"tabsBtns__item " + (tabs === 2 && "active")}
                      onClick={() => makeMeToggle(2)}
                    >
                      <FontAwesomeIcon icon="file-upload" /> Upload Keys
                    </button>
                  </div>
                  <div className={"tabs__panel " + (tabs === 1 && "active")}>
                    <CannedMessageCard />
                  </div>
                  <div className={"tabs__panel " + (tabs === 2 && "active")}>
                    <div className="file__field mb-0">
                      <label for="" className="file__field--lable mandatory">
                        Browse File CSV
                      </label>
                      <div className="file__field--group">
                        <input type="file" className="file__field--input" />
                        <label>Browse File CSV </label>
                        <FontAwesomeIcon icon="cloud-upload-alt" />
                      </div>
                    </div>
                    <div className="info_text">
                      <ul>
                        <li>
                          Make sure phone number is always in the first column
                        </li>
                        <li>
                          New Contacts will not be added. Only contact already
                          added to the campaign will have the data added to the
                          messages
                        </li>
                      </ul>
                    </div>
                    <div class="Uploadprogress">
                      <div class="Uploadprogress__bar" style={{}}>
                        <p class="Uploadprogress__percent">35%</p>
                      </div>
                    </div>
                    <p className="Uploadprogress__message">
                      500 contacts imported
                    </p>
                    <div className="key_list">
                      <label htmlFor="">Keys Available</label>
                      <ul>
                        <li>
                          <span>*2*</span> - coupon code
                        </li>
                        <li>
                          <span>*3*</span> - number percent
                        </li>
                      </ul>
                    </div>
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

export default AddMessage;
