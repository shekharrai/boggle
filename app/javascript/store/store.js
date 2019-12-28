import {
    ADD_NEW_WORD,
    COUNT_DOWN,
    NEW_GAME,
    UPDATE_HORIZONTAL_SIZE,
    UPDATE_MESSAGE,
    UPDATE_VERTICAL_SIZE
} from "../actions/types";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
    tray: [],
    horizontalSize: 4,
    verticalSize: 4,
    words: [],
    score: 0,
    message: '',
    timer: 60
}

function pushable(validWords, word, updatePlayerWords) {
    return validWords.includes(word)
        && !updatePlayerWords.includes(word);
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_GAME:
            return {
                ...state,
                tray: action.payload.tray,
                words: [],
                score: 0,
                timer: 60,
                message: ''
            };
        case ADD_NEW_WORD:
            let newWords = state.words.slice();
            newWords.splice(newWords.length, 0, action.word);
            return {
                ...state,
                words: newWords,
                score: state.score + action.word.length
            };
        case COUNT_DOWN:
            return {
                ...state,
                timer: state.timer - 1
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                message: action.message
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