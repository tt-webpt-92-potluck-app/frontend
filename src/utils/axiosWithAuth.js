import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: "https://tt-webpt-92-potluck-app.herokuapp.com",
    headers: {
      authorization: token
    }
  })
}