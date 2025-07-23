import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screens/SettingsScreen';
import StatusScreen from './src/screens/StatusScreen';
import SavedScreen from './src/screens/SavedScreen';
import { Settings } from 'react-native';


const RootStack = createBottomTabNavigator({
  screens: {
    Status: {
      screen: StatusScreen,
      options: {
        headerShown: false,
      },
    },
    Saved: {
      screen: SavedScreen,
      options: {
        headerShown: false,
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        headerShown: false,
      },
    },
  },
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
