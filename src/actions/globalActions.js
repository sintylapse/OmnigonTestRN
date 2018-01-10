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

export const getSocialPosts = () => async (dispatch, getState) => {
    const { feedUrl } = getState().globalReducer

    try {
        console.tron('1')
        const resp = await fetch(feedUrl)
        const response = await resp.json()

        // Each post record should display:
        // •	Post Date (formatted as DD/MM/YYYY HH:MM) in user’s timezone
        // •	Author Name
        // •	Message body

        // The mobile app should accept the following configuration:
        // •	Feed URL
        // •	Number of posts to display
        // •	Update interval



        console.tron('2')

        console.tron('resp')
        console.tron(resp)

        console.tron('response')
        console.tron(response[0])

    } catch (error) {
        console.error('Custom error:', error)
    }
}
