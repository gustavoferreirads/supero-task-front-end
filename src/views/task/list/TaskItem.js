import {Glyphicon} from 'react-bootstrap';
import * as React from "react";
import moment from 'moment';

export default function TaskItem({task, completeTask, onClick, removeTask}) {
    const formatDateCreateAt = (task) =>{
        return moment(new Date(task.completeAt)).format('DD/MM/YYYY HH:mm')
    };

    return (
        <div className="item">
            <Glyphicon glyph="th" className="icon-move"/>
            <label className="container-check">
                <input type="checkbox" checked={task.isComplete} onClick={() => completeTask(task)}/>
                    <span className="checkmark"/>
            </label>
            <span className={task.isComplete? 'title complete' : 'title'} onClick={() => onClick(task)} >{task.title}
                {task.isComplete && <span className="completeAt">
                    {formatDateCreateAt(task)}
                </span>}
            </span>
            <Glyphicon glyph="trash" className="trash" onClick={() => removeTask(task)}/>
        </div>
    )
}