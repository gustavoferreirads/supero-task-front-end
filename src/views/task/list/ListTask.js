import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TaskItem from './TaskItem';
import ConfirmRemove from './ConfirmRemove';
import AddTask from '../add/AddTask';

import { RingLoader } from 'react-spinners';
import * as taskActions from '../../../actions/task';
import './ListTask.css';

class ListTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            submit: false,
            loading: true,
            tasks: []
        };
    }

    componentWillReceiveProps({tasks}) {
        if(this.state.submit){
        }
        this.setState({tasks, loading: false, submit: false})

    }

    componentWillMount() {
        this.props.getTasks();
    }

    removeTask = (task) => {
        this.setState({task, show: true});
    };

    confirmRemove = () =>{
        this.closeDialog();
        this.props.removeTask(this.state.task);
        this.showLoading();

    };

    showLoading = () =>{
        this.setState({loading: true, submit: true});
    };

    closeDialog = () => {
        this.setState({showModal: false, show: false});
    };

    onClick = (task) =>{
        this.setState({task, showModal: true})
    };

    completeTask = (task) => {
        task.isComplete = !task.isComplete;
        task.completeAt = new Date().getTime();
        this.setState({task: this.state.tasks});
        this.props.checkTask(task);
    };

    renderItems = () => {
        return this.state.tasks ? this.state.tasks
            .map((task, i) => {
                return (
                    <TaskItem
                        class="item"
                        key={i}
                        task={task}
                        onClick={this.onClick}
                        completeTask={this.completeTask}
                        removeTask={this.removeTask}
                    />
                );
            }) : null;
    };

    render() {
        return (
            <div>
                <div className="content">
                    {this.renderItems()}
                    <p className={this.state.tasks.length > 0 ? 'hide': '' }>{'Você não tem tarefas pendentes...'}</p>
                    <ConfirmRemove show={this.state.show} closeDialog={this.closeDialog} confirmRemove={this.confirmRemove}/>
                </div>
                <AddTask task={this.state.task} showLoading={this.showLoading} showModal={this.state.showModal} closeDialog={this.closeDialog} />
                <div className={this.state.loading ? 'sweet-loading' : ''}>
                    <RingLoader
                        color={'#d31912'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default connect(({Task}) => ({
    tasks: Task.tasks,
}), dispatch => bindActionCreators(taskActions, dispatch))(ListTask);


