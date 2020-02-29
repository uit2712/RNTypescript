/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import Hello from './models/Hello';

function App() {
    const [msg, setMsg] = useState(new Hello({ message: 'Hello mates :)))' }));

    return (
        <Text>{msg.message}</Text>
    );
};

const styles = StyleSheet.create({

});

export default App;
