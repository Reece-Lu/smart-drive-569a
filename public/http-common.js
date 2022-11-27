import axios from 'axios'

export default axios.create({
  baseURL: 'https://console.cloud.google.com/storage/browser/569a_smart_drive',
  headers: {
    'Content-type': 'application/json'
  }
})
