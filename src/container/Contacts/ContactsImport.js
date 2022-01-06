import Layout from "../../layout/Dashboard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useLocation } from "react-router-dom";

const ContactsImport = () => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <div className="card onCard contactImportCard">
          <div className="card__body onCard--body">
            <div className="onCard--form">
              <div className="inline__content">
                <h3>
                  Contacts Import -{" "}
                  {location.pathname === "/contacts-import"
                    ? "Upload CSV - Step 1"
                    : "Map Merge Keys - Step 2"}
                </h3>
              </div>
              <form action="">
                {location.pathname === "/contacts-import" && <Step1 />}
                {location.pathname === "/map-merge-keys" && <Step2 />}
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactsImport;
