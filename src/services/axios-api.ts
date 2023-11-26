import axios, { type AxiosRequestConfig } from "axios"
import { getCookie } from "./cookie-handler"

const getToken = () => {
  //aqui vou ter que pegar o token do cookie, se existir
  getCookie("WATTSTOP_TOKEN")
  return 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6Ijc4ZmRmNjNiLWE1NDItNDdkNi1iZjgyLTg5YmE5MTEzNTMwOSIsImVtYWlsIjoiaXJtYW9zYWF2ckBob3RtYWlsLmNvbSIsImp0aSI6IjFkNGIxYTA2LTE1YjEtNDAzMC1iMzIwLTMyZmEzZDAwM2FjZCIsIm5iZiI6MTcwMDk2MzI3NCwiZXhwIjoxNzAwOTkyMDc0LCJpYXQiOjE3MDA5NjMyNzQsImlzcyI6Imh0dHBzOi8vYXBpLXdhdHRzdG9wLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9hcGktd2F0dHN0b3AuYXp1cmV3ZWJzaXRlcy5uZXQifQ.LueaUAOBUU7H18NolLH8id4LL-POA5nzG7StedSQG4oOMlKvTkblWHroTeIjSP9yCRqsRtEfPvfo1J3tL8lrMg'
}

export const api = axios.create({
  baseURL: "https://api-wattstop.azurewebsites.net/api/" //"https://localhost:7090/api/"
})

api.interceptors.request.use((request) => {
    headersWithBearer(request)
    return request
})

const headersWithBearer = (request: AxiosRequestConfig<any>) => {
  return (request.headers = {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  })
}