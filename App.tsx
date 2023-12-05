import React from 'react';
import {StyleSheet, View} from 'react-native';
import Create from './components/Create';

function App(): JSX.Element {
  return (
    <View style={style.mainContainer}>
      <Create />
    </View>
  );
}

export default App;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#E6E6E6',
  },
});
