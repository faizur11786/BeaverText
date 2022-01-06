import Layout from "../../layout/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const UploadCSV = () => {
  return (
    <>
      <Layout>
        <div className="card onCard contactImportCard">
          <div className="card__body onCard--body">
            <div className="onCard--form">
              <div className="inline__content">
                <h3>Contacts Import - Upload CSV - Step 1</h3>
              </div>
              <form action="">
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
                  </ul>
                </div>
                <div className="check__field">
                  <input
                    className="check__field--input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="check__field--label" for="flexCheckDefault">
                    I Confirm that the user has opted-in
                  </label>
                </div>
                <div className="inline--content">
                  <Button
                    BtnLabel="Cancel"
                    BtnLink="contacts"
                    BtnClass="btn--s"
                  />
                  <Button
                    BtnLabel="Import"
                    BtnLink="map-merge-keys"
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
export default UploadCSV;
