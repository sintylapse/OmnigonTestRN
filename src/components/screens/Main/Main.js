import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text as NativeText,
  View
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Title, Text, Input, Label, Form, Item, Button, Icon } from 'native-base'

export default class Main extends Component {

    openSettings = () => {
        this.props.navigator.push({
            screen: 'RequestSettings',
            title: 'Request Settings',
        })
    }

    render(){
        return (
            <Container>
                <Content style = {{ flex: 1, backgroundColor: 'white' }}>

                </Content>
                <View style = {{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Button full style = {{ flex: 1 }}>
                        <Text>
                            Make request manually
                        </Text>
                    </Button>
                    <Button full style = {{ borderLeftWidth: 3, borderColor: 'white' }} onPress = {this.openSettings}>
                        <Icon name = "ios-settings" />
                    </Button>
                </View>
            </Container>
        )
    }
}
