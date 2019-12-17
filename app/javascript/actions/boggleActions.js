import {ADD_NEW_WORD, NEW_GAME, UPDATE_HORIZONTAL_SIZE, UPDATE_VERTICAL_SIZE} from "./types";


const gameTray = (payload) => ({type: NEW_GAME, payload});
const newWOrd = (word) => ({type: ADD_NEW_WORD, word});
const horizontalSize = (size) => ({type: UPDATE_HORIZONTAL_SIZE, size});
const verticalSize = (size) => ({type: UPDATE_VERTICAL_SIZE, size});


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
        dispatch(newWOrd(word))
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