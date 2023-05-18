import axios from "@/utils/axios";

export function login(params) {
  return axios.post("/user/login", params);
}

export function productList() {
  return axios.get("/pms/product/list");
}

export function productCateList() {
  return axios.get("/pms/pmsOrderMaster/list");
}

export function recordingList() {
  return axios.get('/pms/recording/list')
}

export function getProduct(id) {
  return axios.get(`/pms/product/get/${id}`);
}

export function getProductByRecordID(id) {
  return axios.get(`/pms/product/getByRecord/${id}`);
}

export function getRecord(id) {
  return axios.get(`/pms/recording/get/${id}`);
}

export function getUserInfo() {
  return axios.get("/user/info");
}

export function pmsProductList() {
  return axios.get("/pms/product/list");
}

export function register() {
  return axios.post("/user/register");
}

// Import the necessary dependencies
// import axios from 'axios';

// Function to upload WAV data
export function uploadWavData(formData) {
  return axios.post('/pms/audio/createName', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
