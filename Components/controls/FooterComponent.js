import React, { Component } from "react";
import { View,Button } from "react-native";
import commonStyles from "../Styles/commonStyles"
import { Column as Col, Row } from "react-native-flexbox-grid";
import ButtonComponent from './ButtonComponent';
/**
 * Class : FooterComponent
 * Description : Class provides check box component
 */
class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
      <Row size={12}> 
         <Col sm={6} style={commonStyles.passiveButtonColor}>
          <ButtonComponent title={this.props.cancelTitle} color={this.props.cancelColor} onPress={this.props.cancelAction}/>
        </Col>
        <Col style={commonStyles.activeButtonColor} sm={6}>
          <ButtonComponent title={this.props.proceedTitle} color={this.props.proceedColor} onPress={this.props.proceedAction}/>
        </Col>
        </Row>
     
    </View>
    );
  }
}
export default FooterComponent;



