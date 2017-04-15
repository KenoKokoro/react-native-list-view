import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

import App from "./src/App";

export default class ListApplication extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <App />
      </View>
    );
  }
}

const styles = {
  wrap: {
    flex: 1,
    marginTop: 40,
    padding: 20
  }
};

AppRegistry.registerComponent('listApplication', () => ListApplication);
