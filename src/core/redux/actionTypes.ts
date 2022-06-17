import { CounterState } from './reducers/counterReducer';

export const COUNT_UP = 'COUNT_UP';
export const RESET_COUNTER = 'RESET_COUNTER';

export type RootAppState = {
    counter: CounterState
}
