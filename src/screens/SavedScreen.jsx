import {
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Header from '../components/header';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { colors } from '../../color';
import SavedImages from '../components/savedImages';
import SavedVideos from '../components/savedVideos';

const renderScene = SceneMap({
  first: SavedImages,
  second: SavedVideos,
});

const routes = [
  { key: 'first', title: 'Images' },
  { key: 'second', title: 'Videos' },
];

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.white }}
    style={styles.tabBar}
  />
);
export default function SavedScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar:{
          backgroundColor: colors.primaryColor,

  }
})