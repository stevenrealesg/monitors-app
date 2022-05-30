import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API || 'http://localhost:3000'

const getAll = async () => {
    try {
        const { data } = await axios.get(`${URL_API}/monitor`)
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

const save = async (data) => {
    try {
        await axios.post(`${URL_API}/monitor/add`, data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const remove = async (id) => {
    try {
        await axios.delete(`${URL_API}/monitor/delete/${id}`)
    } catch (error) {
        console.log(error)
        return false
    }
}

const update = async (id, data) => {
    try {
        await axios.put(`${URL_API}/monitor/update/${id}`, data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const exportedObject = { getAll, save, remove, update }
export default exportedObject