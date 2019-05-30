import {ACTION_TYPE_ADD_TASK, ACTION_TYPE_DELETE_TASK, ACTION_TYPE_DELETE_ALL_TASKS, ACTION_TYPE_UPDATE_TASK} from '../actions/actionTypes';

const initialState = {
    places: []
}

export const reducer_add_task = (state = initialState, action) => {
    switch (action.type) {

        case ACTION_TYPE_ADD_TASK:
            return {
                ...state, places: state.places.concat({key:Math.random() , value:action.payload.value})
            };

        case ACTION_TYPE_DELETE_TASK:
            const {places} = state
            const restItems = places.filter((item, index )=>{
                return index !== action.payload.index
            });
            return {
                ...state, places: restItems
            };

        case ACTION_TYPE_DELETE_ALL_TASKS:
            return {
                ...state, places:[]
            }

        case ACTION_TYPE_UPDATE_TASK:
            const {index, value} = action.payload;
            const newState = {...state};

            const array = newState.places.map((a, i) => {
              var returnValue = {...a};
              if (i === index) {
                returnValue.value = value;
              }
              return returnValue
            })

            return {...state, places:array};
        default:
            return state;

    }
}