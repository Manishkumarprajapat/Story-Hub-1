import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default class WriteStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '',
     author: '',
      storyText: ''
       };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onText={(text) => {
            this.setState({ text: text });
          }}
          placeholder = "title"
          value={this.state.text}
        />

        <TextInput
          style={styles.inputBoxes}
          onText={(text) => {
            this.setState({ text: text });
          }}
          placeholder = "author"
          value={this.state.text}
        />

        <TextInput
          style={styles.inputMan}
          onText={(text) => {
            this.setState({ text: text });
          }}
          placeholder = "story"
          value={this.state.text}
        />

        <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputBoxes: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputMan: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 140,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  button: {
    margin: 50,
    height: 40,
    width: 100,
    backgroundColor: 'blue',
    marginLeft: 110,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
