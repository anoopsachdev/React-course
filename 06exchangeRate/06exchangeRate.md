# entire code
## src > components > index.js

```javascript
import InputBox from "./InputBox";

export{InputBox}

// a file to import all components and you are going to use this file to be imported in your App.jsx to access components
```

## src > components > InputBox.jsx
```javascript
import React, {useId} from 'react'
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

function InputBox({
  label, 
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false, // can ignore this, but in production grade app we use this
  currencyDisable = false, // can ignore this as well, but in production grade app we use this
  className = "",
}) {
  const amountInputId = useId()
  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id = {amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value = {amount}
                  onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))} // most of the time javascipt is notorius and e.target.value returns a string value
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value = {selectCurrency}  
                  onChange = {(e) => onCurrencyChange && onCurrencyChange((e.target.value))} 
                  disabled = {currencyDisable}
              >
                  
                      {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;



```
## src > hooks > useCurrencyInfo.js
```javascript
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // in case nothing gets fetched, fetch an empty json object, at least it won't crash when api gives nothing
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    // now this fetch in useCurrency Info... when would you want to call it?
    // only when your currency changes you would need new data. so only when currency (your depenedecy) would change only then your useCurrencyInfo would run and fetch the exchange rates for that currency
    return data;
}

export default useCurrencyInfo
```

## src > App.jsx
```javascript
import {useState} from 'react'
import { InputBox } from "./components"
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from) // object

  const options = Object.keys(currencyInfo) // this is basically currencyOptions

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://spidubai.ae/wp-content/uploads/2024/12/shutterstock_605715122-scaled.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                currencyOptions={options}
                                onCurrencyChange = {(currency) => setFrom(currency)}
                                onAmountChange = {(amt) => setAmount(amt)}
                                selectCurrency= {from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick = {swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange = {(currency) => setTo(currency)}
                                onAmountChange = {(amt) => setConvertedAmount(amt)}
                                selectCurrency = {to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

```
## src > index.css
```css
@import "tailwindcss";

```

## src > main.jsx
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```
