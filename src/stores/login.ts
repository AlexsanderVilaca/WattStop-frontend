import { get, post } from "@/services/api-handler";

async function login(args: any) {
    try {
        const resposta = await post('Usuario/Login', args)
        console.log(resposta)
        if (resposta.status == 200) {
            console.log("deu tudo certo poga!");
            return resposta
        }
    } catch (error) {
        console.log(error)
    }
}

export { login }