import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './reducers/counterReducer'

const store = configureStore({reducer});


const reducer = {
    counter: counterReducer
}

export const configure = () => {
    return store;
}

export type RootState = ReturnType<typeof store.getState>

