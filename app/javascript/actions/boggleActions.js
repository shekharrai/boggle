import {
    ADD_NEW_WORD,
    COUNT_DOWN,
    NEW_GAME,
    UPDATE_HORIZONTAL_SIZE,
    UPDATE_MESSAGE,
    UPDATE_VERTICAL_SIZE
} from "./types";


const gameTray = (payload) => ({type: NEW_GAME, payload});
const addWord = (word) => ({type: ADD_NEW_WORD, word});
const horizontalSize = (size) => ({type: UPDATE_HORIZONTAL_SIZE, size});
const setMessage = (message) => ({type: UPDATE_MESSAGE, message: message});
const verticalSize = (size) => ({type: UPDATE_VERTICAL_SIZE, size});
const timer = () => ({type: COUNT_DOWN});


export function loadNewGame(horizontal, vertical) {
    return dispatch => {
        fetch('/api/v1/boggle?horizontal=' + horizontal + "&&vertical=" + vertical)
            .then(response => response.json())
            .then(data => {
                dispatch(gameTray(data))
            })
    }
};

export function addNewWord(word) {
    return dispatch => {
        fetch('/api/v1/boggle/check?word=' + word)
            .then(response => response.json())
            .then(data => {
                if (data.valid) {
                    dispatch(addWord(word))
                    dispatch(setMessage(""))
                }else{
                    dispatch(setMessage("Invalid word: " + word))
                }
            })
    }
};

export function updateVerticalSize(size) {
    return dispatch => {
        dispatch(verticalSize(size))
    }
};

export function updateHorizontalSize(size) {
    return dispatch => {
        dispatch(horizontalSize(size))
    }
};

export function updateMessage(message) {
    return dispatch => {
        dispatch(setMessage(message))
    }
};

export function countDown() {
    return dispatch => {
        dispatch(timer())
    }
};