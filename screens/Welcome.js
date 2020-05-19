import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import { Button, Block, Text } from '../components';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,

    }
    render() {
        return(
            <Block>
                <Block center middle flex={0.3}>
                    <Text h1 center bold>
                        Your Home.
                    <Text h1 primary>Greener,</Text>
                    </Text> 
                    <Text h3 gray2>Enjoy the experience.</Text>
                </Block>
                <Block>
                    <Text>Welcome</Text>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

})