import React, {Component} from 'react'
import {countDown, loadNewGame, updateMessage} from "../actions/boggleActions";
import {connect} from "react-redux";

class TitleBar extends Component {

    startNewGame = this.startNewGame.bind(this);

    startNewGame() {
        this.props.loadNewGame(this.props.horizontalSize, this.props.verticalSize);

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
    };

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
                        <button className="btn btn-primary" onClick={this.startNewGame}
                                style={{width: 160}}>Start/Restart
                        </button>
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

const mapDispatchToProps = {countDown, loadNewGame, updateMessage};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);
