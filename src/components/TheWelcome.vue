<script setup>

import bukia from "@/assets/burkia.png";
</script>

<template>
    <header>
        <el-row><img :src="bukia " style="width: 600px;"></el-row>
    </header>
    <main>
        <div class="login">
            <el-card class="login-form-layout" >
                <el-form autoComplete="on"
                         :model="loginForm"
                         ref="loginForm"
                         label-position="left">
                    <h2 class="login-title color-main">Daughters of Savannah</h2>
                    <el-form-item prop="username">
                        <el-input name="username"
                                  type="text"
                                  v-model="loginForm.username"
                                  autoComplete="on"
                                  placeholder="please enter username">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input name="password"
                                  type="password"
                                  v-model="loginForm.password"
                                  @keyup.enter.native="loginAccount"
                                  autoComplete="on"
                                  placeholder="please enter password">
                        </el-input>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 40px;text-align: center">
                        <el-button style="width: 48%" type="primary" :loading="loading" @click.native.prevent="loginAccount" color="#73A9AD" >
                            <span style="color: #f8f8f8">login</span>
                        </el-button>
                        <el-button style="width: 48%" type="primary" :loading="loading" @click.native.prevent="registerAccount" color="#73A9AD" >
                            <span style="color: #f8f8f8">register</span>
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-card>

        </div>
    </main>
</template>

<script>
    import axios from "@/utils/axios";
    import {login} from "@/service/user";

    export default {
        name: 'login',
        data() {
           return {
               loginForm: {
                   username: '',
                   password: '',
               },

           }
        },
        created() {
            this.loginForm.username = "admin";
            this.loginForm.password = "macro123";
        },
        methods: {
            async loginAccount() {
                try {
                    const response = await login({
                        "password": this.loginForm.password,
                        "username": this.loginForm.username
                    })
                    console.log(response.data)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userId', response.data.id)
                    localStorage.setItem('phone',response.data.phone)
                    localStorage.setItem('nickname',response.data.username)
                    localStorage.setItem('Language',response.data.language)
                    await this.$router.push('/dashboard')
                } catch (error) {
                    // TODO: handle login error
                    console.error(`Login error: ${error.message}`)
                }
            },
            async registerAccount() {

            }
        }
    }
</script>

<style>
.login-form-layout{
    left: 150px;
    right: 0;
    width: 360px;
    margin: 60px 20px;
    border-top: 10px solid #73A9AD;
}
.color-main{
    color: #73A9AD;
}

.login-title {
    text-align: center;
}

.login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
}

</style>