
import React from 'react';
import AddEntry from './AddEntry'
import History from './History'
import Live from './Live'
import { Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { white, purple } from '../utils/colors';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const RouteConfigs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: "History",
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: "Add Entry",
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
  Live: {
    screen: Live,
    navigationOptions: {
      tabBarLabel: "Live",
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
    }
  }
};
  
const TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: Platform.OS === "ios" ? purple : white,
        style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
        }
    }
};

const TabsNavigator =
  Platform.OS === "ios"
  ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
  : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

export default createAppContainer(TabsNavigator)