import {ADD_NEW_WORD, NEW_GAME} from "./types";


const gameTray = (payload) => (
    {
        type: NEW_GAME,
        payload
    }
)
const newWOrd = (word) => (
    {
        type: ADD_NEW_WORD,
        word
    }
)

export function loadNewGame(horizontal, vertical) {
    return dispatch => {
        fetch('/api/v1/boggle?horizontal=' + horizontal + "&&vertical=" + vertical)
            .then(response => response.json())
            .then(data => {
                dispatch(gameTray(data))
            })
    }
}

export function addNewWord(word) {
    return dispatch => {
        dispatch(newWOrd(word))
    }
}