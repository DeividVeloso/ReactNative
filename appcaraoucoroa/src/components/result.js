import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

const face = require('./../imgs/moeda_cara.png');
const crown = require('./../imgs/moeda_coroa.png');
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { cara: false }
    }

    componentWillMount() {
        const random = Math.floor(Math.random() * 2);
        let cara = false;
        if (random === 0) {
            cara = true;
        }
        this.setState({
            cara
        });
    }

    render() {
        if (this.state.cara) {
            return (
                <View style={styles.result}>
                    <Image source={face} />
                </View>
            );
        }
        return (
            <View style={styles.result}>
                <Image source={crown} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',//Vertical
        alignItems: 'center'

    }
});

export default Result;