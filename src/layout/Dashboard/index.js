import DashboardHeader from "../../components/DashboardHeader";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <div className="dashboard__layout--main">
        <Sidebar />
        <section className="dashboard__layout--section">
          <div className="dashboard__layout--body">
            <div className="dashboard__layout--container">{children}</div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
