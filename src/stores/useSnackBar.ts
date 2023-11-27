import {  ref } from "vue"
import type { Ref } from 'vue'
import { StatusType } from '@/stores/status'

interface ISnackbarComposable {
    active: Ref<boolean>
    description: Ref<string>
    type: Ref<StatusType>
    timeout: Ref<number>
    success(descriptionValue: string, timeoutValue?: number): void
    warning(descriptionValue: string, timeoutValue?: number): void
    info(descriptionValue: string, timeoutValue?: number): void
    error(descriptionValue: string, timeoutValue?: number): void
    spinner(descriptionValue: string, timeoutValue?: number): void
}
// Colocar ReadOnly
const active = ref<boolean>(false)
const description = ref<string>('')
const type = ref<StatusType>(StatusType.SUCCESS)
const timeout = ref<number>(2000)

export function useSnackbar(): ISnackbarComposable {
    const show = (descriptionValue: string, typeValue: StatusType, timeoutValue?: number) => {
        description.value = descriptionValue
        timeout.value = timeoutValue ?? 5000
        type.value = typeValue
        active.value = true
    }
    /**
     * 
     * @param descriptionValue texto da mensagem
     * @param timeoutValue timeout em milisegundos
     */
    const success = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, StatusType.SUCCESS, timeoutValue)
    }

    const warning = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, StatusType.WARNING, timeoutValue)
    }

    const info = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, StatusType.INFO, timeoutValue)
    }

    const error = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, StatusType.ERROR, timeoutValue)
    }
    
    const spinner = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, StatusType.SPINNER, timeoutValue)
    }

    return { active, timeout, type, description, success, warning, info, error, spinner }
}