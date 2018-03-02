import {handleAction} from 'redux-actions'
import { TASK } from './../actions';
import _ from 'lodash';

const initialState = {
};

const reducer = (state = initialState, action) => {
    const payload = action.payload;
    const task = payload.data;
    const tasks = _.cloneDeep(state.tasks);
    const taskComplete = tasks.find(current => current.id === task.id);
    taskComplete.isComplete = task.isComplete;
    return ({
        ...state,
        tasks,
    })
};

export default handleAction(TASK, reducer, initialState)
