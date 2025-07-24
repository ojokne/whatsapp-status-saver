import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Header from '../components/header';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import StatusImages from '../components/statusImages';
import StatusVideos from '../components/statusVideos';
import { useState } from 'react';
import { colors } from '../../color';

const renderScene = SceneMap({
  first: StatusImages,
  second: StatusVideos,
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
export default function StatusScreen() {
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
  tabBar: {
    backgroundColor: colors.primaryColor,
  },
});
