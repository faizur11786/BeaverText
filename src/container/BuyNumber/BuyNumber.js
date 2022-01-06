import Layout from "../../layout/Dashboard";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import UsIcon from "../../style/img/us-icon.svg";
import CaIcon from "../../style/img/ca-icon.svg";
import InIcon from "../../style/img/in-icon.svg";

const BuyNumber = () => {
  const contryList = [
    {
      listText: "United States (+1)",
      listIcon: UsIcon,
      contryCode: "US",
      default: true,
    },
    {
      listText: "Canada (+1)",
      listIcon: CaIcon,
      contryCode: "CA",
      default: false,
    },
    {
      listText: "India (+91)",
      listIcon: InIcon,
      default: false,
      contryCode: "IN",
    },
  ];

  const numberList = [
    {
      listText: "8463937492",
      listIcon: 0,
      default: true,
      contryCode: "US",
    },
    {
      listText: "8463937494",
      listIcon: 0,
      default: false,
      contryCode: "CA",
    },
    {
      listText: "8463937493",
      listIcon: 0,
      default: false,
      contryCode: "IN",
    },
    {
      listText: "8463937400",
      listIcon: 0,
      default: false,
    },
  ];
  return (
    <>
      <Layout>
        <div className="card onCard">
          <div className="card__body onCard--body">
            <div className="onCard--form">
              <h1>Get a Number</h1>
              <form action="">
                <Dropdown
                  selectedFlag={1}
                  label="Select Country"
                  dropdownList={contryList}
                />
                <div className="input__row">
                  <div className="input__field">
                    <label for="" className="input__field--lable">
                      Area Code
                    </label>
                    <div className="input__field--group">
                      <input type="text" placeholder="Enter 3 digits" name="" />
                    </div>
                  </div>
                  <Dropdown
                    selectedFlag={0}
                    label="Choose a Number"
                    dropdownList={numberList}
                  />
                </div>
                <div className="inline--content">
                  <Button
                    BtnLabel="Back"
                    BtnLink="/my-number"
                    BtnClass="btn--s"
                  />
                  <Button
                    BtnLabel="Select"
                    BtnLink="/import-contacts"
                    BtnClass="btn--p"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BuyNumber;
