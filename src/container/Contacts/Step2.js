import Button from "../../components/Button";

const Step2 = () => {
  return (
    <>
      <div className="keyLabel">
        <label htmlFor="">Merge Keys</label>
        <label htmlFor="">Field Headers</label>
      </div>

      <div className="key">
        <div className="key__item">
          <div className="key__label">P_FNAME</div>
          <input type="text" placeholder="first name" value="first name" />
        </div>
        <div className="key__item">
          <div className="key__label">P_LNAME</div>
          <input type="text" placeholder="last name" value="last name" />
        </div>
        <div className="key__item">
          <div className="key__label">P_EMAIL</div>
          <input
            type="text"
            placeholder="email address"
            value="email address"
          />
        </div>
      </div>
      <div className="inline--content">
        <Button BtnLabel="Cancel" BtnLink="contacts" BtnClass="btn--s" />
        <Button BtnLabel="Import" BtnLink="contacts" BtnClass="btn--p" />
      </div>
    </>
  );
};

export default Step2;
