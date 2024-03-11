import { createContext, useContext, useState } from "react";

const initialValue = {
  count: 0,
  color: 'blue'
}

const CounterContext = createContext(initialValue);

const CounterProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(prev => prev + 1);

  const state = {
    count,
    color: count % 2 === 0 ? 'blue' : 'green'
  }

  return (
    <CounterContext.Provider value={{ ...state, increaseCount }}>
      {children}
    </CounterContext.Provider>
  )

}

export default CounterProvider;

export const useCounter = () => useContext(CounterContext);

