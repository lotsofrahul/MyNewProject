import React from 'react';
import {
  //These are called components, like tags in HTML
  View,
  Text,
  Button,
} from 'react-native';
import style1 from './Styles/style1';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Hello Hai ....</Text>
      <Text style={[style1.sty1,{color: 'red'}]}>Hello Hai ....</Text>
      <Button title="Submit" />
    </View>
  );
};

export default App;
