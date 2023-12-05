import React from 'react';
import {StyleSheet, View} from 'react-native';
import Create from './components/Create';
import Todos from './components/Todos';

function App(): JSX.Element {
  return (
    <View style={style.mainContainer}>
      <Create />
      <Todos />
    </View>
  );
}

export default App;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 40,
    backgroundColor: '#E6E6E6',
    gap: 10,
  },
});
