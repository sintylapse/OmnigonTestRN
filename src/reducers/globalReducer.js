const initialState = {
    feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
    numberOfPostsToDisplay: '5',
    updateInterval: 0, // 0, 5000, 15000, 30000
    socialPosts: [],
    socialPostsLoadingStatus: 'loading', // loading, valid, invalid
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
        case 'SET_SOCIAL_POSTS': return { ...state,
            socialPosts: action.socialPosts
        }
        case 'SET_SOCIAL_POSTS_LOADING_STATUS': return { ...state,
            socialPostsLoadingStatus: action.socialPostsLoadingStatus
        }
        default: return state
    }
}
