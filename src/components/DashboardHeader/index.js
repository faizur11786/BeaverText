import Logo from "../Logo";
import TopMenu from "../Menu";

const DashboardHeader = () => {
  return (
    <>
      <div className="dashboard__layout--header">
        <Logo />
        <TopMenu />
      </div>
    </>
  );
};

export default DashboardHeader;
