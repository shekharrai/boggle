import React, {Component} from 'react'
import {
    addNewWord,
    loadNewGame,
    updateHorizontalSize,
    updateVerticalSize,
    wordErrorMessage
} from '../actions/boggleActions'

import {connect} from "react-redux";
import TitleBar from "./TitleBar";
import Board from "./Board";

class Boggle extends Component {

    componentDidMount() {
        this.props.updateHorizontalSize(4);
        this.props.loadNewGame(4, 4);
    }

    _handleKeyDown(e) {
        if (e.key === 'Enter') {
            let word = e.target.value;
            if (this.props.dictionary.includes(word)) {
                this.props.wordErrorMessage('');
                if (this.shouldAdd(word)) {
                    this.props.addNewWord(word);
                }
            } else {
                let message = "Invalid Word : " + word;
                this.props.wordErrorMessage(message);
            }
        }
    };

    shouldAdd(word) {
        return !this.props.words.includes(word)
            && this.props.dictionary.includes(word)
            && word.length > 1;
    }

    render() {
        return (
            <div style={{width: 750}}
                 className="container shadow p-3 mb-3 rounded"
                 align="center">
                <div className="card-header">
                    <div>
                        <label style={{fontSize: 23}}>Boggle</label>
                    </div>
                </div>
                <div className="btn card text-center">
                    <div className="card-header">
                        <TitleBar/>
                    </div>
                    <div className="card-body">
                        <Board/>
                    </div>
                    <div className="card-footer">
                        <input
                            type="text"
                            placeholder="Enter Word"
                            onKeyDown={this._handleKeyDown.bind(this)}
                            disabled={this.props.timer === 0}
                        />
                        <div>
                            <label className="badge badge-danger m-3"
                                   style={{fontSize: 15}}>{this.props.message}</label>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    tray: state.tray,
    dictionary: state.dictionary,
    timer: state.timer,
    message: state.message,
    score: state.score,
    words: state.words
});

const mapDispatchToProps = {
    loadNewGame,
    addNewWord,
    updateVerticalSize,
    updateHorizontalSize,
    wordErrorMessage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Boggle);