import { useState } from "react";
import Layout from "../../layout/Dashboard";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import TableButton from "../../components/TableButton";

const Create = () => {
  const numberList = [
    {
      listText: "8463937490",
      default: true,
      contryCode: "US",
    },
    {
      listText: "8463937494",
      contryCode: "CA",
    },
    {
      listText: "8463937493",
      contryCode: "IN",
    },
    {
      listText: "8463937400",
      contryCode: "CA",
    },
  ];

  const [CheckCount, setCheckCount] = useState(0);

  const ClickHandler = (e) => {
    if (e.target.checked) {
      setCheckCount(CheckCount + 1);
    } else {
      setCheckCount(CheckCount - 1);
    }
  };


  
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Create Campaign - Step 1 of 2</h2>
        </div>

        <div className="db__card campaing__card">
          <div className="db__card--header">
            <div className="db__card--header-left">
              <div className="inline__content">
                <div className="input__field">
                  <label className="input__field--lable">Campaign Name</label>
                  <div className="input__field--group">
                    <input
                      type="text"
                      placeholder="Campaign Name"
                      value="Default-CampaignName-2021-feb-15"
                      name=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <Dropdown label="Sender Number" dropdownList={numberList} />
              </div>
            </div>
            <div className="db__card--header-right">
              <div className="inline__content">
                {/* <TableButton
                  BtnLabel="Send Quick Message"
                  BtnLink="message-send"
                /> */}
                <TableButton
                  BtnLabel="Scheduled Campaigns List"
                  BtnLink="campaigns/scheduled"
                />
              </div>
            </div>
          </div>
          <div className=" db__card--body">
            <div className="create__card--grid">
              <div className="create__card--fullItem">
                <div className="input__field">
                  <label className="input__field--lable">Add Contacts</label>
                  <div className="input__field--group">
                    <textarea name="" placeholder="" id="" rows="6">
                      One number per line* One number per line*
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="create__card--fullItem">
                <div className="check__field">
                  <input
                    className="check__field--input"
                    type="checkbox"
                    defaultChecked={false}
                    onClick={ClickHandler}
                    id="confirm_check"
                  />
                  <label
                    className="check__field--label"
                    htmlFor="confirm_check"
                    id="confirm_check--lebal"
                  >
                    I confirm that the user has opted-in.
                  </label>
                </div>
                <div className="check__field">
                  <input
                    className="check__field--input"
                    type="checkbox"
                    defaultChecked={false}
                    onClick={ClickHandler}
                    id="understand_check"
                  />
                  <label
                    className="check__field--label"
                    htmlFor="understand_check"
                    id="understand_check--lebal"
                  >
                    I understand that each contact will receive a “Text STOP to
                    opt out” message the first time they receive a text. This
                    opt out notice is 21 characters long and may result in
                    additional messages.
                  </label>
                </div>
                <div className="inline__btns">
                  <Link to="scheduled" className="cancel__btn">
                    Cancel
                  </Link>
                  <Link
                    to="/campaigns/add-message"
                    className={"btn--p " + (CheckCount === 2 ? "" : "disabled")}
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Create;
