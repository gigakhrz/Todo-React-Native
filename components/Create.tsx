import {StyleSheet, Text, View} from 'react-native';

const Create = (): JSX.Element => {
  return (
    <View style={style.createCont}>
      <Text>Todo app</Text>
    </View>
  );
};

export default Create;

const style = StyleSheet.create({
  createCont: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  title: {
    color: 'black',
    fontSize: 24,
    lineHeight: 16,
  },
});
