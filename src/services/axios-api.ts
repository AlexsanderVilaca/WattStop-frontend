import axios, { type AxiosRequestConfig } from "axios"

export const api = axios.create({
  baseURL: "https://api-wattstop.azurewebsites.net/api/"
})

api.interceptors.request.use((request) => {
    headersWithBearer(request)
    return request
})

const headersWithBearer = (request: AxiosRequestConfig<any>) => {
  return (request.headers = {
    Authorization: `Bearer ${'jurema'}`,
    "Content-Type": "application/json",
  })
}