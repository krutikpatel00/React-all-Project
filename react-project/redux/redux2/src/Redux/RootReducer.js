import { combineReducers } from "redux"

import CountReducer from "./Reducer/CountReducer"
const RootReducer = combineReducers({
      CountReducer,
})

export default RootReducer