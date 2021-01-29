import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: "https://potluckplanner2021.vercel.app",
    headers: {
      authorization: token
    }
  })
}