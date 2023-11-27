import { get } from "@/services/api-handler";

async function getEmpresaById(args: any) {
    try {
        const resposta = await get('Empresa/GetEmpresaById', args)
        if (resposta.status == 200) {
            console.log(resposta)
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

export { getEmpresaById }