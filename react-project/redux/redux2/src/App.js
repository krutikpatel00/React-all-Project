import { Provider } from "react-redux"
import store from "./Redux/Store/store"
import Counter from "./Components/Counter"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Online from "./Components/Online"
import CountR from "./Components/CountR"

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Counter />} />
          <Route path="/online" element={<Online />} />
          <Route path="/countr" element={<CountR />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App