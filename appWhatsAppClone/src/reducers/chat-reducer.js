import * as types from '../actions/action-types'
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.LIST_CHAT_USER: {
            return {
                ...action.payload
            }
        }
        default: 
            return state;
    }
}