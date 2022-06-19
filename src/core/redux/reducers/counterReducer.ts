import { COUNT_UP, RESET_COUNTER } from '../actionTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { CounterPayload } from '../actions/counterAction';

let initialState: CounterState = {
    count: 0,
    lastModified: new Date()
}

export const counterReducer = (state: CounterState = initialState, action: PayloadAction<CounterPayload>): CounterState => {
    switch (action.type) {
        case COUNT_UP: {
            const {date} = action.payload;
            const {count} = state;
            return {
                ...state,
                lastModified: date,
                count: count + 1

            }
        }
        case RESET_COUNTER: {
            return {...state, lastModified: new Date(), count: 0}
        }
        default:
            return state;
    }
}

export type CounterState = {
    count: number;
    lastModified?: Date;
}
