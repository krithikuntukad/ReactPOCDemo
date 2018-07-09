import React, { Component } from "react";
import { View, Text } from "react-native";

/**
 * Class : LabelComponent
 * Description : Class provides Label Component
 */
class LabelComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={this.props.style}>{this.props.value}</Text>
      </View>
    );
  }
}

export default LabelComponent;
