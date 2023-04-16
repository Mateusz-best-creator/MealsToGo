import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { spacing } from './src/utils/sizes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Text</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    backgroundColor: 'blue',
    padding: spacing.md,
  },
  textContainer: {
    backgroundColor: '#11dd11',
    flex: 1,
    padding: spacing.md,
  }
});

export default App;