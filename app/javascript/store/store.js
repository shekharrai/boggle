import {ADD_NEW_WORD, NEW_GAME, UPDATE_HORIZONTAL_SIZE, UPDATE_VERTICAL_SIZE} from "../actions/types";
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
    console.log(action);
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
        case UPDATE_HORIZONTAL_SIZE:
            return {
                ...state,
                horizontalSize: action.size
            };
        case UPDATE_VERTICAL_SIZE:
            return {
                ...state,
                verticalSize: action.size
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