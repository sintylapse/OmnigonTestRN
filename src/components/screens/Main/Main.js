import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text as NativeText,
  View,
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Title, Text, Input, Label, Form, Item, Button, Icon } from 'native-base'

import RecordsList from './RecordsList.js'

export default class Main extends Component {

    openSettings = () => {
        this.props.navigator.push({
            screen: 'RequestSettings',
            title: 'Request Settings',
        })
    }

    makeRequestManually = () => {
        this.props.actions.getSocialPosts()
    }

    renderAccordingToLoadingStatus = () => {
        switch (this.props.socialPostsLoadingStatus) {
            case 'invalid': return <View style = {{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Can't load data
                </Text>
            </View>
            default: return <RecordsList data = {this.props.socialPosts} />

        }
    }

    render(){
        const isLoading = this.props.socialPostsLoadingStatus === 'loading'

        return (
            <Container>
                {this.renderAccordingToLoadingStatus()}
                <View style = {{
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Button full style = {{ borderRightWidth: 3, borderColor: 'white' }} onPress = {this.openSettings}>
                        <Icon name = "ios-settings" />
                    </Button>
                    <Button full style = {{ flex: 1 }} onPress = {isLoading ? null : this.makeRequestManually}>
                        {
                            isLoading ?
                                <Text>Loading...</Text> :
                                <Text>
                                    Make request manually
                                </Text>
                        }
                    </Button>
                </View>
            </Container>
        )
    }
}
