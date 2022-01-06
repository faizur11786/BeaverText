import React, { useState } from "react";
import UserImg from "../../style/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(0);
  const MakeMeOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topMenu">
      <Link to="/message-send" className="qMs__btn active">
        <span>Quick Message</span>
        <FontAwesomeIcon icon="paper-plane" />
      </Link>
      <Link to="#" className="circle__icon--btn">
        <FontAwesomeIcon icon="question" />
      </Link>
      <div className="" onClick={() => MakeMeOpen()}>
        <div className="user__icon">
          <img src={UserImg} className="user__icon--icon" alt="" />
        </div>
      </div>
      <div className={"dropdown" + (isOpen ? " open" : "")}>
        <ul className="dropdown__ul">
          <li className="dropdown__li">
            <div className="user">
              <div className="user__avatar">
                <img src={UserImg} className="user__avatar--img" alt="" />
              </div>
              <div className="user__details">
                <h4>
                  {"Kirk Boldt"}
                  <spna class="role manager">Manager</spna>
                </h4>
                <span>userxyz@text.com</span>
              </div>
            </div>
          </li>
          <li className="dropdown__li">
            <Link to="/billing" className="dropdown__link">
              Billing
            </Link>
          </li>
          <li className="dropdown__li">
            <Link className="dropdown__link">Profile</Link>
          </li>
          <li className="dropdown__li">
            <Link className="dropdown__link">Refer friends</Link>
          </li>
          <li className="dropdown__li">
            <Link to="#" className="dropdown__link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TopMenu;
