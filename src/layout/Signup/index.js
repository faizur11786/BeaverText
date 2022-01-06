import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Signup = ({ children }) => {
  return (
    <>
      <Header />
      <section className="onboarding__layout--section">{children}</section>
      <Footer />
    </>
  );
};
export default Signup;
