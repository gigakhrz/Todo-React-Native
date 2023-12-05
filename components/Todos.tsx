import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todos = (): JSX.Element => {
  return (
    <View style={style.todosWrapper}>
      <View style={style.taskContainer}>
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {
            isChecked = true;
          }}
          fillColor="green"
          size={27}
        />
        <Text style={style.todoTitle}>workout</Text>
      </View>
    </View>
  );
};

export default Todos;

const style = StyleSheet.create({
  todosWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  todoTitle: {
    fontSize: 22,
    color: 'black',
  },
});
