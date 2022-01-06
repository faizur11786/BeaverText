import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";

const Billing = () => {
  const COLUMNS = [
    {
      Header: "Date",
      accessor: "campaign_date_time",
    },
    {
      Header: "ID",
      accessor: "message_id",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Remarks",
      accessor: "remark",
    },
  ];
  return (
    <Layout>
      <div className="page--title">
        <h2>Billing</h2>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Billing
            </li>
          </ol>
        </nav>
      </div>

      <div className="activePlanCard">
        <div className="activePlanCard__body">
          <h4 className="activePlanCard__title">Current Plan</h4>
          <div className="activePlanCard__details">
            <div className="activePlanCard__plan">
              <span className="activePlanCard__planName">Pro - Plan</span>
              <p>
                $150 / <span>Per Month *</span>
              </p>
            </div>
            <div className="activePlanCard__action">
              <Link className="activePlanCard__actionBtn">Change Plan</Link>
            </div>
          </div>
        </div>
      </div>

      <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
        <p class="result--date">Past Invoices</p>
        <TableBtnGroup></TableBtnGroup>
      </DataTableCard>
    </Layout>
  );
};

export default Billing;
