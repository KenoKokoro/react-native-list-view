import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

//////////
// Include the App component in the ./src folder.
// Do not add the extension of the file (ex.: '.js').
//////////////
import App from './src/App';

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
