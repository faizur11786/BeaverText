import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CannedMessageCard = ({ title }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");

  const makeMeOpen = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const cannedData = [
    {
      name: "Welcome Messages",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      facere exercitationem dignissimos hic minus omnis itaque quisquam
      alias amet nobis nulla sequi ullam maiores asperiores, dolor
      repellendus sunt, provident praesentium.`,
    },
    {
      name: "Welcome Messages",
      message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
      ut?`,
    },
    {
      name: "Welcome Messages",
      message: `Lorem ipsum dolor sit`,
    },
    {
      name: "Welcome Messages",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      facere exercitationem dignissimos hic minus omnis itaque quisquam
      alias amet nobis nulla sequi ullam maiores asperiores, dolor
      repellendus sunt, provident praesentium.`,
    },
  ];

  const cannedMessages = cannedData
    .filter((value) => {
      if (searchMessage == "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(searchMessage.toLowerCase())
      ) {
        return value;
      } else if (
        value.message.toLowerCase().includes(searchMessage.toLowerCase())
      ) {
        return value;
      }
    })
    .map((item, index) => (
      <div className="cannedMsg__list" key={index}>
        <h4>{item.name}</h4>
        <p>{item.message}</p>
      </div>
    ));

  return (
    <>
      <div className={"cannedMsg" + (isPopupOpen === false ? "" : " open")}>
        <div className="cannedMsg__header">
          {/* <h3>Canned Messages</h3> */}
          {title && (
            <label for="" class="input__field--lable">
              Canned Messages
            </label>
          )}

          <div className="input__field--group">
            <input
              type="search"
              placeholder="Search"
              autoComplete="off"
              onChange={(e) => {
                setSearchMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="cannedMsg__body">{cannedMessages}</div>
      </div>
    </>
  );
};

export default CannedMessageCard;
