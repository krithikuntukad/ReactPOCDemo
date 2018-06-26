import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Column as Col, Row } from 'react-native-flexbox-grid';
 
export default class HomeScreen extends Component {
 
  static navigationOptions = {
    drawerIcon: (
      // <Image style={{ width: 60, height: 60, }}
      //   source={require('../icons/Holdings.png')} />
 
      <Button iconLeft style={{ width: 50, height: 50 }}>
      <Icon name='home' />
     
    </Button>
    )
  }
  render() {
    return (
      // <Container>
      // <Header>
      //   <Right>
      //     <Icon name="ios-menu" onPress={()=> this.props.navigation.openDrawer() } />
      //     </Right>
      //     </Header>
      //  <Content contentContainerStyle={{
      //     flex:1,
      //     alignItems:'center',
      //     justifyContent:'center'}}>
      //       <Text>SettingsScreen </Text>
      //       </Content>
      //       </Container>
      <Container>
        <Header style={{backgroundColor: "#153875",}}>
          <Left>
            <Icon name="ios-menu" style={{color: 'white'}} onPress={() =>
              this.props.navigation.openDrawer()} />
          </Left>
          <Content contentContainerStyle={{
           flex:1,
           alignItems:'center',
          justifyContent:'center'}}>
         <Text style={{ color: 'white',textAlign:'center'}}> Home  </Text>
         </Content>
          <Right>
            <Image style={{ width: 30, height: 30, }}
              source={require('./images/Save-White.png')} />
          </Right>
        </Header>
 
        <Content contentContainerStyle={{
          flex: 1,
        }}>
        
          {/* <Text>Home Screen </Text> */}
          {/* <View style={{ width: 400, height: 80, backgroundColor: '#48d1cc' }}>
            <View >
              <Row size={12}>
                <Col sm={1} />
                <Col sm={3}>
                  <Image
                    style={{ width: 60, height: 60, }}
                    source={require('./images/Trade-Requests.png')} />
                </Col>
               
                <Col sm={8}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingTop: 30, paddingRight: 130 }}>
                    Trade Requests  {"\n"} VIew List 0</Text>
                </Col>
              </Row>
            </View>
          </View> */}
          <View style={{height: 80,width: 400, backgroundColor: '#48d1cc' }}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Image
                    style={{ width: 60, height: 60,marginTop:10}}
                    source={require('./images/Trade-Requests.png')} />
      </View>
      <View style={{width: 250, height: 80,flex: 1,paddingLeft:10,
        
        justifyContent: 'center'}}>
        <Text style={{  color: 'white' }}>
                    Trade Requests  {"\n"} VIew List 0</Text>
       </View>
              
            </View>
          </View> 
 
          {/* <View style={{ width: 400, height: 80, backgroundColor: '#87ceeb' }} >
            <View >
              <Row size={12}>
                <Col sm={1} />
                <Col sm={3}>
                  <Image
                    style={{ width: 60, height: 60, }}
                    source={require('./images/Transactions.png')} />
                </Col>
               
                <Col sm={7}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingTop: 30, paddingRight: 130 }}>
                    Transactions   {"\n"} VIew List 0</Text>
                </Col>
              </Row>
            </View>
          </View>
  */}
   <View style={{height: 80,width: 400, backgroundColor: '#87ceeb' }}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Image
                    style={{ width: 60, height: 60,marginTop:10}}
                    source={require('./images/Transactions.png')} />
      </View>
      <View style={{width: 250, height: 80,flex: 1,paddingLeft:10,
        
        justifyContent: 'center'}}>
        <Text style={{  color: 'white' }}>
        Transactions  {"\n"} VIew List 0</Text>
       </View>
              
            </View>
          </View> 
          {/* <View style={{ width: 400, height: 100, backgroundColor: 'steelblue' }}>
            <View >
              <Row size={12}>
                <Col sm={1} />
                <Col sm={3}>
                  <Image
                    style={{ width: 60, height: 60, }}
                    source={require('./images/Broker-Accounts.png')} />
                </Col>
              
                <Col sm={7}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingTop: 30, paddingRight: 130 }}>
                    Broker Accounts{"\n"}  VIew List 0</Text>
                </Col>
              </Row>
            </View>
          </View> */}
          <View style={{height: 80,width: 400, backgroundColor: 'steelblue' }}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Image
                    style={{ width: 60, height: 60,marginTop:10}}
                    source={require('./images/Broker-Accounts.png')} />
      </View>
      <View style={{width: 250, height: 80,flex: 1,paddingLeft:10,
        
        justifyContent: 'center'}}>
        <Text style={{  color: 'white' }}>
        Broker Accounts  {"\n"} VIew List 0</Text>
       </View>
              
            </View>
          </View> 
 
          {/* <View style={{ width: 400, height: 100, backgroundColor: '#8a2be2' }}>
            <View >
              <Row size={12}>
                <Col sm={1} />
                <Col sm={3}>
                  <Image
                    style={{ width: 60, height: 60, }}
                    source={require('./images/Holdings.png')} />
                </Col>
                
                <Col sm={7}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingTop: 30, paddingRight: 130 }}>
                    Holdings {"\n"}  VIew List 0</Text>
                </Col>
              </Row>
            </View>
          </View> */}
  <View style={{height: 80,width: 400, backgroundColor: '#8a2be2' }}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Image
                    style={{ width: 60, height: 60,marginTop:10}}
                    source={require('./images/Holdings.png')} />
      </View>
      <View style={{width: 250, height: 80,flex: 1,paddingLeft:10,
        
        justifyContent: 'center'}}>
        <Text style={{  color: 'white' }}>
        Holdings  {"\n"} VIew List 0</Text>
       </View>
              
            </View>
          </View> 
          {/* <View style={{ width: 400, height: 100, backgroundColor: '#483d8b' }} >
            <View >
              <Row size={12}>
                <Col sm={1} />
                <Col sm={3}>
                  <Image
                    style={{ width: 30, height: 30, paddingRight: 60, paddingTop: 60 }}
                    source={require('./images/Entertainment.png')} />
                </Col>
               
                <Col sm={7}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingTop: 30, paddingRight: 130 }}>
                    Entertainment    {"\n"}  VIew List 0</Text>
                </Col>
              </Row>
            </View>
          </View> */}
  <View style={{height: 80,width: 400, backgroundColor: '#483d8b' }}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 150, height: 80,flex: 0.30,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Image
                    style={{ width: 60, height: 60,marginTop:10}}
                    source={require('./images/Entertainment.png')} />
      </View>
      <View style={{width: 250, height: 80,flex: 1,paddingLeft:10,
        
        justifyContent: 'center'}}>
        <Text style={{  color: 'white' }}>
        Entertainment  {"\n"} VIew List 0</Text>
       </View>
              
            </View>
          </View> 
        </Content>
      </Container>
 
    );
  }
}
 
// skip this line if using Create React Native App
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);