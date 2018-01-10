import React from 'react'
import { Animated } from 'react-native'

export default class AnimatedFadeIn extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0),
        translateX: new Animated.Value(40),
    }

    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start()

        Animated.timing(
            this.state.translateX,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start()
    }

    render(){
        return (
            <Animated.View
                style = {{
                    opacity: this.state.fadeAnim,
                    transform: [
                        { translateX: this.state.translateX },
                    ],
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }

}
