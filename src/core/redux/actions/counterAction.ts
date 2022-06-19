import { COUNT_UP, RESET_COUNTER } from '../actionTypes';
import { PayloadAction } from '@reduxjs/toolkit';

export const countUp = (date: Date): PayloadAction<CounterPayload> => {
    return {
        type: COUNT_UP,
        payload: {
            date
        }
    }
}

export const resetCounter = (): PayloadAction<CounterPayload> => {
    return {
        type: RESET_COUNTER,
        payload: {}
    }
}

export type CounterPayload = {
    date?: Date
};

