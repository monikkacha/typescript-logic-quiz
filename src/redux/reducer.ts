import { NEXT_QUESTION, INCREASE_POINT } from './redux_constatns'
type ActionType = {
    type: String,
}

export type StateType = {
    count: number
    rightAnswer: number
}

const initialState = {
    count: 0,
    rightAnswer: 0
}

export default (state = initialState, action: ActionType) => {
    switch (action.type) {
        case NEXT_QUESTION:
            if (state.count === 4) {
                return { ...state, initialState }
            } else {
                return { ...state, count: state.count + 1 }
            }
        case INCREASE_POINT:
            return { ...state, rightAnswer: state.rightAnswer + 1 }
        default:
            return state
    }
}