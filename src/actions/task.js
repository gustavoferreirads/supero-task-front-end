import {createAction} from 'redux-actions';
import {TASKS} from './index';
import axios from 'axios';

const tasks = () => {
        return axios.get('tasks');
};

export function checkTask(task) {
    return async (dispatch) => {
        axios.put('task', task);
    }
}

export function removeTask (task) {
    return async (dispatch) => {
        const response = await axios.delete(`task/${task.id}`);
        if (response.status === 200) {
            const response = await tasks();
            dispatch({
                type: TASKS,
                payload: {data: response.data}
            });
        }
    };
};

const requestTask = (task) => {
    if (task.id) {
        return axios.put('task', task);
    }

    return axios.post('task', task);
};

export function saveTask (task) {
    return async (dispatch) => {
        const response = await  requestTask(task);
        if (response.status === 200 || response.status === 201) {
            const response = await tasks();
            dispatch({
                type: TASKS,
                payload: {data: response.data}
            });
        }
    };
};


export const getTasks = createAction(TASKS, tasks);