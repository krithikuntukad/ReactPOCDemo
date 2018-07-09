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
} from 'react-native';

import HomeScreen from './Components/HomeScreen';

import { DrawerNavigator , DrawerItems} from 'react-navigation';
import XMLFormWithSwitch from './Components/XMLFormWithSwitch';
import {Container, Header, Body, Content } from 'native-base';
import MainXMLForm from './Components/MainXMLForm';

import Paging from './Components/Paging';
import CompleteXMLFormWithStyles from './Components/CompleteXMLFormWithStyles';
import Accordian from './Components/Accordian';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 


export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
 
  render() {
    return (
        <MyApp />
    );
  }
}
 
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 50, backgroundColor:'white'}}>
      <Body>
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
  "Main XML form":{
    screen: MainXMLForm
  },
  " XML form with Switch" : {
    screen: XMLFormWithSwitch
  },
  "Accordion" : {
    screen: Accordian
  },
  "Complete XML form with styles"  :{
    screen:CompleteXMLFormWithStyles
  },
  "Paging":{
    screen:Paging
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