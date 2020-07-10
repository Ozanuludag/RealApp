import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style }} />
    );
}

const styles = StyleSheet.create({
    input: {
        width:'30%',
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        marginVertical: 10,
        height:40,
       
    }
});

export default Input;