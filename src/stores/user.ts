import { getCookie } from '@/services/cookie-handler';
import { jwtDecode } from 'jwt-decode'

function isAuthenticated(): boolean {
    try {
        return getCookie("WATTSTOP_TOKEN") != undefined
    } catch {
        return false;
    }
}

function isAdministator(): boolean {
    console.log(getEmpresaId())
    return getEmpresaId() != undefined
}

function getUserData() {
    if (isAuthenticated())
        return jwtDecode(getCookie("WATTSTOP_TOKEN")) as any
    else
        return ""
}

const getUserEmail = () => getUserData().email

const getUserName = () => getUserData() == "" ? "" : getUserData().name

const getUserInitials = () =>  getUserName() == "" ? "" : getUserName().substring(0, 2)

const getEmpresaId = () => getUserData() == "" ? undefined : getUserData().EmpresaId == "" ? undefined : getUserData().EmpresaId

export { 
    isAuthenticated, 
    isAdministator,
    getUserData, 
    getUserEmail, 
    getUserName, 
    getUserInitials,
}