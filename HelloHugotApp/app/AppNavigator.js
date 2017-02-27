'use strict'
import React, { Component } from 'react';
import {
  Text,
  Navigator,
  StyleSheet,
  View
} from 'react-native';
import HugotLinesScreen from './HugotLinesScreen'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "HugotLines":
        return (
          <HugotLinesScreen
            {...globalNavigatorProps} />
        )

      default:
        return (
          <Text>{`Undefined route specified ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

module.exports = AppNavigator
