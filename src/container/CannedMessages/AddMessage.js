import Layout from "../../layout/Dashboard";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

const AddMessage = () => {
  return (
    <>
      <Layout>
        <div class="card onCard">
          <div class="card__body onCard--body">
            <div class="onCard--form">
              <h3>Add Canned Message</h3>
              <form action="">
                <div class="input__field">
                  <label for="" class="input__field--lable ">
                    Message Nickname
                  </label>
                  <div class="input__field--group">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="input__field">
                  <label for="" class="input__field--lable ">
                    Text
                  </label>
                  <div class="input__field--group">
                    <textarea
                      name=""
                      placeholder=""
                      id=""
                      rows="6"
                      spellcheck="false"
                    ></textarea>
                  </div>
                </div>
                <div className="inline--content">
                  <Button
                    BtnLabel="Cancel"
                    BtnLink="canned-messages"
                    BtnClass="btn--s"
                  />
                  <Button
                    BtnLabel="Add"
                    BtnLink="canned-messages"
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

export default AddMessage;
