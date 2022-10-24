import axios from "axios";
// import Header from './header'

export default axios.create({
  baseURL: "http://192.168.1.3:8000/api/"
});