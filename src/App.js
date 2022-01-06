import "./style/scss/main.scss";
import "./components/FontAwesomeIcon";
import Home from "./container/Home/Home";
import Pricing from "./container/Pricing/Pricing";
import Forgot from "./container/Forgot/Forgot";
import GetNumber from "./container/GetNumber/GetNumber";
import ImportContacts from "./container/ImportContacts/ImportContacts";
import Dashboard from "./container/Dashboard/Dashboard";
import Usage from "./container/Usage/Usage";
import Conversations from "./container/Conversations/Conversations";
import Messages from "./container/Messages/Messages";
import MyNumbers from "./container/MyNumbers/MyNumbers";
import AutoForward from "./container/MyNumbers/AutoForward";
import Contacts from "./container/Contacts/Contacts";
import Groups from "./container/Groups/Groups";
import ScheduledCampaigns from "./container/Campaigns/Scheduled";
import CreateCampaigns from "./container/Campaigns/Create";
import AddMessageCampaigns from "./container/Campaigns/addMessage";
import QuickMessage from "./container/QuickMessage/QuickMessage";
import Users from "./container/Users/Users";
import CannedMessages from "./container/CannedMessages/CannedMessages";
import BuyNumber from "./container/BuyNumber/BuyNumber";
import AddContact from "./container/Contacts/AddContact";
import UploadCSV from "./container/UploadCSV/UploadCSV";
import CopyContacts from "./container/CopyContacts/CopyContacts";
import AddGroup from "./container/Groups/AddGroup";
import AddUser from "./container/Users/AddUser";
import AddMessage from "./container/CannedMessages/AddMessage";
import AddGroupMembers from "./container/Groups/AddGroupMembers";
import ContactsImport from "./container/Contacts/ContactsImport";
import Clone from "./container/Campaigns/Clone";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./container/Campaigns/Edit";
import Billing from "./container/Billing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/get-number">
            <GetNumber />
          </Route>
          <Route path="/import-contacts">
            <ImportContacts />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/usage">
            <Usage />
          </Route>
          <Route path="/conversations">
            <Conversations />
          </Route>
          <Route path="/conversations-flow">
            <Messages />
          </Route>

          <Route path="/my-number">
            <MyNumbers />
          </Route>
          <Route path="/auto-forwar">
            <AutoForward />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/contacts-import">
            <ContactsImport />
          </Route>
          <Route path="/map-merge-keys">
            <ContactsImport />
          </Route>

          <Route path="/groups">
            <Groups />
          </Route>

          <Route path="/campaigns/scheduled">
            <ScheduledCampaigns />
          </Route>
          <Route path="/campaigns/create">
            <CreateCampaigns />
          </Route>
          <Route path="/campaigns/add-message">
            <AddMessageCampaigns />
          </Route>
          <Route path="/campaigns/clone">
            <Clone />
          </Route>
          <Route path="/campaigns/edit">
            <Edit />
          </Route>
          <Route path="/campaigns/schedule">
            <Edit />
          </Route>

          <Route path="/message-send">
            <QuickMessage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/canned-messages">
            <CannedMessages />
          </Route>
          <Route path="/buy-number">
            <BuyNumber />
          </Route>
          <Route path="/add-new-contacts">
            <AddContact />
          </Route>
          <Route path="/upload-csv">
            <UploadCSV />
          </Route>
          <Route path="/copy-contacts">
            <CopyContacts />
          </Route>
          <Route path="/add-groups">
            <AddGroup />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/add-message">
            <AddMessage />
          </Route>
          <Route path="/add-members">
            <AddGroupMembers />
          </Route>


          <Route path="/billing">
            <Billing />
          </Route>



        </Switch>
      </Router>
    </>
  );
}

export default App;
