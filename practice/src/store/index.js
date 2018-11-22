import { createStore, applyMiddleware } from "redux"
 
import thunk from "redux-thunk"
import escrowRedu from "./escrowReducer";

let middleware = applyMiddleware(thunk)
let store = createStore(escrowRedu, middleware)
store.subscribe(() => {
    console.log("store state ", store.getState())
})
export default store;