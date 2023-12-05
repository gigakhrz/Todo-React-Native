import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todos = (): JSX.Element => {
  return (
    <View style={style.todosWrapper}>
      {/*  */}
      <View style={style.taskContainer}>
        <View style={style.firstHalf}>
          <BouncyCheckbox
            onPress={(isChecked: boolean) => {
              isChecked = true;
            }}
            fillColor="green"
            size={27}
          />
          <Text style={style.todoTitle}>workout</Text>
        </View>

        <View style={style.changeCont}>
          <Text style={style.edit}>edit</Text>
        </View>
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
  },

  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  firstHalf: {
    display: 'flex',
    flexDirection: 'row',
  },

  todoTitle: {
    fontSize: 20,
    color: 'black',
  },

  changeCont: {
    display: 'flex',
    gap: 10,
  },

  edit: {
    fontSize: 20,
    color: 'green',
  },
});
