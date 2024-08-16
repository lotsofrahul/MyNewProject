import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

const Util2 = () => {
    let timer = setInterval(() => {
        console.warn("Espresso");
    }, 3000);
    useEffect(() => {
        return () => clearInterval(timer);
    });
    return (
        <View>
        <Text style={{color: 'red', fontSize: 20}}>Big dawgs</Text>
        </View>
    );
};

export default Util2;
