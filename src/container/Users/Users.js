import Layout from "../../layout/Dashboard";
// import DataTable from "../../components/Table";
import MOKE_DATA from "../../MOCK_DATA.json";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";
import TableButton from "../../components/TableButton";
import { Link } from "react-router-dom";

const Users = () => {
  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
      roleTag: "role",
    },
    {
      Header: "Owned numbers",
      accessor: "recipient",
    },
    {
      Header: "Is Admin",
      accessor: "is_admin",
      customSwitch: true,
    },
    {
      Header: "Actions",
      pauseCircle: "Deactivate User",
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Users</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Users
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p className="result--date">5 Users</p>
          <TableBtnGroup>
            <TableButton BtnLabel="Add User" BtnLink="add-user" />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default Users;
