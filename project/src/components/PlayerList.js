import React from 'react'
import PlayerCard from './PlayerCard'
import { connect } from 'react-redux'

const PlayerList = (props) => {

    return (
        <div>
            <h1>Hello From the Playerlist!</h1>
            <PlayerCard />
        </div>
    )
}

mapStateToProps = (state) => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(PlayerList);