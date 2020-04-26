import {decks} from './decks'
import {loading} from './loading'
import { combineReducers } from 'redux'


export default combineReducers({
    decks,
    loading
})