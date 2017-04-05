import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Model extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{this.props.model.title}</Text>
        <Text style={styles.body}>{this.props.model.body}</Text>
      </View>
    );
  }
}

const styles = {
  wrapper: {paddingLeft: 10, paddingRight: 10, marginBottom: 10, marginTop: 15},
  title: {fontWeight: 'bold', fontSize: 17},
  body: {fontSize: 17}
};