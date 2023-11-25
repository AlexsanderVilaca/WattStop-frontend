import { get, post } from "@/services/api-handler";

async function login(args: any) {
    try {
        const resposta = await post('Usuario/Login', args)
        console.log(resposta)
        if (resposta.status == 200) {
            //return resposta
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

export { login }