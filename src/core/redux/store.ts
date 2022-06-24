import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './reducers/counterReducer'

const reducer = {
    counter: counterReducer
}

const store = configureStore({reducer});

export const configure = () => {
    return store;
}

export type RootState = ReturnType<typeof store.getState>

