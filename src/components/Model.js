import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Model extends Component {
  render() {
    let post = this.props.model;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {model} = ownProps;
  return {model};
};

export default connect(mapStateToProps, {})(Model);

const styles = {
  wrapper: {paddingLeft: 10, paddingRight: 10, marginBottom: 10, marginTop: 15},
  title: {fontWeight: 'bold', fontSize: 17},
  body: {fontSize: 17}
};
