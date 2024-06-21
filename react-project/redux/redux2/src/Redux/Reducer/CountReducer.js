
import { DECREMENT, INCREMENT } from "../Action";

const statevalue = { count: 0 }

const CountReducer = (state = statevalue, action) => {
      switch (action.type) {
            case DECREMENT:
                  return state - 1
            case INCREMENT:
                  return state + 1
            default:
                  return state;
      }
}

export default CountReducer