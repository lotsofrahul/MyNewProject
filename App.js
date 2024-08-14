import React from 'react';

import {
  //These are components, like tags in HTML
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Hello Hai ....</Text>
      <Button title="Submit" />
    </View>
  );
};

export default App;
