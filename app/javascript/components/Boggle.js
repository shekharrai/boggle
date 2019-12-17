import React, {Component} from 'react'
import {addNewWord, loadNewGame, updateHorizontalSize, updateVerticalSize} from '../actions/boggleActions'

import {connect} from "react-redux";


class Boggle extends Component {
    componentDidMount() {
        this.props.updateHorizontalSize(6);
        this.props.loadNewGame(6, 4);
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

const mapDispatchToProps = {loadNewGame, addNewWord, updateVerticalSize, updateHorizontalSize}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Boggle);