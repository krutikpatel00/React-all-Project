import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap fixed bottom-12 px-2 justify-center inset-x-0">
          <div className="flex flex-wrap justify-center px-2 py-2 rounded-md bg-white">
            <button
              className="outline-none px-4 py-2 bg-red-600 rounded-lg text-white mx-2"
              onClick={() => {
                setColor("red");
              }}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-2 rounded-lg text-white bg-blue-700 mx-2 "
              onClick={() => {
                setColor("#1a1aff");
              }}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-2 rounded-lg text-white bg-pink-700 mx-2 "
              onClick={() => {
                setColor("rgb(255, 51, 153)");
              }}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-2 rounded-lg text-white bg-green-700 mx-2 "
              onClick={() => {
                setColor("hsl(120, 60%, 50%)");
              }}
            >
              red
            </button>
          </div>
        </div>
      </div>x
    </>
  );
}

export default App;
