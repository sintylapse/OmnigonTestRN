import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RequestSettings from './RequestSettings'

import * as globalActions from '../../../actions/globalActions.js'

class RequestSettingsContainer extends React.Component {

    render() {
        return (
            <RequestSettings {...this.props} />
        )
    }

}

const mapStateToProps = state => ({
    feedUrl: state.globalReducer.feedUrl,
    numberOfPostsToDisplay: state.globalReducer.numberOfPostsToDisplay,
    updateInterval: state.globalReducer.updateInterval,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(globalActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestSettingsContainer)
