import { combineReducers } from 'redux'
import tickers from './tickers'

const appReducer = combineReducers({
    tickers
})

export default appReducer