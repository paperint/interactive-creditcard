import React from "react";
import desktopImage from "../images/bg-main-desktop.png";

const CreditCardForm = () => {
  return (
    <section>
      <div>
        background image left side
        <img src={desktopImage} alt="" />
      </div>

      <div>
        <div>front card</div>
        <div>back card</div>
      </div>

      <div>form credit card</div>
    </section>
  );
};

export default CreditCardForm;
