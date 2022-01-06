
import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import TableButton from "../../components/TableButton";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";
import { Link } from "react-router-dom";

const Contacts = () => {
  const COLUMNS = [
    {
      Header: "Phone Number",
      accessor: "sender_number",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Last Message Date",
      accessor: "message_date",
    },
    {
      Header: "Group",
      accessor: "group",
    },
    {
      Header: "Tags",
      accessor: "tags",
    },
    {
      Header: "Actions",
      seeConversation: "See Conversation",
      quickMessage: "Send Quick Message",
      block: "Opt-Out/Block",
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Contacts</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p class="result--date">2,345 contacts</p>
          <TableBtnGroup>
            <TableButton
              BtnLabel="Quick Add Contact"
              BtnLink="add-new-contacts"
            />
            <TableButton
              BtnLabel="Bulk Import Contacts"
              BtnLink="contacts-import"
            />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default Contacts;
