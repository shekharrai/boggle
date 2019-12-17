import React, {Component} from 'react'
import {addNewWord, loadNewGame} from '../actions/boggleActions'

import {connect} from "react-redux";


class Boggle extends Component {
    componentDidMount() {
        this.props.loadNewGame(4, 4);
    }

    render() {
        return (

            <div className="container">
                <p>working</p>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    board: state.board,
    words: state.words,
    playerWords: state.playerWords
});

const mapDispatchToProps = {loadNewGame, addNewWord}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Boggle);