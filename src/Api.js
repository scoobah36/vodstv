import axios from 'axios'
export default axios.create({
  url:'',
  baseURL: 'http://localhost:9000/v1/',
  timeout: 9000
});