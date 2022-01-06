import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";

const AutoForward = () => {
  return (
    <Layout>
      <div class="card onCard">
        <div class="card__body onCard--body">
          <div class="onCard--form">
            <h3>Auto Forwarding URL</h3>
            <form action="">
              <div class="input__field">
                <label for="" class="input__field--lable ">
                  Auto Forwarding URL
                </label>
                <div class="input__field--group">
                  <input
                    type="url"
                    placeholder="Insert URL (www.example.com)"
                    name="number"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="inline--content">
                <Button
                  BtnLabel="Cancel"
                  BtnLink="my-number"
                  BtnClass="btn--s"
                />
                <Button
                  BtnLabel="Update"
                  BtnLink="my-number"
                  BtnClass={"btn--p "}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AutoForward;
