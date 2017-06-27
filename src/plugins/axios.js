import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.15:8666'
})
