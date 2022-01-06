import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";
import TableButton from "../../components/TableButton";

const CannedMessages = () => {
  const COLUMNS = [
    {
      Header: "Message ID",
      accessor: "message_id",
    },
    {
      Header: "Message Nickname",
      accessor: "message_nickname",
    },
    {
      Header: "Message Text",
      accessor: "conversations",
    },
    {
      Header: "Actions",
      delete: "Remove Message",
      pen: ["Edit Message", "/add-message"],
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Canned Messages</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Canned Messages
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p className="result--date">5 Messages</p>
          <TableBtnGroup>
            <TableButton BtnLabel="Add Message" BtnLink="add-message" />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default CannedMessages;
