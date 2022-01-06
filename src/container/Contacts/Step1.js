import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";

const Step1 = () => {
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
          <li>Make sure phone number is always in the first column</li>
        </ul>
      </div>
      <div className="check__field">
        <input
          className="check__field--input"
          type="checkbox"
          defaultChecked={false}
          onClick={ClickHandler}
          id="flexCheckDefault"
        />
        <label className="check__field--label" for="flexCheckDefault">
          I Confirm that the user has opted-in
        </label>
      </div>
      <div className="inline--content">
        <Button BtnLabel="Cancel" BtnLink="contacts" BtnClass="btn--s" />
        <Button
          BtnLabel="Import"
          BtnLink="map-merge-keys"
          BtnClass={"btn--p " + (CheckCount === 1 ? "" : "disabled")}
        />
      </div>
    </>
  );
};

export default Step1;
