import { useState, useCallback ,useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAll, setNumberAll] = useState(false);
  const [careallow, setcareallow] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenreter = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAll) str += "0123456789";
    if (careallow) str += "`!@#$%^&*()";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAll, careallow, setPassword]);

  useEffect(()=>{
    passwordGenreter()
  },[length,numberAll,careallow,passwordGenreter])

  return (
    <>
      <div className="w-full max-w-md shadow-md p-4 m-8 text-orange-500 bg-gray-800 rounded-md">
        <div className="flex ">
          <input
            type="text"
            value={password}
            className="w-full py-2 bg-white rounded-md ps-4"
            placeholder="passowrd"
            readOnly
          />
          <button className="text-white p-4 bg-blue-600 rounded">copy</button>
        </div>
        <div className="flex flex-col">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full cursor-pointer my-4"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>langth ({length})</label>

          <div>
            <input
              type="checkbox"
              defaultChecked={numberAll}
              // id={numberInput}
              onChange={() => {
                setNumberAll((pres) => !pres);
              }}
            />
            <label htmlFor="numberInput">nubmer</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={careallow}
              // id={carealll}
              onChange={() => {
                setcareallow((pres) => !pres);
              }}
            />
            <label htmlFor="carealll">carecter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
