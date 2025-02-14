import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store/configureStore";

const store = configureStore({ reducer });
export default store;
