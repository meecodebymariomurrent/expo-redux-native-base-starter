import { COUNT_UP, RESET_COUNTER } from '../actionTypes';

let initialState: CounterState = {
    count: 0,
    lastModified: new Date()
}

export const counterReducer = (state: CounterState = initialState, action: any) => {
    switch (action.type) {
        case COUNT_UP: {
            const {date} = action.payload;
            const {count} = state;
            return {
                date,
                count: count + 1

            }
        }
        case RESET_COUNTER: {
            return {date: new Date(), count: 0}
        }
        default:
            return state;
    }
}

export type CounterState = {
    count: number;
    lastModified: Date;
}
