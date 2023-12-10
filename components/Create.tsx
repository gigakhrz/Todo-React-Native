import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useTodos, {addTask} from './useFetch';
import {useState} from 'react';

const Create = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const {refetchTodos} = useTodos();

  return (
    <View style={style.createCont}>
      <Text style={style.title}>ToDo App</Text>

      <View style={style.wrapper}>
        <TextInput style={style.input} onChangeText={text => setInput(text)} />
        <TouchableOpacity style={style.button}>
          <Text
            style={style.buttonText}
            onPress={() => {
              addTask(input, refetchTodos);
            }}>
            Add Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create;

const style = StyleSheet.create({
  createCont: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'center',
  },

  title: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold',
  },

  wrapper: {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
  },

  input: {
    borderColor: 'black',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },

  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
