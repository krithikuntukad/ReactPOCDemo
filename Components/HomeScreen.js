import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { Column as Col, Row } from 'react-native-flexbox-grid';
 
import styles from './Styles/styleHome';
import commonStyles from "./Styles/commonStyles";
export default class HomeScreen extends Component {
 
  static navigationOptions = {
  }
  render() {
    return (
      <Container>
        <Header style={commonStyles.headrBgColor}>
          <Left>
            <Icon name="ios-menu" style={commonStyles.menuIcon} onPress={() =>
              this.props.navigation.openDrawer()} />
          </Left>
          <Content contentContainerStyle={commonStyles.contentStyle}>
            <Text style={commonStyles.contentLabel}> Home  </Text>
          </Content>
          <Right>
            <Image style={commonStyles.contentImage}
              source={require('./images/Save-White.png')} />
          </Right>
        </Header>
 
        <Content contentContainerStyle={{
          flex: 1,
        }}>
          <View >
            <View style={[styles.FlexBoxStyle, styles.flexBlueShadeOne]} >
              <View style={styles.FlexStyle}>
                <View style={styles.IconView}>
                  <Image style={styles.IconStyle}
                    source={require('./images/Trade-Requests-white.png')} />
                </View>
                <View style={styles.IconText}>
                  <Text style={styles.fontColor}> Trade Requests  {"\n"} VIew List 0</Text>
                </View>
              </View>
            </View>
 
            <View style={[styles.FlexBoxStyle, styles.flexBlueShadeTwo]}>
              <View style={styles.FlexStyle}>
                <View style={styles.IconView}>
                  <Image
                    style={styles.IconStyle}
                    source={require('./images/Transactions-white.png')} />
                </View>
                <View style={styles.IconText}>
                  <Text style={styles.fontColor}> Transactions  {"\n"} VIew List 0</Text>
                </View>
 
              </View>
            </View>
            <View style={[styles.FlexBoxStyle, styles.flexBlueShadeThree]}>
              <View style={styles.FlexStyle}>
                <View style={styles.IconView}>
                  <Image
                    style={styles.IconStyle}
                    source={require('./images/Broker-Accounts-white.png')} />
                </View>
                <View style={styles.IconText}>
                  <Text style={styles.fontColor}>  Broker Accounts  {"\n"} VIew List 0</Text>
                </View>
 
              </View>
            </View>
 
            <View style={[styles.FlexBoxStyle, styles.flexBlueShadeFour]}>
              <View style={styles.FlexStyle}>
                <View style={styles.IconView}>
                  <Image
                    style={styles.IconStyle}
                    source={require('./images/Holdings-white.png')} />
                </View>
                <View style={styles.IconText}>
                  <Text style={styles.fontColor}> Holdings  {"\n"} VIew List 0</Text>
                </View>
 
              </View>
            </View>
 
            <View style={[styles.FlexBoxStyle, styles.flexBlueShadeFive]}>
              <View style={styles.FlexStyle}>
                <View style={styles.IconView}>
                  <Image style={styles.IconStyle}
                    source={require('./images/Entertainment-white.png')} />
                </View>
                <View style={styles.IconText}>
                  <Text style={styles.fontColor}>  Entertainment  {"\n"} VIew List 0</Text>
                </View>
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