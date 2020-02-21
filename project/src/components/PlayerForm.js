import React from 'react'
import { connect } from "react-redux";

const PlayerForm = (props) => {

    return (
        <div>
            <h1>Hello From the PlayerForm!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(PlayerForm);