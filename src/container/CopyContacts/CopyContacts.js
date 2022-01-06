import Layout from "../../layout/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CopyContacts = () => {
  return (
    <>
      <Layout>
        <div class="card onCard">
          <div class="card__body onCard--body">
            <div class="onCard--form">
              <div class="inline__content">
                <h3>Copy Contacts</h3>
                <Link to="upload-csv" class="btn--p">
                  Upload CSV
                </Link>
              </div>
              <form action="">
                <div class="input__field">
                  <label for="" class="input__field--lable">
                    Enter Phone Number
                  </label>
                  <div class="input__field--group">
                    <textarea
                      name=""
                      placeholder=""
                      id=""
                      rows="4"
                      spellcheck="false"
                    >
                      One number per line* One number per line*
                    </textarea>
                  </div>
                </div>
                <div class="input__row">
                  <div class="input__field">
                    <label for="" class="input__field--lable">
                      Tags
                    </label>
                    <div class="input__field--group">
                      <input type="text" placeholder="Tags" name="tags" />
                    </div>
                  </div>
                  <div class="input__field">
                    <label for="" class="input__field--lable">
                      Group
                    </label>
                    <div class="input__field--group">
                      <input type="text" placeholder="Group" name="group" />
                    </div>
                  </div>
                </div>
                <div class="check__field">
                  <input
                    class="check__field--input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="check__field--label" for="flexCheckDefault">
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
                    BtnLink="contacts"
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
export default CopyContacts;
