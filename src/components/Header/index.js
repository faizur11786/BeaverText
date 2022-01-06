import Logo from "../Logo";
const Header = ({ start, end }) => {
  const ProBar = {
    "--x": start,
    "--i": end,
  };
  return (
    <>
      <header class="onboarding__layout--header">
        <Logo />
        <div class="progress">
          <div
            class="progress__bar"
            style={{ "--x": "0%", "--i": "40%" }}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
