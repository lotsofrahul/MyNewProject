import React, {useState} from 'react';
import {
  //These are called components, like tags in HTML
  View,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import style1 from './Styles/style1';

const App = () => {
  const [value, setValue] = useState('');

  const users = [
    {
      id: 2,
      name: 'frfrf',
    },
    {
      id: 23,
      name: 'frfrf',
    },
    {
      id: 25,
      name: 'frfrf',
    },
    {
      id: 1,
      name: 'frfrf',
    },
    {
      id: 27,
      name: 'frfrf',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Hello Hai ....</Text>
      <Text style={[style1.sty1, {color: 'red'}]}>Hello Hai ....</Text>
      <Button title={value} />
      <TextInput
        style={{margin: 10, fontSize: 30, borderColor: 'red', borderWidth: 2}}
        placeholder="Enter something"
        value={value}
        onChangeText={text => setValue(text)}
      />
      <TextInput
        style={{margin: 10, fontSize: 30, borderColor: 'red', borderWidth: 2}}
        placeholder="Enter Password"
        value={value}
        secureTextEntry={true}
        onChangeText={text => setValue(text)}
      />
      <Button
        title="Clear Text"
        onPress={() => {
          setValue('');
        }}
      />

      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

export default App;
