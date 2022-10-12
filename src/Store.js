import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { MyReducers } from "./redux/Reducers";

const store = createStore(MyReducers,applyMiddleware(thunk))
export default store;