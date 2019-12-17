import {ADD_NEW_WORD, NEW_GAME} from "../actions/types";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
    tray: [],
    horizontalSize: 4,
    verticalSize: 4,
    words: [],
    playerWords: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_GAME:
            return {
                ...state,
                tray: action.payload.tray,
                words: action.payload.words
            };
        case ADD_NEW_WORD:
            return {
                ...state,
                playerWords: state.playerWords.push(action.word)
            };
        default:
            return state;
    }

}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store