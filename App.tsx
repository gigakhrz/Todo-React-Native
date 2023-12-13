import React from 'react';
import {StyleSheet, View} from 'react-native';
import Create from './components/Create';
import Todos from './components/Todos';
import {Provider} from 'react-redux';
import store from './feature/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={style.mainContainer}>
        <Create />
        <Todos />
      </View>
    </Provider>
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
