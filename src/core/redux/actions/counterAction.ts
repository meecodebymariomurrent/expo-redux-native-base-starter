import { COUNT_UP, RESET_COUNTER } from '../actionTypes';

export const countUp = (date: Date) => {
    return {
        type: COUNT_UP,
        payload: {
            date
        }
    }
}

export const resetCounter = () => {
    return {
        type: RESET_COUNTER,
        payload: {}
    }
}
