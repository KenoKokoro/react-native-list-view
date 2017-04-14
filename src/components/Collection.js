import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ListView, TouchableHighlight, ActivityIndicator, Text, Alert} from 'react-native';

import {fetchPosts, deletePostFromState, refreshPostsFromAjax} from './../actions/CollectionActions';
import Model from './Model';

class Collection extends Component {
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    this.props.fetchPosts();
  }

  removePost(post) {
    this.props.deletePostFromState(post, this.props.posts);
  }

  openPopup(post) {
    Alert.alert(
      `Delete ${post.title}`,
      `Are you sure that you want to delete this dude?`,
      [
        {text: 'Cancel', onPress: () => false, style: 'cancel'},
        {text: 'Delete', onPress: () => this.removePost(post)}
      ]
    )
  }

  singleRow(post, index) {
    return (
      <View key={index} style={styles.wrapper}>
        <Model model={post}/>
        <TouchableHighlight style={styles.options} onPress={() => this.openPopup(post)}>
          <Text style={styles.optionsText}>Delete</Text>
        </TouchableHighlight>
      </View>
    )
  }

  reloadAjax() {
    this.props.refreshPostsFromAjax();
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating={this.props.loading}/>
        <TouchableHighlight style={styles.options} onPress={() => this.reloadAjax()}>
          <Text style={styles.optionsText}>Ajax reload</Text>
        </TouchableHighlight>
        <ListView
          dataSource={this.props.ds}
          renderRow={this.singleRow.bind(this)}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {posts, loading, ds} = state.posts;
  return {posts, loading, ds};
};

export default connect(mapStateToProps, {fetchPosts, deletePostFromState, refreshPostsFromAjax})(Collection);

const styles = {
  options: {backgroundColor: '#3468eb', padding: 15, marginBottom: 25},
  optionsText: {fontSize: 20, textAlign: 'center', color: '#fff'},
  wrapper: {borderBottomColor: '#bbb', borderBottomWidth: 2}
};
