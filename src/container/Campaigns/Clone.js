import React, { useState } from "react";
import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";

const Clone = () => {
  const [name, setName] = useState("");
  return (
    <Layout>
      <div class="card onCard">
        <div class="card__body onCard--body">
          <div class="onCard--form">
            <h3>Clone Campaign</h3>
            <form action="">
              <div class="input__field">
                <label for="" class="input__field--lable ">
                  Campaign Name
                </label>
                <div class="input__field--group">
                  <input
                    type="text"
                    placeholder="Clone-of-Campaign-Name-X"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="inline__btns">
                <Button
                  BtnLabel="Cancel"
                  BtnLink="scheduled"
                  BtnClass="btn--s"
                />
                <Button
                  BtnLabel="Create"
                  BtnLink="scheduled"
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

export default Clone;
