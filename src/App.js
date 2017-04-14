import React, {Component} from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";

import ReduxThunk from "redux-thunk";

import Collection from "./components/Collection";

class App extends Component {
  render() {
    let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Collection/>
      </Provider>
    )
  }
}

export default App;
