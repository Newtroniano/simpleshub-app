import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  uploadPdf(formData) {
    return axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getCpfs() {
    return axios.get(`${API_URL}/cpfs`); 
  },
};