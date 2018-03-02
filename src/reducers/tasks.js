import {handleAction} from "redux-actions"
import {TASKS} from "./../actions";

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    const payload = action.payload;
        return ({
            ...state,
            tasks:  payload && payload.data ? payload.data : [],
        })
};

export default handleAction(TASKS, reducer, initialState)
