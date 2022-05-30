import axios from "axios";

const URL_API = process.env.REACT_APP_URL_API || 'http://localhost:3000'

const login = async params => {
    const { data } = await axios.post(`${URL_API}/login`, params)
    return data
}

export default login