import { useState } from "react";

function App() {
  useState;
  // let count = 5;
  let [count, setCount] = useState(5);

  let addvalue = () => {
    console.log("add valu" + count);
    // count = count + 1;
    if (count < 99) {
      setCount(count + 1);
    }
  };

  let removevalue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>counter js in React</h1>
      <h3 className="">count value : {count}</h3>

      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>remeve value</button>

      <p>{count}</p>
    </>
  );
}

export default App;
