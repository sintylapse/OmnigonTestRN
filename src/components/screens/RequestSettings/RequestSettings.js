import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text as NativeText,
  View
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Title, Text, Input, Label, Form, Item, Button } from 'native-base'

export default function Main({ feedUrl, numberOfPostsToDisplay, updateInterval, actions }){

    const _onChangeFeedUrl = text => actions.setFeedUrl(text)
    const _onChangeNumberOfPostsToDisplay = text => actions.setNumberOfPostsToDisplay(text)
    const _onChangeUpdateInterval = text => actions.setUpdateInterval(text)

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
                    <Item stackedLabel>
                        <Label>Update interval</Label>
                        <Input
                            value = {updateInterval}
                            onChangeText = {_onChangeUpdateInterval}
                        />
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}
