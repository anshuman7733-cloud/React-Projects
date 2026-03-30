import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("inr");

  const currencyData = useCurrencyInfo(currencyFrom);
  const currencyArr = Object.keys(currencyData);
  const rate = currencyData[currencyTo];

  const [amount, setAmount] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);

  function swap() {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    setAmount(convertedAmt);
    setConvertedAmt(amount)
  }


  function convertAmount() {
    setConvertedAmt(amount * rate);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                data
                currencyOpt={currencyArr}
                onCurrencyChange={(currency) => setCurrencyFrom(currency)}
                selectCurrency={currencyFrom}
                amount={amount}
                onAmtChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                onClick={() => swap()}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyOpt={currencyArr}
                onCurrencyChange={(currency) => setCurrencyTo(currency)}
                selectCurrency={currencyTo}
                amount={convertedAmt}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg uppercase cursor-pointer"
              onClick={convertAmount}
            >
              Convert {currencyFrom} to {currencyTo}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
