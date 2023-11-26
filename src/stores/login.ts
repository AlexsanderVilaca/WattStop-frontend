import { get, post } from "@/services/api-handler";
import { setCookie } from "@/services/cookie-handler"

async function login(args: any) {
    try {
        const resposta = await post('Usuario/Login', args)
        if (resposta.status == 200) {
            const token = resposta.data.split(' ')[1];
            setCookie("WATTSTOP_TOKEN", token);
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

export { login }