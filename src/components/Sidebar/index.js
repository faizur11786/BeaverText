import { Tooltip } from "react-tippy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-tippy/dist/tippy.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="dashboard__layout--sidebar">
        {/* <!-- Section 1 --> */}

        <ul className="sidebar__menu">
          {/* <li className="sidebar__menu--items">
            <Tooltip
              title="Create Campaign"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/campaigns/create" className="sidebar__menu--link">
                <FontAwesomeIcon icon="bullhorn" />
              </Link>
            </Tooltip>
          </li> */}
          <li className="sidebar__menu--items">
            <Tooltip
              title="Dashboard"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/dashboard" className="sidebar__menu--link">
                <FontAwesomeIcon icon="th-large" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="Send Quick Message"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/message-send" className="sidebar__menu--link">
                <FontAwesomeIcon icon="paper-plane" />
              </Link>
            </Tooltip>
          </li>
        </ul>
        <span className="divider"></span>
        <ul className="sidebar__menu">
          <li className="sidebar__menu--items">
            <Tooltip
              title="Scheduled Campaigns"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/campaigns/scheduled" className="sidebar__menu--link">
                <FontAwesomeIcon icon="comment" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="Conversations"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/conversations" className="sidebar__menu--link">
                <FontAwesomeIcon icon="comments" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="Usage"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/usage" className="sidebar__menu--link">
                <FontAwesomeIcon icon="chart-area" />
              </Link>
            </Tooltip>
          </li>
        </ul>
        <span className="divider"></span>
        <ul className="sidebar__menu">
          <li className="sidebar__menu--items">
            <Tooltip
              title="Contacts"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/contacts" className="sidebar__menu--link">
                <FontAwesomeIcon icon="address-book" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="Groups"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/groups" className="sidebar__menu--link">
                <FontAwesomeIcon icon="users-cog" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="Canned Messages"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/canned-messages" className="sidebar__menu--link">
                <FontAwesomeIcon icon="book" />
              </Link>
            </Tooltip>
          </li>
          {/* <li className="sidebar__menu--items">
            <Tooltip
              title="Merge Keys"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/canned-messages" className="sidebar__menu--link">
                <FontAwesomeIcon icon="file-upload" />
              </Link>
            </Tooltip>
          </li> */}
        </ul>
        <span className="divider"></span>
        <ul className="sidebar__menu">
          <li className="sidebar__menu--items">
            <Tooltip
              title="Users"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/users" className="sidebar__menu--link">
                <FontAwesomeIcon icon="users" />
              </Link>
            </Tooltip>
          </li>
          <li className="sidebar__menu--items">
            <Tooltip
              title="My Numbers"
              position="left"
              arrow={true}
              animation="fade"
            >
              <Link to="/my-number" className="sidebar__menu--link">
                <FontAwesomeIcon icon="hashtag" />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
