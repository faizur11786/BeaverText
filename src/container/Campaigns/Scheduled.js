import { Link } from "react-router-dom";
import Layout from "../../layout/Dashboard";
import MOKE_DATA from "../../MOCK_DATA.json";
import DataTableCard from "../../components/Table";
import TableBtnGroup from "../../components/TableBtnGroup";
import TableButton from "../../components/TableButton";

const Scheduled = () => {
  const COLUMNS = [
    {
      Header: "Campaign Name",
      accessor: "campaign_name",
    },
    {
      Header: "Scheduled Time",
      accessor: "campaign_date_time",
    },
    {
      Header: "Sender Number",
      accessor: "sender_number",
    },
    {
      Header: "Count of recipients",
      accessor: "recipients_count",
    },
    {
      Header: "Actions",
      clone: ["Clone Campaign", "/campaigns/clone"],
      delete: "Remove Campaign",
      pen: ["Edit Schedule", "/campaigns/edit"],
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Scheduled Campaigns</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Scheduled Campaigns
              </li>
            </ol>
          </nav>
        </div>

        <DataTableCard tableData={MOKE_DATA} tableCol={COLUMNS}>
          <p class="result--date">5 campaigns</p>
          <TableBtnGroup>
            <TableButton
              BtnLabel="Create Campaign"
              BtnLink="campaigns/create"
            />
          </TableBtnGroup>
        </DataTableCard>
      </Layout>
    </>
  );
};

export default Scheduled;
