import axios, { type AxiosRequestConfig } from "axios"

export const api = axios.create({
  baseURL: "https://localhost:7090/api/"//"https://localhost:7090/api/"
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