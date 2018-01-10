export function setFeedUrl(feedUrl){
    return {
        type: 'SET_FEED_URL', feedUrl
    }
}

export function setNumberOfPostsToDisplay(numberOfPostsToDisplay){
    return {
        type: 'SET_NUMBER_OF_POSTS_TO_DISPLAY', numberOfPostsToDisplay
    }
}

export function setUpdateInterval(updateInterval){
    return {
        type: 'SET_UPDATE_INTERVAL', updateInterval
    }
}

export function setSocialPosts(socialPosts){
    return {
        type: 'SET_SOCIAL_POSTS', socialPosts
    }
}

export function setSocialPostsLoadingStatus(socialPostsLoadingStatus){
    return {
        type: 'SET_SOCIAL_POSTS_LOADING_STATUS', socialPostsLoadingStatus
    }
}

export const getSocialPosts = () => async (dispatch, getState) => {
    const { feedUrl, numberOfPostsToDisplay } = getState().globalReducer

    dispatch(setSocialPostsLoadingStatus('loading'))

    try {
        let response = await fetch(feedUrl + '?limit=' + numberOfPostsToDisplay)
        response = await response.json()

        const parsedRecords = response.map(record => {
            return {
                id: record.id,
                postDate: new Date(record.created_at),
                authorName: record.user.name,
                messageBody: record.text,
            }
        })

        dispatch(setSocialPosts(parsedRecords))
        dispatch(setSocialPostsLoadingStatus('valid'))
    } catch (error) {
        dispatch(setSocialPostsLoadingStatus('invalid'))
    }
}
