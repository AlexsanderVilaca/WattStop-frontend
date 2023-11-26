import { get, post } from "@/services/api-handler";

async function getPontosRecarga() {
    try {
        const resposta = await get('PontoRecarga/GetPontosRecarga')
        if (resposta.status == 200) {
            //console.log(resposta.data)
            //return true
            /* vetor com os pontos de recarga no formato: */
            return resposta.data
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

export { getPontosRecarga }