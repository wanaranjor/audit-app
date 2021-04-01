import axios from "axios";

const API_URL = process.env.API_URL

export const createHeaders = () => {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return headers;
}

export const addEmpresa = async (
  razonSocial,
  tipoDoc,
  numeroDoc,
  segmentoCliente,
  direccion,
  ciudad,
  pais,
  telefono,
  correoEmpresarial,
  nombreContacto,
  correoContacto,
  email
) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/empresas`;
    const response = await axios.post(url, {
      razonSocial,
      tipoDoc,
      numeroDoc,
      segmentoCliente,
      direccion,
      ciudad,
      pais,
      telefono,
      correoEmpresarial,
      nombreContacto,
      correoContacto,
      email,
      createdAt: new Date()
    }, { headers });
    return response.status;
  } catch (error) {
    console.error('addEmpresa:', error);
    return error;
  }
}

export const addAuditoria = async (
  nameAudit,
  description,
  empresaId,
) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/auditorias`;
    const response = await axios.post(url, {
      nameAudit,
      description,
      empresaId,
      createdAt: new Date()
    }, { headers });
    return response.status;
  } catch (error) {
    console.error('addAuditoria:', error);
    return error;
  }
}

export const getEmpresas = async () => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/empresas?filter[order]=createdAt%20DESC`;
    const { data } = await axios.get(url, { headers });
    return (data.length > 0) ? data : [];
  } catch (error) {
    console.error('getEmpresas:', error);
    return error;
  }
}

export const getEmpresa = async (id) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/empresas/${id}?filter[order]=createdAt%20DESC`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getEmpresas:', error);
    return error;
  }
}

export const getEmpresaAuditoria = async (id) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/empresas/${id}/auditorias?filter[order]=createdAt%20DESC`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getEmpresaAuditoria:', error);
    return error;
  }
}

export const getInfoAuditoria = async (id) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/auditorias/${id}?filter[include][]=empresa`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getEmpresaAuditoria:', error);
    return error;
  }
}