import {
    ADD_ERROR_MESSAGE,
    ADD_NEW_WORD,
    COUNT_DOWN,
    NEW_GAME,
    STOP_GAME,
    UPDATE_HORIZONTAL_SIZE,
    UPDATE_VERTICAL_SIZE
} from "../actions/types";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
    tray: [],
    horizontalSize: 4,
    verticalSize: 4,
    words: [''],
    dictionary: [],
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
                dictionary: action.payload.words
            };
        case ADD_NEW_WORD:
            let updatedWords = state.words;
            let updateScore = state.score;
            let word = action.word;
            if (pushable(state.dictionary, word, updatedWords)) {
                updatedWords.push(word);
                updateScore = updateScore + word.length;
            }
            return {
                ...state,
                words: updatedWords,
                score: updateScore
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
        case COUNT_DOWN:
            return {
                ...state,
                timer: state.timer - 1
            };
        case ADD_ERROR_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case STOP_GAME:
            return {
                ...state,
                timer: 0
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