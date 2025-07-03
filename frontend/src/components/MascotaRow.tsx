import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import type { Mascota } from '../models/mascota';


type MascotaRowProps = {
  mascota: Mascota;
  onVer: () => void;
  onEditar: () => void;
  onBorrar: () => void;
};

const MascotaRow: React.FC<MascotaRowProps> = ({ mascota, onVer, onEditar, onBorrar }) => {
  const navigate = useNavigate();

  const handleBorrar = () => {
    onBorrar();
    navigate('/');
  }
  const handleAdoptar = () =>{
    onEditar();
    navigate("/");
  };

  return (
    <tr>
      <td>{mascota.nombre}</td>
      <td>{mascota.edad}</td>
      <td>{
        mascota.estado === 'ADOPTADA' ?
          <Badge bg="success">Adoptada</Badge>
        : mascota.estado === 'EN_ADOPCION' ?
          <Badge bg="warning">En adopción</Badge>
        : <Badge bg="danger">En diagnostico</Badge>
      }</td>
      <td>
        { mascota.estado === 'EN_ADOPCION' &&
          <Button
            variant="success"
            size="sm"
            className="me-1"
            onClick={handleAdoptar}
          >
            Adoptar
          </Button>
        }
        <Button
          variant="info"
          size="sm"
          className="me-1"
          onClick={onVer}
        >
          Ver
        </Button>
        <Button
          variant="warning"
          size="sm"
          className="me-1"
          onClick={onEditar}
        >
          Editar
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={handleBorrar}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default MascotaRow;
