import axios from "axios";

axios.defaults.baseURL = "http://localhost:8077";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(res => {
    console.log(res);
    if (typeof res.data !== "object") {
        console.log("server error");
    }
    if (res.data.resultCode !== 200) {
        console.log(res.data.message);
    }
    return res.data;
})

export default axios;