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

export function getUserInfo() {
  return axios.get("/user/info");
}

export function pmsProductList() {
  return axios.get("/pms/product/list");
}

export function register() {
    return axios.post("/user/register");
}