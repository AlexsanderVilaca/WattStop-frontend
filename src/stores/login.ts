import { get, post } from "@/services/api-handler";
import { setCookie } from "@/services/cookie-handler"
import { useSnackbar } from "./useSnackBar";

async function login(args: any) {
    useSnackbar().info("Fazendo login", 1000);
    try {
        const resposta = await post('Usuario/Login', args)
        if (resposta.status == 200) {
            const token = resposta.data.split(' ')[1];
            setCookie("WATTSTOP_TOKEN", token);
            useSnackbar().success("Bem vindo", 3000);
            return true
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

async function signUp(args: any) {
    useSnackbar().info("Criando usuário", 1000);
    try {
        const resposta = await post('Usuario/SignUp', args)
        if (resposta.status == 200) {
            const token = resposta.data.split(' ')[1];
            useSnackbar().success("Usuário criado com sucesso! Pode fazer o login ao lado", 3000);
            return true
        }
        return false
    } catch (error) {
        console.error(error)
    }
}



export { login, signUp }