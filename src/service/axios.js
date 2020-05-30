import axios from 'axios'

const instance = axios.create({baseURL: 'https://devthomas.firebaseio.com/'});

export default instance;