import * as  React from 'react';
import { StyleSheet, Text, View, Image ,TextInput} from 'react-native';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
        <View style={styles.container}>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStory},
  ReadStory: {screen: ReadStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      // console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"pink",
  }
});




