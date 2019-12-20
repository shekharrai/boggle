import React, {Component} from 'react'
import {countDown, stopGame} from "../actions/boggleActions";
import {connect} from "react-redux";

class TitleBar extends Component {

    startNewGame = this.startNewGame.bind(this);


    startNewGame(e) {
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.props.timer == 0) {
                clearInterval(this.myInterval);
                this.props.stopGame();
            } else {
                this.props.countDown();
            }
        }, 1000)
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-danger" style={{width: 160}}>
                            Time: {this.props.timer}
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary" onClick={this.startNewGame}
                                style={{width: 160}}>Start/Restart
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-success" style={{width: 160}}>Score: {this.props.score}</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    score: state.score,
    timer: state.timer
});

const mapDispatchToProps = {countDown, stopGame};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);
