import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [currencyName, setCurrencyName] = useState("");
  useEffect(() => {
    if (!currency) return;
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((res) => res.json())
      .then((res) => setCurrencyName(res[currency]));
    // console.log(data);
  }, [currency]);
  console.log("Rates:", data);
  console.log("Currency name:", currencyName);
  return { ...data, currencyName };
}

export default useCurrencyInfo;
