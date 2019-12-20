import React, {Component} from 'react'
import {connect} from "react-redux";

class WordLister extends Component {

    render() {
        return (
            <div>
                <div>
                    <label style={{fontSize: 19}} className={"badge badge-info"}>Words</label>
                </div>
                <div className={"overflow-auto"}>
                    {
                        this.props.words.map(word =>
                            <div style={{fontSize: 17}} key={word}>
                                <label className={"badge badge-success"}>
                                    {word}
                                </label>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    words: state.words,
    dictionary: state.dictionary
});

export default connect(
    mapStateToProps
)(WordLister);
