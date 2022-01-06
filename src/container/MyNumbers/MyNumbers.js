import DataTable from "../../components/Table";
import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import TableButton from "../../components/TableButton";
import { Link } from "react-router-dom";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";

const MyNumbers = () => {
  const COLUMNS = [
    {
      Header: "Number",
      accessor: "sender_number",
      Autoforward: "auto_forward",
    },
    {
      Header: "Nickname",
      accessor: "nickname",
    },
    {
      Header: "Status",
      accessor: "status",
      statusTag: "status",
    },
    {
      Header: "Actions",
      pauseCircle: "Deactivate Number",
      delete: "Release Number",
      cog: "Autoforward all incoming messages",
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>My Numbers</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Numbers
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p class="result--date">5 numbers</p>
          <TableBtnGroup>
            <TableButton BtnLabel="Buy Number" BtnLink="buy-number" />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default MyNumbers;
