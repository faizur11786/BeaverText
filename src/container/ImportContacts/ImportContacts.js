import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../layout/Signup";

const ImportContacts = () => {
  return (
    <>
      <Layout>
        <div className="card onCard">
          <div className="card__body onCard--body">
            <div className="onCard--form">
              <h1>Import Contacts</h1>
              <form action="">
                <div className="file__field">
                  <label for="" className="file__field--lable mandatory">
                    Browse File CSV
                  </label>
                  <div className="file__field--group">
                    <input type="file" className="file__field--input" />
                    <label for="">Browse File CSV </label>
                    <FontAwesomeIcon icon="cloud-upload-alt" />
                  </div>
                </div>
                <div className="input__row">
                  <div className="input__field">
                    <label for="" className="input__field--lable">
                      Tags
                    </label>
                    <div className="input__field--group">
                      <input type="text" placeholder="Tags" name="tags" />
                    </div>
                  </div>
                  <div className="input__field">
                    <label for="" className="input__field--lable">
                      Group
                    </label>
                    <div className="input__field--group">
                      <input type="text" placeholder="Group" name="group" />
                    </div>
                  </div>
                </div>

                <div className="inline--content">
                  <Button
                    BtnLabel="Skip"
                    BtnLink="/get-number"
                    BtnClass="btn--s"
                  />
                  <Button
                    BtnLabel="Select"
                    BtnLink="/dashboard"
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

export default ImportContacts;
