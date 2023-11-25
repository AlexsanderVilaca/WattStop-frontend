<template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-row>
                    <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                            
                            <v-text-field
                            label="Email"
                            v-model="usuario"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-16"
                            />
                            <v-text-field
                            label="Password"
                            v-model="password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            
                            />
                            <v-row>
                                <v-col cols="12" sm="7">
                                <v-checkbox
                        
                        label="Esqueci minha senha"
                        class="mt-n1"
                        color="blue"
                        
                        > </v-checkbox>
                                </v-col>
                            </v-row>
                            <v-btn 
                                color="blue" dark block tile
                                @click="loginUser()"
                            >Log in
                            </v-btn>
                            </v-col>
                        </v-row>  
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                        <h2 class="text-center ">Não possui conta?</h2>
                        </v-card-text>
                        <div class="text-center">
                        <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                        </div>
                        </div>
                    </v-col>
                    </v-row>
                </v-window-item>
                <v-window-item :value="2">
                    <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                        <h2 class="text-center ">Já possui conta?</h2>
                        </v-card-text>
                        <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                        </div>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                            <v-row>
                            <v-col cols="12" sm="6">
                            </v-col>
                            <v-col cols="12" sm="6">
                            </v-col>
                            </v-row>
                            <v-text-field
                                label="Nome Completo"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                type="password"
                            />
                            <v-text-field
                                label="Email"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                            />
                            <v-text-field
                                label="Password"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                type="password"
                            />
                            <v-text-field
                                label="Type again your password"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                type="password"
                            />
                            <v-btn color="blue" dark block tile>Sign up</v-btn>
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
import { login } from '../stores/login'
import { ref } from 'vue'
import router from '@/router';

const step = ref<number>(1);
const usuario = ref<string>('');
const password = ref<string>('');

const loginUser = async () => {
    console.log("logando como:", usuario.value, password.value)
    const resp = await login({user: usuario.value, secret: password.value})
    if (resp == true) {
        router.push({name: "dashboard"})
    }
    console.log(resp)
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