import { createStore } from 'redux'
import messagesReducer from "./messageReducer";

const store = createStore(messagesReducer);

export default store;
