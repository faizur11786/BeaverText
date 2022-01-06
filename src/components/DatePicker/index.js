import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import "bootstrap-daterangepicker/daterangepicker.css";

const DatePicker = () => {
  const [state, setState] = useState({
    start: moment().subtract(29, "days"),
    end: moment(),
  });
  const { start, end } = state;
  const handleCallback = (start, end) => {
    setState({ start, end });
  };
  const label =
    start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY");
  return (
    <>
      <div class="filter__card--item dateRange__field ">
        <label for="" class="dateRange__field--lable">
          Duration
        </label>
        <DateRangePicker
          class="dateRange__field--input"
          initialSettings={{
            startDate: start.toDate(),
            endDate: end.toDate(),
            ranges: {
              Today: [moment().toDate(), moment().toDate()],
              Yesterday: [
                moment().subtract(1, "days").toDate(),
                moment().subtract(1, "days").toDate(),
              ],
              "Last 7 Days": [
                moment().subtract(6, "days").toDate(),
                moment().toDate(),
              ],
              "Last 30 Days": [
                moment().subtract(29, "days").toDate(),
                moment().toDate(),
              ],
              "This Month": [
                moment().startOf("month").toDate(),
                moment().endOf("month").toDate(),
              ],
              "Last Month": [
                moment().subtract(1, "month").startOf("month").toDate(),
                moment().subtract(1, "month").endOf("month").toDate(),
              ],
            },
          }}
          onCallback={handleCallback}
        >
          <div id="reportrange" className="dateRange__field--input">
            <FontAwesomeIcon icon="calendar" />
            <span>{label}</span>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </DateRangePicker>
      </div>
    </>
  );
};

export default DatePicker;
