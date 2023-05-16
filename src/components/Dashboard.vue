<script setup>
import GuideBar from "@/components/guideBar.vue";
</script>

<template>
    <el-aside style="width: 150px;">
        <guide-bar></guide-bar>
    </el-aside>
    <el-main style="width: 900px; margin-top: 20px">
        <div>
            <p class="dashboardGuide"> Welcome to Daughter of Savannah!</p>
        </div>
        <el-row :gutter="20" style="height: 100px">
            <el-col :span="10"> <div> <span class="personalClass"> NAME: </span> <span> {{name}}</span> </div> </el-col>
            <el-col :span="10"> <div> <span class="personalClass"> PhoneNumber: </span> <span> {{phone}}</span> </div></el-col>
        </el-row>
        <el-row :gutter="20" style="height: 100px">
            <el-col :span="10"> <div> <span class="personalClass"> NickName: </span> <span> {{nickname}}</span> </div></el-col>
            <el-col :span="10"> <div> <span class="personalClass"> Language: </span> <span> {{language}}</span> </div></el-col>
        </el-row>
    </el-main>
</template>

<script>
import {getUserInfo} from "@/service/user";

export default {
    name: "Dashboard",
    created() {
        this.nickname = localStorage.getItem('nickname')
        this.phone = localStorage.getItem('phone')
        this.language = localStorage.getItem('language')
        this.userId = localStorage.getItem('userId')
    },
    methods:{
        async fetchUserInfo(){
            await getUserInfo().then((res) => {
                console.log(res.data)
            })
        },
    },
    data() {
        return {
            userId: "",
            name: "Joey",
            phone: "400-820-8820",
            nickname: "Burikna Faso",
            Language: "10086",
        }
    },
}
</script>

<style scoped>
.dashboardGuide {
    margin-top: 25px;
    margin-bottom: 40px;
    color: #181818;
    font-size: 20px;
    font-weight: bold;
}
.personalClass{
    font-size: 15px;
    font-weight: bold;
}
</style>