import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from './Main'

import * as globalActions from '../../../actions/globalActions.js'

class MainContainer extends React.Component {

    componentDidMount(){
        this.props.actions.getSocialPosts()

        this.props.actions.initializeRequestsWithIntervals()
    }

    render() {
        return (
            <Main {...this.props} />
        )
    }

}

const mapStateToProps = state => ({
    socialPosts: state.globalReducer.socialPosts,
    socialPostsLoadingStatus: state.globalReducer.socialPostsLoadingStatus,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(globalActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
