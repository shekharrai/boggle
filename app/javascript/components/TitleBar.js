import React, {Component} from 'react'
import {
    countDown,
    loadNewGame,
    updateHorizontalSize,
    updateMessage,
    updateVerticalSize
} from "../actions/boggleActions";
import {connect} from "react-redux";

class TitleBar extends Component {

    startNewGame() {
        this.newGame(this.props.horizontalSize, this.props.verticalSize);
    };

    newGame(horizontal, vertical) {
        this.props.loadNewGame(horizontal, vertical);

        //to avoid multiple clicks on restart
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            if (this.props.timer === 0) {
                let timesUpMessage = "Time's up!";
                if (this.props.message !== timesUpMessage) {
                    clearInterval(this.interval);
                    this.props.updateMessage(timesUpMessage);
                }
            } else {
                this.props.countDown();
            }
        }, 1000)
    }

    handleBoggleSize(event) {
        let size = event.target.value;
        switch (size) {
            case "4*4":
                this.props.updateHorizontalSize(4);
                this.props.updateVerticalSize(4);
                this.newGame(4, 4);
                break;
            case "5*5":
                this.props.updateHorizontalSize(5);
                this.props.updateVerticalSize(5);
                this.newGame(5, 5);
                break;
            case "6*6":
                this.props.updateHorizontalSize(6);
                this.props.updateVerticalSize(6);
                this.newGame(6, 6);
                break;
        }
    }

    componentDidMount() {
        this.startNewGame();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button
                            className="btn btn-danger"
                            disabled={true}
                            style={{width: 160}}>
                            Time: {this.props.timer}
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary" onClick={this.startNewGame.bind(this)}
                                style={{width: 160}}>Start/Restart
                        </button>
                    </div>
                    <div className="col-sm">
                        <select
                            className="btn btn-secondary dropdown-toggle"
                            style={{width: 160, height: 40}}
                            onChange={this.handleBoggleSize.bind(this)}
                        >
                            <option value="4*4">4 * 4</option>
                            <option value="5*5">5 * 5</option>
                            <option value="6*6">6 * 6</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <button
                            className="btn btn-success"
                            disabled={true}
                            style={{width: 160}}
                        >Score: {this.props.score}</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    score: state.score,
    message: state.message,
    horizontalSize: state.horizontalSize,
    verticalSize: state.verticalSize,
    timer: state.timer
});

const mapDispatchToProps = {countDown, loadNewGame, updateMessage, updateVerticalSize, updateHorizontalSize};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);
