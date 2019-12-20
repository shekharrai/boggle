import React, {Component} from 'react'
import {connect} from "react-redux";
import WordLister from "./WordLister";

class Board extends Component {

    render() {
        let boggleBoard = Object.keys([...Array(this.props.horizontalSize)]).map(h => {
            return (
                <div className="row" key={h}>
                    {
                        Object.keys([...Array(this.props.verticalSize)]).map(v => {
                            return (
                                <div className="col-3" key={h + '' + v}>
                                    <label style={{width: 55}}
                                           className="shadow p-3 mb-3 bg-white rounded">
                                        {this.props.tray['[' + h + ',' + v + ']']}
                                    </label>
                                </div>)
                        })
                    }
                </div>
            )
        });

        return (
            <div>
                <div className="row shadow p-3 mb-3 bg-white rounded">
                    <div className="col-sm">
                        {
                            boggleBoard
                        }
                    </div>
                    <div className="col-sm">
                        <WordLister/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tray: state.tray,
    dictionary: state.dictionary,
    horizontalSize: state.horizontalSize,
    verticalSize: state.verticalSize
});

export default connect(
    mapStateToProps
)(Board);