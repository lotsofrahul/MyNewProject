import React, {useEffect, useState} from 'react';
import {
  //These are called components, like tags in HTML
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
import style1 from './Styles/style1';
import users from './Utilities/Users';

const App = () => {
  const [value, setValue] = useState('');
  //runs when a component/state/prop change(when mouting happen)
  useEffect(() => {
    console.warn('jb');
  }, []); //empty array => component did mount (runs only after mounting)
  useEffect(() => {
    console.warn('jb');
  }, [value]); //passing state/prop, useEffect runs only when these state/prop updates. (component did update)
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

      {/* <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      /> */}

      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map(item => (
            <Text
              style={{
                fontSize: 40,
              }}>
              {item.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
