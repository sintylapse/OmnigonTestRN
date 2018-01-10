import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from './Main'

import * as globalActions from '../../../actions/globalActions.js'

class MainContainer extends React.Component {

    render() {
        return (
            <Main {...this.props} />
        )
    }

}

const mapStateToProps = state => ({
    exampleValue: state.globalReducer.exampleValue,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(globalActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
