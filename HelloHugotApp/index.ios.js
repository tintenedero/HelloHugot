'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import AppNavigator from './app/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HelloHugotApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "tab1"
    }
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={`Hugot Lines`}
          iconName="heartbeat"
          onPress={() => this.setState({selectedTab: "tab1"})}>
          <AppNavigator
            initialRoute={{ident: "HugotLines"}} />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('HelloHugotApp', () => HelloHugotApp);
