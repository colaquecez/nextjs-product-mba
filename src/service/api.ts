import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fiap-reactjs-presencial.herokuapp.com/'
})

export default api
