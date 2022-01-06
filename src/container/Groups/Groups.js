import Layout from "../../layout/Dashboard";
import DataTable from "../../components/Table";
import MOKE_DATA from "../../MOCK_DATA.json";
import TableButton from "../../components/TableButton";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";
import { Link } from "react-router-dom";

const Groups = () => {
  const COLUMNS = [
    {
      Header: "Group Name",
      accessor: "group",
    },
    {
      Header: "Members count",
      accessor: "members_count",
    },
    {
      Header: "Last Message Date",
      accessor: "message_date",
    },
    {
      Header: "Text",
      accessor: "conversations",
    },
    {
      Header: "Actions",
      add: ["Add Group Members", "/add-members"],
      delete: "Will not delete the contacts",
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Groups</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Groups
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p class="result--date">3 groups</p>
          <TableBtnGroup>
            <TableButton BtnLabel="Add New Group" BtnLink="add-groups" />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default Groups;
