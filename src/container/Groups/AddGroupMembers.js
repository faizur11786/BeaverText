import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";
import Widget from "../../components/AddGroupMembers";

const AddGroupMembers = () => {
  return (
    <>
      <Layout>
        <div className="card onCard addGroupMemberCard">
          <div className="card__body onCard--body">
            <h1>
              Add Group Members - Group Name
            </h1>
            <Widget />

            <div className="inline--content">
              <Button BtnLabel="Cancel" BtnLink="/add-groups" BtnClass="btn--s" />
              <Button
                BtnLabel="Save"
                BtnLink="/groups"
                BtnClass="btn--p"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddGroupMembers;
