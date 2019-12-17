import React, {Component} from 'react'
import {addNewWord, loadNewGame, updateHorizontalSize, updateVerticalSize} from '../actions/boggleActions'

import {connect} from "react-redux";
import TitleBar from "./TitleBar";
import Timer from "./Timer";
import Board from "./Board";
import WordLister from "./WordLister";

class Boggle extends Component {
    componentDidMount() {
        this.props.updateHorizontalSize(6);
        this.props.loadNewGame(6, 4);
        console.log(this.props)
    }

    render() {
        return (

            <div className="container" align="center">
                <div>
                    <TitleBar/>
                </div>
                <div>
                    <Timer/>
                </div>
                <div>
                    <Board/>
                </div>
                <div>
                    <WordLister/>
                </div>
                <div>
                    <input type="text" placeholder="Word"></input>
                </div>
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