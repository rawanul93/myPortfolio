import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap';
import Resume from '../resume/resume';
//context
import { ModalContext } from '../../contexts/modalContext';

const ResumeModal = () => {

    const { show, setShow } = useContext(ModalContext);

    const handleClose = () => {
        setShow(false);
      }
      
    return (
            <Modal show={show} onHide={handleClose}  size="lg" >
              <Modal.Body style={{backgroundColor:'#0a0a0a'}}>
                <Resume/>
              </Modal.Body>
            </Modal>
        
    )
}

export default ResumeModal;
