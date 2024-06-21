import { useState } from "react";



const useCounter = () => {
      const [count, setCount] = useState(0);

      const Icremanet = (val) => {
            setCount(count + val)
      }
      const Dcremanet = (val) => {
            setCount(count - val)
      }
      return { count, Icremanet, Dcremanet };
}

export default useCounter