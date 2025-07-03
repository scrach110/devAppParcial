import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAsyncEffect from '../helpers/useAsyncEffect';
import useAPI from '../contexts/useAPI';
import type { MascotaWithId } from '../models/mascota';
import MascotasTable from '../components/MascotasTable';


const MascotasListPage: React.FC = () => {
  const [mascotas, setMascotas] = useState<MascotaWithId[]>([]);
  const navigate = useNavigate();
  const api = useAPI();

  useAsyncEffect(async () => {
    const all = await api.mascotas.all();
    setMascotas(all);
  }, [mascotas]);

  const handleCrear = () => {
    navigate(`/nuevo`);
  }

  const handleVer = (id: string) => {
    navigate(`/ver/${id}`);
  }

  const handleEditar = (id: string) => {
    navigate(`/editar/${id}`);
  }

  const handleBorrar = async (id: string) => {
    await api.mascotas.delete(id);
    navigate(`/`);
  }

  return (
    <MascotasTable
      mascotas={mascotas}
      onCrearNueva={() => handleCrear()}
      onVerUno={(id: string) => handleVer(id)}
      onEditarUno={(id: string) => handleEditar(id)}
      onBorrarUno={(id: string) => handleBorrar(id)}
    />
  );
};

export default MascotasListPage;
