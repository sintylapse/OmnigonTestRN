import React, { PropTypes } from 'react'
import { FlatList, View } from 'react-native'
import { Container, Content, Card, CardItem, Body, Title, Text, Input, Label, Form, Item, Button, Icon } from 'native-base'

import AnimatedFadeIn from '../../common/AnimatedFadeIn.js'

export default function RecordsList({ data }){
    const renderRecords = ({ item }) =>
        <AnimatedFadeIn>
            <Card key = {item.id}>
                <CardItem header style = {{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <View>
                        <Text>{item.authorName}</Text>
                    </View>
                    <View>
                        <Text>posted: {item.postDate}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {item.messageBody}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </AnimatedFadeIn>

    return <FlatList
        data = {data}
        renderItem = {renderRecords}
        keyExtractor = {item => item.id}
        initialNumToRender = {5}
    />
}
