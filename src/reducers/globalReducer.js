const initialState = {
    feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
    numberOfPostsToDisplay: 5,
    updateInterval: false,
}

export default function globalReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_FEED_URL': return { ...state,
            feedUrl: action.feedUrl
        }
        case 'SET_NUMBER_OF_POSTS_TO_DISPLAY': return { ...state,
            numberOfPostsToDisplay: action.numberOfPostsToDisplay
        }
        case 'SET_UPDATE_INTERVAL': return { ...state,
            updateInterval: action.updateInterval
        }
        default: return state
    }
}
