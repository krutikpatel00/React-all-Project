import { useEffect, useState } from "react";

const useOnlilne = () => {

      const [isOnline, setisOnline] = useState(true)

      useEffect(() => {
            window.addEventListener('online', () => setisOnline(true))
            window.addEventListener('offline', () => setisOnline(false))
      }, [setisOnline])

      return isOnline;
}

export default useOnlilne;