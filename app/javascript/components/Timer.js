import React, {Component} from 'react'
import {connect} from "react-redux";
import {countDown} from "../actions/boggleActions";

class Timer extends Component {
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.props.timer == 0) {
                clearInterval(this.myInterval);
                this.props.stopGame();
            } else {
                this.props.countDown();
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.props.timer}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    timer: state.timer
});

const mapDispatchToProps = {countDown, stopGame};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);
