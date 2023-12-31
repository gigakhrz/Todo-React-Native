import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useTodos, {updateTodo, deleteTodo} from './useFetch';
import {setEdit} from '../feature/replacebleInput';
import {useDispatch, useSelector} from 'react-redux';
import {setInput} from '../feature/todoName';
import {setEditing} from '../feature/editingText';
import {setData} from '../feature/todoData';
import {RootState} from '../feature/store';

const Todos = (): JSX.Element => {
  const {refetchTodos} = useTodos();

  const dispatch = useDispatch();

  const data = useSelector((store: RootState) => store.todoData.todo);

  const handleEdit = (id: string): void => {
    const editText = data.filter(item => item._id === id);
    dispatch(setEdit(editText));
    dispatch(setInput(editText[0].title));
    dispatch(setEditing(true));

    const currentData = data.filter(item => item._id !== id);
    dispatch(setData(currentData));
  };

  return (
    <View style={style.todosWrapper}>
      {/*  */}
      {data.map(item => {
        return (
          <View key={item._id} style={style.taskContainer}>
            <View style={style.firstHalf}>
              <BouncyCheckbox
                isChecked={item.completed}
                onPress={() =>
                  updateTodo(item._id, !item.completed, refetchTodos)
                }
                fillColor="green"
                size={27}
              />
              <Text style={style.todoTitle}>{item.title}</Text>
            </View>

            <View style={style.changeCont}>
              <TouchableOpacity
                onPress={() => {
                  handleEdit(item._id);
                }}
                style={style.editWrapper}>
                <Text style={style.edit}> edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => deleteTodo(item._id, refetchTodos)}>
                <Image
                  style={style.image}
                  source={require('../images/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
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
    alignItems: 'center',
  },

  todoTitle: {
    fontSize: 20,
    color: 'black',
  },

  changeCont: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  editWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  edit: {
    width: '100%',
    fontSize: 20,
    color: 'green',
  },

  image: {
    width: 20,
    height: 20,
  },
});
