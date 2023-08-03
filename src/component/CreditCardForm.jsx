import React from "react";
import "../App.css";
import cardLogo from "../images/card-logo.svg";
import success from "../images/icon-complete.svg";
import { useState } from "react";
import { format } from "date-fns";

const CreditCardForm = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <section>
      <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3">
        <div className="bgLeft flex items-center relative">
          <div className="relative max-lg:mt-10 lg:absolute lg:left-28 w-full flex flex-col justify-center items-center">
            <div className="frontCard z-10 max-lg:-translate-x-9 max-lg:absolute max-lg:top-32 max-h-64 max-[390px]:gap-2 max-[390px]:justify-start h-64 p-6 pb-12 flex flex-col items-start justify-between">
              <img src={cardLogo} alt="" />
              <h2 className="text-white font-medium text-lg min-[400px]:text-2xl tracking-widest">
                {!cardNumber ? "0000 0000 0000 0000" : cardNumber}
              </h2>
              <div className=" flex justify-between w-full max-[400px]:text-sm text-base text-white font-medium tracking-widest ">
                <p className="uppercase">{!name ? "Jane appleseed" : name}</p>
                <p>{!date ? "00/00" : format(new Date(date), "MM yy")}</p>
              </div>
            </div>
            <div className="relative backCard h-64 translate-x-9 lg:translate-x-16">
              <h2 className="absolute text-white text-lg font-medium tracking-widest max-[400px]:top-16 top-24 right-10">
                {!cvc ? "000" : cvc}
              </h2>
            </div>
          </div>
        </div>

        <div className="max-lg:mt-20 lg:col-span-2 self-center">
          {!confirmed && (
            <form
              className=" w-80 mx-auto flex flex-col gap-2"
              onSubmit={() => setConfirmed(true)}
            >
              <label htmlFor="">
                <h4 className="text-xl font-medium leading-10 tracking-wider">
                  Cardholder Name
                </h4>
                <input
                  className="w-full border-2 border-slate-400 rounded-md p-2 pl-5 uppercase"
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="">
                <h4 className="text-xl font-medium leading-10 tracking-wider">
                  CardNumber
                </h4>
                <input
                  className="w-full border-2 border-slate-400 rounded-md p-2 pl-5"
                  type="text"
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={19}
                  value={cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </label>
              <div className="flex gap-3">
                <label htmlFor="" className="w-2/3">
                  <h4 className="text-xl font-medium leading-10 tracking-wider">
                    EXP.DATE (MM/YY)
                  </h4>
                  <input
                    className="w-full border-2 border-slate-400 rounded-md p-2 pl-5"
                    type="month"
                    placeholder="e.g. MM YY"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
                <label htmlFor="" className="w-1/3">
                  <h4 className="text-xl font-medium leading-10 tracking-wider">
                    CVC
                  </h4>
                  <input
                    className="w-full border-2 border-slate-400 rounded-md p-2 pl-5"
                    type="text"
                    placeholder="e.g. 123"
                    maxLength={3}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button
                className="w-full rounded-md py-2 text-white bg-purple-950"
                type="submit"
              >
                Confirm
              </button>
            </form>
          )}

          {confirmed && (
            <div className="mx-auto flex flex-col items-center justify-center gap-5 w-80 mt-10 lg:mt-0">
              <div className="w-16 ">
                <img src={success} alt="success" className="w-full" />
              </div>
              <h1 className="uppercase text-2xl font-extrabold tracking-widest">
                Thank you!
              </h1>
              <p className=" text-slate-400">We've added your card details.</p>
              <button
                className="w-full rounded-md py-2 text-white bg-purple-950"
                onClick={() => {
                  setConfirmed(false),
                    setName(""),
                    setCardNumber(""),
                    setDate(""),
                    setCvc("");
                }}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreditCardForm;
