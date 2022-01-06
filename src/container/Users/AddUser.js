import Layout from "../../layout/Dashboard";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

const AddUser = () => {
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
  const roleList = [
    {
      listText: "User",
      listIcon: 0,
      default: true,
      contryCode: "US",
    },
    {
      listText: "Manager",
      listIcon: 0,
      default: false,
      contryCode: "CA",
    },
  ];

  return (
    <>
      <Layout>
        <div class="card onCard">
          <div class="card__body onCard--body">
            <div class="onCard--form">
              <h3>Add User</h3>
              <p>
                Your new user's password will be generated and emailed to them.{" "}
              </p>
              <form action="">
                <div class="input__field">
                  <label for="" class="input__field--lable ">
                    Enter Name
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
                    Email
                  </label>
                  <div class="input__field--group">
                    <input
                      type="email"
                      placeholder="Email"
                      name="name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="input__row">
                  <Dropdown
                    selectedFlag={0}
                    label="Role"
                    dropdownList={roleList}
                  />
                  <Dropdown
                    selectedFlag={0}
                    label="Choose a Number"
                    dropdownList={numberList}
                  />
                </div>
                <div className="inline--content">
                  <Button BtnLabel="Cancel" BtnLink="users" BtnClass="btn--s" />
                  <Button BtnLabel="Add" BtnLink="users" BtnClass="btn--p" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddUser;
