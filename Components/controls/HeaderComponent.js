import React, { Component } from "react";
import { Icon, Header, Content, Left, Right } from "native-base";
import {Text,Image}  from "react-native";
import commonStyles from "../Styles/commonStyles"
/**
 * Class : HeaderComponent
 * Description : Class provides Header   component
 */
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Header style={commonStyles.headrBgColor}>
        <Left>
          <Icon
            name="ios-menu"
            style={commonStyles.menuIcon}
            onPress={this.props.onPress}
          />
        </Left>

        <Content
          contentContainerStyle={commonStyles.contentStyle}
        >
          <Text style={commonStyles.contentLabel}>
           {this.props.title}
          </Text>
        </Content>

        <Right>
          <Image
            style={commonStyles.contentImage}
            source={require("../images/Save-White.png")}
          />
        </Right>
      </Header>
    );
  }
}
export default HeaderComponent;




