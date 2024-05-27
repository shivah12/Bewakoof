import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import {thunk as thunk1} from "redux-thunk";
import { reducer } from "./reducer.js";

const rootReducer = combineReducers({
  reducer: reducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk1)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
