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
import { getHelloMessage } from './functions/Functions';

function App() {
    const [message, setMessage] = useState(new Hello({ message: 'Hello mates :))' }));

    return (
        <>
            <Text>{message.message}</Text>
            <Text>{getHelloMessage(message.message)}</Text>
        </>
    );
};

const styles = StyleSheet.create({

});

export default App;
