import React, {Component} from 'react'
import {connect} from "react-redux";

class Board extends Component {
    componentDidMount() {
    }
    render() {

        return (
            <div className="container">
                <p>Hello</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    board: state.tray,
    horizontalSize: state.horizontalSize,
    verticalSize: state.verticalSize
});

export default connect(
    mapStateToProps
)(Board);