import Plan from "../../components/Pricing";
import Layout from "../../layout/Signup";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <Layout>
        <div className="card plan__card">
          <div className="card__body">
            <h1 className="plan__card__title">Select your plan</h1>
            <p className="plan__card__dis">
              All plans include: Inbox, WhatsApp, Live-chat, Automation,
              Chatbots & APIs
            </p>
            <div className="plan__container">
              <Plan
                title="STARTUP"
                price="Free"
                conversationCount="50 Active Contacts"
                btnText="Get Started"
                planList="1"
              />
              <Plan
                title="PRO"
                price="$50"
                duration="Per Month *"
                conversationCount="500 Active Contacts"
                btnText="Get Started"
                planList="2"
              />
              <Plan
                title="PRO PLUS"
                price="$150"
                duration="Per Month *"
                class=" active"
                conversationCount="500 Active Contacts"
                btnText="Get Started"
                planList="3"
              />
              <Plan
                title="CUSTOM PLAN"
                price="Custom"
                conversationCount="500 Active Contacts"
                btnText="Talk to sales"
                planList="4"
              />
            </div>
          </div>
          <div className="card__footer">
            <p>* Team plans require a 12 month commitment</p>
            <h3>Need to know more?</h3>
            <Link to="#">Contact sales</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pricing;
