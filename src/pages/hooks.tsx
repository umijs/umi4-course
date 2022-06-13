import React, { useState, createContext, useContext } from "react";

const Context = createContext<any>(null);

const Count = ({}) => {
  const { useCount } = useContext(Context);
  const [count, setCount] = useCount();
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
};

const useCount = () => {
  const [count, setCount] = useState(1);
  return [count, setCount];
};

export default function List() {
  return (
    <Context.Provider value={{ useCount }}>
      <Count />
      <br />
      <Count />
      <br />
      <Count />
    </Context.Provider>
  );
}
