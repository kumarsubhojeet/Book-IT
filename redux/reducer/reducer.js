import {combineReducers} from 'redux'
import {allRoomsReducers} from '../reducer/roomReducers'

const reducer = combineReducers({
    allRooms: allRoomsReducers
})

export default reducer;