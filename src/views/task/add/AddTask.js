import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as taskActions from '../../../actions/task';
import './AddTask.css';
import moment from 'moment';

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

class AddTask extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
            task: {}
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = ()=> {
        this.setState({ show: true, task: {}});
    };

    componentWillReceiveProps({showModal, task}){
        this.setState({ show: showModal, task });
    };

    handleChange = (event) =>{
        const task = this.state.task;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        task[name] = value;
        this.setState({ task });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveTask(this.state.task);
        this.handleClose();
        this.setState({task: {}})
        this.props.showLoading();
    };


    formatDateCreateAt (){
       return moment(new Date(this.state.task.createAt)).format('DD/MM/YYYY HH:mm')
    }
    render(){
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form onSubmit={this.handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>Nova Tarefa</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>


                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label={'Título'}
                                placeholder="Digite o título de sua tarefa..."
                                required="true"
                                value={this.state.task.title}
                                name={'title'}
                                onChange={this.handleChange}
                            />

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>{'Descrição'}</ControlLabel>
                                <FormControl componentClass="textarea"
                                             placeholder="Descreva informações relevantes sobre sua tarefa..."
                                             value={this.state.task.description}
                                             name="description"
                                             onChange={this.handleChange}
                                             required="true" />
                            </FormGroup>

                        {this.state.task.createAt &&
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label={'Data de criação'}
                                disabled="true"
                                value={this.formatDateCreateAt()}
                                name={'createAt'}
                            />
                        }
                    </Modal.Body>

                    <Modal.Footer>
                        <Button  bsClass="btn close-task" onClick={this.handleClose}>Fechar</Button>
                        <Button bsClass="btn add-task" type="submit" bsStyle="primary">Adicionar</Button>
                    </Modal.Footer>
                    </form>
                </Modal>
                <Button bsClass="btn add-task mar-md" onClick={this.handleShow}> Adicionar tarefa</Button>
            </div>
        )
    }
}

export default connect(() => ({
}), dispatch => bindActionCreators(taskActions, dispatch))(AddTask);


