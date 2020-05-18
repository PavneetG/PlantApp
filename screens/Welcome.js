import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';

import { Button, Block, Text } from '../components';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,

    }
    render() {
        return(
            <Block center middle>
                <Block center middle flex={0.3}>
                    <Text h1 center bold>
                    Your Home.
                    <Text h1 primary>Greener,</Text>
                    </Text> 
                </Block>
                <Text>Welcome</Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

})