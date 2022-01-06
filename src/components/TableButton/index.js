import { Link } from "react-router-dom";

const TableButton = ({ BtnLabel, BtnLink }) => {
  return (
    <Link className="btn--p" to={"/" + BtnLink}>
      {BtnLabel}
    </Link>
  );
};

export default TableButton;
