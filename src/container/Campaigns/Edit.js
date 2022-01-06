import React from "react";
import Layout from "../../layout/Dashboard";
import Button from "../../components/Button";
import { useLocation } from "react-router";

const Edit = () => {
  const location = useLocation();
  return (
    <Layout>
      <div class="card onCard">
        <div class="card__body onCard--body">
          <div class="onCard--form">
            <h3>
              {location.pathname === "/campaigns/schedule"
                ? "Schedule Campaign"
                : "Edit Schedule"}
            </h3>
            <form action="">
              <div class="input__field">
                <label for="" class="input__field--lable ">
                  Schedule Date
                </label>
                <div class="input__field--group">
                  <input type="date" name="change-date" autocomplete="off" />
                </div>
              </div>
              <div class="input__field">
                <label for="" class="input__field--lable ">
                  Schedule Time
                </label>
                <div class="input__field--group">
                  <input
                    type="time"
                    placeholder="Clone-of-Campaign-Name-X"
                    name="name"
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
                  BtnLabel={location.pathname === "/campaigns/edit" ? "Edit": "Create"}
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

export default Edit;
