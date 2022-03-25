import { Table } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
function Tabla() {
  const [show, setShow] = useState(false);

  const handleCloseEditar = () => setShow(false);
  const handleShowEditar = () => setShow(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showInsertar, setShowInsertar] = useState(false);

  const handleCloseInsertar = () => setShowInsertar(false);
  const handleShowInsertar = () => setShowInsertar(true);

  const dataPaises = [
    { id: 1, nombr: "Filipinas", minutos: 241 },
    { id: 2, nombr: "Brasil", minutos: 241 },
    { id: 3, nombr: "RD", minutos: 241 },
    { id: 4, nombr: "Colombia", minutos: 241 },
    { id: 5, nombr: "Nigeria", minutos: 241 },
    { id: 6, nombr: "EEUU", minutos: 241 },
    { id: 7, nombr: "Espana", minutos: 241 },
    { id: 8, nombr: "Nueva Zelanda", minutos: 241 },
    { id: 9, nombr: "Mexico", minutos: 241 },
    { id: 10, nombr: "Egipto", minutos: 241 },
  ];
  const [data, setData] = useState(dataPaises);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    nombr: "",
    minutos: "",
  });

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    caso === "Editar" ? handleShowEditar() : handleShowDelete();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(paisSeleccionado);
  };

  const Actualizar = () => {
    var dataNueva = data;
    dataNueva.map((pais) => {
      if (pais.id === paisSeleccionado.id) {
        pais.minutos = paisSeleccionado.minutos;
        pais.nombr = paisSeleccionado.nombr;
      }
    });
    setData(dataNueva);
    handleCloseEditar();
  };

  const Eliminar = () => {
    setData(data.filter((pais) => pais.id !== paisSeleccionado.id));
    handleCloseDelete();
  };

  const AbrirModalInsertar = () => {
    setPaisSeleccionado(null);
    handleShowInsertar();
  };

  const insertar = () => {
    var valorinsertar = paisSeleccionado;
    valorinsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorinsertar);
    setData(dataNueva);
    handleCloseInsertar();
  };

  return (
    <>
      {"    "}{" "}
      <Button variant="primary" onClick={AbrirModalInsertar}>
        Insertar un Nuevo Pais
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pais</th>
            <th>Minutos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nombr}</td>
              <td>{item.minutos}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarPais(item, "Editar")}
                >
                  Editar
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => seleccionarPais(item)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

       {/*  Modal de Editar */}
      <Modal show={show} onHide={handleCloseEditar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <labe>ID</labe>
            <input
              className="form-control"
              type="text"
              readOnly
              name="id"
              value={paisSeleccionado && paisSeleccionado.id}
            />
            <br />
            <labe>Pais</labe>
            <input
              className="form-control"
              type="text"
              name="nombr"
              onChange={handleChange}
              value={paisSeleccionado && paisSeleccionado.nombr}
            />
            <br />
            <labe>Minutos</labe>
            <input
              className="form-control"
              type="text"
              name="minutos"
              onChange={handleChange}
              value={paisSeleccionado && paisSeleccionado.minutos}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => Actualizar()}>
            Actualizar
          </Button>
          <Button variant="danger" onClick={handleCloseEditar}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

       {/*  Modal de Eliminar */}
       
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Realmente deseas eliminar {paisSeleccionado && paisSeleccionado.nombr}
          ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseDelete}>
            No
          </Button>
          <Button variant="danger" onClick={() => Eliminar()}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>

     {/*  Modal de Insertar */}
      <Modal show={showInsertar} onHide={handleCloseInsertar}>
        <Modal.Header closeButton>
          <Modal.Title>Insertar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <labe>ID</labe>
            <input
              className="form-control"
              type="text"
              readOnly
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />
            <labe>Pais</labe>
            <input
              className="form-control"
              type="text"
              name="nombr"
              onChange={handleChange}
              value={paisSeleccionado ? paisSeleccionado.nombr : ""}
            />
            <br />
            <labe>Minutos</labe>
            <input
              className="form-control"
              type="text"
              name="minutos"
              onChange={handleChange}
              value={paisSeleccionado ? paisSeleccionado.minutos : ""}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseInsertar}>
            Cerrar
          </Button>
          <Button variant="success" onClick={insertar}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Tabla;
