import { get } from "@/services/api-handler";

async function login(parmeters: any) {
    try {
        const resposta = await get('Test/Test')
        if (resposta.status == 200) {
            console.log("deu tudo certo poga!");
            return resposta
        }
    } catch (error) {
        console.log(error)
    }
}

export { login }