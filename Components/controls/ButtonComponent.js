import React, { Component } from "react";
import { Button } from "react-native";


/**
 * Class : CheckboxComponent
 * Description : Class provides check box component
 */
class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Button
        title={this.props.title}
        color={this.props.color}
        onPress={this.props.onPress}
      />
    );
  }
}
export default ButtonComponent;
