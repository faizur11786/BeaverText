import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/DatePicker";
import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";

const Usage = () => {
  const numberList = [
    {
      listText: "8463937490",
      default: true,
      contryCode: "US",
    },
    {
      listText: "8463937494",
      contryCode: "CA",
    },
    {
      listText: "8463937493",
      contryCode: "IN",
    },
    {
      listText: "8463937400",
    },
  ];

  const COLUMNS = [
    {
      Header: "Sender Number",
      accessor: "sender_number",
      clickable: "sender_number",
    },
    {
      Header: "Sender Nickname",
      accessor: "nickname",
    },
    {
      Header: "Outbound",
      accessor: "outbound",
    },
    {
      Header: "Inbound",
      accessor: "inbound",
    },
    {
      Header: "Opt Out",
      accessor: "opt_out",
    },
  ];

  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Usage</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Usage
              </li>
            </ol>
          </nav>
        </div>
        <div className="card filter__card">
          <div className="card__body filter__card--body">
            <DatePicker />
            <Dropdown label="Sender Number" dropdownList={numberList} />
            <div className="filter__card--item"></div>
          </div>
        </div>

        <DataTableCard
          TotalContent={true}
          tableData={MOKE_DATA}
          tableCol={COLUMNS}
        >
          <p className="result--date">
            Jan 27, 2021 – Feb 27, 2021 | 25 rows | Sender: All
          </p>
          <TableBtnGroup>
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default Usage;
