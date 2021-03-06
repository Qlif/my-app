// import * as types from './types';
import {SET_TODO_LIST_DATA} from "./types";

const initialState = {
    list:[]
};

export function todosReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_TODO_LIST_DATA:{
            return{
                ...state,
                list: payload
            }
        }
        default:{
            return state;
        }

    }
}
