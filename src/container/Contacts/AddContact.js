import { useState } from "react";
import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";

const AddContact = () => {
  const [CheckCount, setCheckCount] = useState(0);

  const ClickHandler = (e) => {
    if (e.target.checked) {
      setCheckCount(CheckCount + 1);
    } else {
      setCheckCount(CheckCount - 1);
    }
  };
  return (
    <Layout>
      <div class="card onCard">
        <div class="card__body onCard--body">
          <div class="onCard--form">
            <h3>Add New Contact</h3>
            <form action="">
              <div class="input__field">
                <label for="" class="input__field--lable mandatory">
                  Enter Phone Number
                </label>
                <div class="input__field--group">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    name="number"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="input__row">
                <div class="input__field">
                  <label for="" class="input__field--lable">
                    First Name
                  </label>
                  <div class="input__field--group">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="input__field">
                  <label for="" class="input__field--lable">
                    Last Name
                  </label>
                  <div class="input__field--group">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
              <div class="input__field">
                <label for="" class="input__field--lable ">
                  Enter Email
                </label>
                <div class="input__field--group">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="name"
                    autocomplete="off"
                  />
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
                  defaultChecked={false}
                  onClick={ClickHandler}
                  id="flexCheckDefault"
                />
                <label class="check__field--label" for="flexCheckDefault">
                  I confirm that the user has opted-in.
                </label>
              </div>
              <div className="inline--content">
                <Button
                  BtnLabel="Cancel"
                  BtnLink="contacts"
                  BtnClass="btn--s"
                />
                <Button
                  BtnLabel="Add"
                  BtnLink="contacts"
                  BtnClass={"btn--p " + (CheckCount === 1 ? "" : "disabled")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddContact;
