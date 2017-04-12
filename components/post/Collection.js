import React, {Component} from "react";
import {ActivityIndicator, Alert, AsyncStorage, ListView, Text, TouchableHighlight, View} from "react-native";
import {instance as $http} from "./../../core/HttpRequest";
import Model from "./Model";

export default class Collection extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

    this.state = {posts: this.ds.cloneWithRows([])};
  }

  async componentWillMount() {
    let posts = await this.getFromStorage('posts');
    if (posts) {
      this.setState({posts: this.ds.cloneWithRows(posts)});
      return;
    }

    this.fetchPosts();
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating={!this.state.posts.getRowCount()}/>
        <ListView
          dataSource={this.state.posts}
          renderRow={this.singleRow.bind(this)}
          enableEmptySections={true}
        />
      </View>
    );
  }

  singleRow(post, index) {
    return (
      <View key={index} style={styles.wrapper}>
        <Model style={styles.model} model={post}/>
        <TouchableHighlight style={styles.options} onPress={() => this.openPopup(post)}>
          <Text style={styles.optionsText}>Options</Text>
        </TouchableHighlight>
      </View>
    )
  }

  openPopup(post) {
    Alert.alert(
      `Delete ${post.title}`,
      'Are you sure you want to delete this dude?',
      [
        {text: 'Cancel', onPress: () => false, style: 'cancel'},
        {text: 'Delete', onPress: () => this.removePost(post)},
      ],
      {cancelable: true}
    );
  }

  fetchPosts() {
    $http.get('https://jsonplaceholder.typicode.com/posts/').then(json => {
      AsyncStorage.setItem('posts', JSON.stringify(json));

      this.setState({
        posts: this.ds.cloneWithRows(json)
      });
    });
  }

  async removePost(post) {
    let posts = await this.getFromStorage('posts');
    posts.splice(
      posts.findIndex(obj => obj.id === post.id)
      , 1);

    AsyncStorage.setItem('posts', JSON.stringify(posts));
    this.setState({posts: this.ds.cloneWithRows(posts)});
  }

  async getFromStorage(key) {
    let posts = await AsyncStorage.getItem(key);

    if (!posts) {
      return [];
    }

    return JSON.parse(posts);
  }
}

const styles = {
  options: {backgroundColor: '#3468eb', padding: 15, marginBottom: 25},
  optionsText: {fontSize: 20, textAlign: 'center', color: '#fff'},
  wrapper: {borderBottomColor: '#bbb', borderBottomWidth: 2}
};
