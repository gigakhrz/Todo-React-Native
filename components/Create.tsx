import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Create = (): JSX.Element => {
  return (
    <View style={style.createCont}>
      <Text style={style.title}>ToDo App</Text>

      <View style={style.wrapper}>
        <TextInput style={style.input} />
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Add Task</Text>
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
    borderRadius: 10,
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
