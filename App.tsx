import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AssetGallery} from './src/components/AssetGallery/AssetGallery';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar />
      <AssetGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
