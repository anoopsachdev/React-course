import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // in case nothing gets fetched, fetch an empty json object, at least it won't crash when api gives nothing
    const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            console.log("API full response:", res)
            console.log("Data inside:", res[currency])
            setData(res[currency])
        })
        .catch((err) => console.error("Error fetching currency info:", err)); // extra line by chatgpt
        
    }, [currency])
    // now this fetch in useCurrency Info... when would you want to call it?
    // only when your currency changes you would need new data. so only when currency (your depenedecy) would change only then your useCurrencyInfo would run and fetch the exchange rates for that currency
    return data;
}

export default useCurrencyInfo