import { Link } from "react-router-dom";

const Plan = (props) => {
  const planList = [
    {
      text: "Unlimited team members",
      link: 0,
      icon: 0,
    },
    {
      text: "Free WhatsApp approval",
      link: 0,
      icon: 0,
    },
    {
      text: "Unlimited Live Chat conversations",
      link: 0,
      icon: 0,
    },
    {
      text: "Access to all channels",
      link: 0,
      icon: 0,
    },
    {
      text: " Monday-Friday, 9am to 5pm",
      link: "Coach support,",
      icon: 0,
    },
    {
      text: "Onboarding Welcome guide",
      link: 0,
      icon: "i",
    },
  ];
  let data = [...planList];
  const extra = [
    {
      text:
        "Free WhatsApp approval 30 day access to dedicated onboarding channel",
      link: 0,
      icon: 0,
    },
    {
      text: "Unlimited Live Chat conversations",
      link: 0,
      icon: 0,
    },
    {
      text: "2 Live calls with our Onboarding Specialist",
      link: 0,
      icon: 0,
    },
  ];
  if (props.planList === "3") {
    data = [...data, ...extra];
  }
  const listItem = data.map((item, index) => (
    <li key={index} className="plan__details--li">
      {item.link ? <Link to="#">{item.link}</Link> : ""}
      {item.text}
      {item.icon ? (
        <span className="plan__details--li-icons">
          <i className="fas fa-icons">{item.icon}</i>
        </span>
      ) : (
        ""
      )}
    </li>
  ));
  console.log(listItem)

  return (
    <>
      <div className={"plan" + props.class}>
        <div className="plan__forehead">
          <h4 className="plan__text">{props.title}</h4>
          <h2 className="plan__price">{props.price}</h2>
          <p className="plan__duration">{props.duration}</p>
        </div>
        <div className="plan__head">
          <p>
            Unlimited conversations with up to{" "}
            <Link to="/">{props.conversationCount}</Link>/month
          </p>
          <Link to="/get-number" className="btn--s">
            {props.btnText}
          </Link>
        </div>
        <div className="plan__details">
          <ul className="plan__details--ul">{listItem}</ul>
        </div>
      </div>
    </>
  );
};

export default Plan;
