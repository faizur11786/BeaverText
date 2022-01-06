import { Link } from "react-router-dom";

const Button = ({ BtnLink, BtnClass, BtnIcon, BtnLabel }) => {
  return (
    <Link to={BtnLink} class={BtnClass}>
      {BtnIcon ? (
        <span className="icon__btn--icon">
          <img src={BtnIcon} alt="logo" />
        </span>
      ) : (
        ""
      )}
      <span>{BtnLabel}</span>
    </Link>
  );
};
export default Button;
