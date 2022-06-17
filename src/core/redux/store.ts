import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './reducers/counterReducer'


const reducer = {
    counter: counterReducer
}

export const configure = () => {
    return configureStore({reducer});
}
