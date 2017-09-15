import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class Container {
    render() {
        return (
            <View>
                <TextInput
                    keyboardType="numbers-and-punctuation"
                />
            </View>
        );
    }
}