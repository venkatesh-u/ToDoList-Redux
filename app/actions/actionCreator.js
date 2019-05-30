import  {ACTION_TYPE_ADD_TASK, ACTION_TYPE_DELETE_TASK, ACTION_TYPE_DELETE_ALL_TASKS, ACTION_TYPE_UPDATE_TASK} from './actionTypes';

export const addPlace = obj =>{
    return{
        type: ACTION_TYPE_ADD_TASK,
        payload: obj
    }
};

export const deletePlace = obj =>{
    return{
        type: ACTION_TYPE_DELETE_TASK,
        payload: obj
    }
};

export const deleteAllPlaces = () =>{
    return{
        type: ACTION_TYPE_DELETE_ALL_TASKS,
    }
};

export const updatePlace = (obj) =>{
    return{
        type: ACTION_TYPE_UPDATE_TASK,
        payload: obj
    }
};