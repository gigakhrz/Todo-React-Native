import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todos = (): JSX.Element => {
  return (
    <View style={style.todosWrapper}>
      <View>
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {
            isChecked = true;
          }}
          fillColor="green"
        />
      </View>
    </View>
  );
};

export default Todos;

const style = StyleSheet.create({
  todosWrapper: {
    width: '100%',
  },
});
