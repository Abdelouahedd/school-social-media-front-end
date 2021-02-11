import axios from 'axios'

export default (token) => {
    const info = JSON.parse(window.localStorage.getItem("info"));
    console.log("information of user from localstordge -> ",info)
    if (info.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${info.token}`
        axios.defaults.headers.common['Content-Type'] = `application/json`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}
