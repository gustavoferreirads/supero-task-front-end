import { Button, Modal } from 'react-bootstrap';
import * as React from "react";

export default function ({show = false, confirmRemove, closeDialog}) {
    return(
        <Modal
            show={show}
            bsSize="small"
            onHide={closeDialog}
            aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-sm">Remover</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{'Tem certeza que deseja remover a tarefa?'}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button  bsClass="btn close-task" onClick={closeDialog}>Não</Button>
                <Button bsClass="btn add-task" onClick={confirmRemove} bsStyle="primary">Sim</Button>
            </Modal.Footer>
        </Modal>
    )
}