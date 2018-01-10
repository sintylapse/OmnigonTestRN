import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text as NativeText,
  View
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Title, Text, Input, Label, Form, Item, Button, Picker } from 'native-base'

export default function Main({ feedUrl, numberOfPostsToDisplay, updateInterval, actions }){

    const _onChangeFeedUrl = text => actions.setFeedUrl(text)
    const _onChangeNumberOfPostsToDisplay = text => actions.setNumberOfPostsToDisplay(text)

    const _onChangeUpdateInterval = value => {
        actions.setUpdateInterval(value)
        actions.initializeRequestsWithIntervals()
    }


    return (
        <Container>
            <Content style = {{ flex: 1, backgroundColor: 'white' }}>
                <Form>
                    <Item stackedLabel>
                        <Label>Feed URL</Label>
                        <Input
                            value = {feedUrl}
                            onChangeText = {_onChangeFeedUrl}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Number of posts to display</Label>
                        <Input
                            keyboardType = "numeric"
                            value = {numberOfPostsToDisplay}
                            onChangeText = {_onChangeNumberOfPostsToDisplay}
                        />
                    </Item>
                    <Item>
                        <View style = {{ flex: 1 }}>
                            <Label style = {{ marginTop: 5, fontSize: 16 }} note>Update interval</Label>
                            <Picker
                                mode = "dropdown"
                                placeholder = "Update interval"
                                selectedValue = {updateInterval}
                                onValueChange = {_onChangeUpdateInterval}
                                style = {{ marginRight: 10 }}
                            >
                                <Item label = "Newer" value={0} />
                                <Item label = "Once in 5 seconds" value={5000} />
                                <Item label = "Once in 15 seconds" value={15000}/>
                                <Item label = "Once in 30 seconds" value={30000} />
                            </Picker>
                        </View>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}
