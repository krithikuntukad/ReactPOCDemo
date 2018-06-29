/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
 
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import HomeScreen from './Components/HomeScreen';

import { DrawerNavigator , DrawerItems, StackNavigator} from 'react-navigation';
import DemoPageStyleOne from './Components/DemoPageStyleOne';
import DemoPageStyleTwo from './Components/DemoPageStyleTwo';
import { Icon, Button, Container, Header, Body, Content, Left } from 'native-base';
import DemoPageStyleSeven from './Components/DemoPageStyleSeven';

import DemoPagination from './Components/DemoPagination';
import DemoPagination2 from './Components/DemoPagination2';
import DemoPageStyleFour from './Components/DemoPageStyleFour';
import DemoPageStyleThree from './Components/DemoPageStyleThree';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 


export default class App extends Component {
  
 
  render() {
    return (
 
        <MyApp />
   
      // <View>
      //   <FlexBox />
      //   </View>
 
    );
  }
}
 
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 50, backgroundColor:'white'}}>
      <Body>
        {/* <Image style={{ width: 50, height: 50, borderRadius:50  }}
          source={require('./Components/images/Entertainment.png')} /> */}
          <Text>Welcome</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
      </Content>
  </Container>
 
)
 
const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  StyleOne : {
    screen: DemoPageStyleOne
  },
  StyleTwo : {
    screen: DemoPageStyleTwo
  },
  StyleThree : {
    screen: DemoPageStyleThree
  },
  StyleFour:{
    screen:DemoPageStyleFour
  },
  StyleFive:{
    screen: DemoPageStyleSeven
  },
  DemoPagination:{
    screen:DemoPagination2
  }

  
 
},
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });
 
  // const Navigation = StackNavigator({
  //   Style1 : {
  //     screen: Style1Screen
  //   },
  //   Style2 : {
  //     screen: Style2Screen
  //   }
  // })
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});