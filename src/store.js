import { legacy_createStore as createStore } from "redux";
import reducer from "./store/configureStore";
const store = createStore(reducer);

export default store;
