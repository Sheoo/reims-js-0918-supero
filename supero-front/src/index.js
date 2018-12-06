import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import activitiesReducer from "./reducers/activitiesReducer";
import loadingReducer from "./reducers/loadingReducer";
import { SELECT_ADDRESS } from "./actions/actionTypes";
import selectAddressReducer from "./reducers/selectAddressReducer";

const rootReducer = combineReducers({
  activities: activitiesReducer,
  loading: loadingReducer,
  selectAddress: selectAddressReducer,
  form: formReducer.plugin({
    form: (state, action) => {
      switch (action.type) {
        case SELECT_ADDRESS:
          return action.address;
        default:
          return state;
      }
    }
  })
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
