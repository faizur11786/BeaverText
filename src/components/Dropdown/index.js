import React, { useState, useRef } from "react";
import DownIcon from "../../style/img/down-icon.svg";
import useOutsideClick from "../useOutsideClick";

const Dropdown = (props) => {
  let dropdownData = props.dropdownList;
  const selectedContryData = dropdownData.filter((item) => {
    if (item.default === true) return item;
  });
  // console.log(selectedContryData[0]);
  // console.log(selectedContryData[0].listIcon);
  const listItem = dropdownData.map((item, index) => (
    <li
      className="customDropdown--dropdown-li"
      onClick={() => makeMeSelectedList(item.contryCode)}
      key={index}
    >
      {item.listIcon ? (
        <img src={item.listIcon} className="customDropdown--dropdown-li-icon" alt="" />
      ) : (
        ""
      )}
      {item.listText}
    </li>
  ));

  let flag = '';
  if (props.selectedFlag) {
    flag = (
      <img
        src={selectedContryData[0].listIcon}
        className="customDropdown--dropdown-li-icon"
        alt=""
      />
    );
  }

  const [contryFlag, setContryFlag] = useState(flag);
  const [contryName, setCountryName] = useState(selectedContryData[0].listText);

  const [isActive, setActive] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (isActive) setActive(!isActive);
  });

  function makeMeSelectedList(contryCode) {
    console.log(contryCode);
    dropdownData.filter((item) => {
      if (item.contryCode === contryCode){
        if (props.selectedFlag) {
          flag = (
            <img
              src={item.listIcon}
              className="customDropdown--dropdown-li-icon"
              alt=""
            />
          );
        }
        setContryFlag(flag);
        setCountryName(item.listText);
      };
    });
  }

  return (
    <>
      <div className="customDropdown__field" >
        <label for="" className="customDropdown--lable">
          {props.label}
        </label>
        <div className="customDropdown--group">
          <img src={DownIcon} className="customDropdown__field--icon" />
          <div
          ref={ref}
            className="customDropdown customDropdown--input selected "
            onClick={() => setActive(!isActive)}
          >
            {contryFlag}
            {contryName}
          </div>
          <div
            className={
              isActive
                ? "open customDropdown--dropdown"
                : "customDropdown--dropdown"
            }
          >
            <ul className="customDropdown--dropdown-ul">{listItem}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
