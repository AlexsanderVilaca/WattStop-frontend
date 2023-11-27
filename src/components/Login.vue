<template>
    <v-container>
        <v-row align="center" justify="center" class="d-flex align-center"  >
            <v-col cols="12" sm="10" >
            <v-card class="elevation-6 mt-10" color="grey-darken-4">
            <v-window v-model="step" >
                <v-window-item :value="1">
                    <v-row >
                    <v-col cols="12" md="6" class="d-flex align-center" >
                        <v-card-text class="mt-12" >
                        <v-row justify="center">
                            <v-col cols="12" sm="8" style="margin-top: -20%">
                            <v-text-field
                                label="Email"
                                v-model="usuario"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                                class="mt-16"
                            />
                            <v-text-field
                                label="Password"
                                v-model="password"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                                type="password"
                            />
                            <v-btn 
                                color="light-green-accent-4" dark block tile
                                @click="loginUser()"
                            >Log in
                            </v-btn>
                            </v-col>
                        </v-row>  
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="rounded-bl-xl" >
                    <div style="text-align: center; padding: 180px 0;">
                        <v-card-text>
                        <img src="../assets/logo.svg" style="max-width: 20%;">
                        <h2 class="text-center ">Não possui conta?</h2>
                        </v-card-text>
                        <div class="text-center">
                        <v-btn 
                            tile outlined dark 
                            @click="step++"
                            color="light-green-accent-4"
                        >
                        SIGN UP
                        </v-btn>
                        </div>
                        </div>
                    </v-col>
                    </v-row>
                </v-window-item>
                <v-window-item :value="2">
                    <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="  text-align: center; padding: 180px 0;">
                        <img src="../assets/logo.svg" style="max-width: 20%;">
                        <v-card-text class="white--text" >
                        <h2 class="text-center ">Já possui conta?</h2>
                        </v-card-text>
                        <div class="text-center">
                        <v-btn 
                            tile outlined dark @click="step--"
                            color="light-green-accent-4"
                        >
                        Log in
                        </v-btn>
                        </div>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                            <v-text-field
                                label="Nome"
                                v-model="nomeUsuarioSignUp"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                            />
                            <v-text-field
                                label="Email"
                                v-model="usuarioSignUp"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                            />
                            <v-text-field
                                label="Password"
                                v-model="passwordSignUp"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                                type="password"
                            />
                            <v-text-field
                                label="Type again your password"
                                v-model="passwordSignUpAgain"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                                type="password"
                            />
                            <v-text-field
                                label="Tipo de Acesso"
                                v-model="tipoAcessoSignUp"
                                outlined
                                dense
                                color="light-green-accent-4"
                                autocomplete="false"
                            />
                            <v-btn 
                                dark block tile
                                color="light-green-accent-4"
                                @click="signUpUser()"
                            >
                            Sign up
                            </v-btn>
                            </v-col>
                        </v-row>  
                        </v-card-text>
                    </v-col>
                    </v-row>
                </v-window-item>
                </v-window>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { login, signUp } from '../stores/login'
import { getEmpresaById } from '../stores/empresa'
import { ref } from 'vue'
import router from '@/router';
import { useSnackbar } from '@/stores/useSnackBar';

const step = ref<number>(1);
const usuario = ref<string>('');
const password = ref<string>('');

const nomeUsuarioSignUp = ref<string>('');
const usuarioSignUp = ref<string>('');
const passwordSignUp = ref<string>('');
const passwordSignUpAgain = ref<string>('');
const tipoAcessoSignUp = ref<string>('');

const loginUser = async () => {
    const resp = await login({user: usuario.value, secret: password.value})
    //const resp2 = await getEmpresaById({ params: {empresaId: '56e53ecc-1d2d-440b-afb6-2e25e172513d'} })
    if (resp == true) {
        router.push("dashboard")
    }
}

const signUpUser = async () => {
    if (passwordSignUp.value != passwordSignUpAgain.value) {
        useSnackbar().error("Senhas não conferem, digite a mesma senha para os dois campos!");
        return false;
    }
    const resp = await signUp({user: usuarioSignUp.value, nomeUsuario: nomeUsuarioSignUp.value, secret: passwordSignUp.value, tP_Acesso: tipoAcessoSignUp.value})
    if (resp == true) {
        return 
    }
    return false
}


</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>