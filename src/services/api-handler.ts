import { AxiosError } from "axios";
import { api } from "@/services/axios-api";

/**
 * @param axios_type 
 * @param api_url URL a fazer o get
 * @param args são os objetos passados através do body
 * @param callbackOnSuccess 
 * @param callbackOnError 
 * @returns 
 */
async function get(
    api_url: string, 
    args?: object | undefined, 
    callbackOnSuccess?: any | undefined, 
    callbackOnError?: any | undefined) {
    try {        
        const response = await api.get(api_url, args)
        if (response.data?.errors) { /* se deu algum erro */
            throw new Error(response.data?.errors)
        }
        if (callbackOnSuccess != undefined) callbackOnSuccess()
        console.log("get", response)
        return response
    } catch (error: any) {
        if (callbackOnError != undefined) callbackOnError()
        const err = error as AxiosError
        handle_error(err)
        if (err.response) {
            return err.response?.data as any
        } else {
            throw new Error(error.message)
        }
    }
}

/**
 * @param api_url URL a fazer o post
 * @param args são os objetos passados através do body
 * @param callbackOnSuccess 
 * @param callbackOnError 
 * @returns 
 */
async function post(
    api_url: string, 
    args?: object | undefined, 
    callbackOnSuccess?: any, 
    callbackOnError?: any) {
    try {
        const response = await api.post(api_url, args)
        
        if (response.data?.errors) { /* erro foi tratado dentro da API */
            throw new Error(response.data?.errors)
        }
        if (callbackOnSuccess != undefined) callbackOnSuccess()
        console.log("post", response)
        return response;
    } catch (error: any) {
        if (callbackOnError != undefined) callbackOnError()
        const err = error as AxiosError
        handle_error(err)
        if (err.response) {
            return err.response?.data as any
        } else {
            throw new Error(error.message)
        }
    }
}

function handle_error(axios_error: AxiosError) {
    switch(axios_error.response?.status) {
        case 401: /* unauthorized */
            break;
        case 440: /* login time-out */
            break;
        default:
            break;
    }
}

export { get, post, handle_error }