import { Dropdown } from "react-native-material-dropdown";
import React, { Component } from "react";
import { View, Dimensions } from "react-native";

/**
 * Class : DropdownComponent
 * Description : Class provides dropdown component
 */

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View key={this.props.key}>
        <Dropdown
          label={this.props.label}
          data={this.props.dropDowValues}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          fontSize={10}
          baseColor="black"
          textColor="black"
          labelFontSize={10}
        />
      </View>
    );
  }
}

export default DropdownComponent;
