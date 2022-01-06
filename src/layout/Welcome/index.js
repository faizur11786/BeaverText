import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const Welcome = ({ children }) => {
  return (
    <>
      <div className="onboarding__layout--header">
        <Logo />
      </div>
      <section className="onboarding__layout--section">{children}</section>
      <Footer />
    </>
  );
};

export default Welcome;
