import React, {Component} from "react";
import {AppRegistry, ScrollView} from "react-native";
import Collection from "./components/post/Collection";

export default class ListApplication extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <Collection/>
      </ScrollView>
    );
  }
}

const styles = {
  wrapper: {}
};

AppRegistry.registerComponent('listApplication', () => ListApplication);
