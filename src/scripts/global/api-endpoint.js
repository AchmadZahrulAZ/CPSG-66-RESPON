import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}pasien/list`,
  ADD_PASIEN: `${CONFIG.BASE_URL}pasien/add?`,
  LIST_PUSKESMAS: `${CONFIG.BASE_URL}puskesmas/list`
};

export default API_ENDPOINT;
