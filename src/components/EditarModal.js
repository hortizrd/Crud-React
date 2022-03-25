import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
function EditarModal() {
  const [show, setShow] = useState(false);

  const handleCloseEditar = () => setShow(false);
  const handleShowEditar = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleCloseEditar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <labe>Pais</labe>
            <input className="form-control" type="text" name="pais" />
            <br />
            <labe>Minutos</labe>
            <input className="form-control" type="text" name="minutos" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseEditar}>
            Actualizar
          </Button>
          <Button variant="danger" onClick={handleCloseEditar}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditarModal;
