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

export function getRecord(id) {
  return axios.get(`/pms/product/get/${id}`);
}
