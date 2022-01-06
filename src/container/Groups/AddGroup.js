import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";

const AddGroup = () => {
  return (
    <>
      <Layout>
        <div class="card onCard">
          <div class="card__body onCard--body">
            <div class="onCard--form">
              <h3>Add New Group</h3>
              <form action="">
                <div class="input__field">
                  <label for="" class="input__field--lable mandatory">
                    Enter Group Name
                  </label>
                  <div class="input__field--group">
                    <input
                      type="text"
                      placeholder="Enter Group Name"
                      name="group-name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="inline--content">
                  <Button
                    BtnLabel="Cancel"
                    BtnLink="groups"
                    BtnClass="btn--s"
                  />
                  <Button
                    BtnLabel="Add"
                    BtnLink="add-members"
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

export default AddGroup;
