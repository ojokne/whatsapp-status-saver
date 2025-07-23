import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screens/SettingsScreen';
import StatusScreen from './src/screens/StatusScreen';
import SavedScreen from './src/screens/SavedScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from './color';

const RootStack = createBottomTabNavigator({
  screens: {
    Status: {
      screen: StatusScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="circle-notch" size={size} color={color} />
        ),
        tabBarActiveTintColor: colors.primaryColor,
      },
    },
    Saved: {
      screen: SavedScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="save" size={size} color={color} />
        ),
        tabBarActiveTintColor: colors.primaryColor,
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={size} color={color} />
        ),
        tabBarActiveTintColor: colors.primaryColor,
      },
    },
  },
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
