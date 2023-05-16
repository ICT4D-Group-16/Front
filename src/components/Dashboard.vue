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
            <el-col :span="10"> <div> <span class="personalClass"> Station PhoneNumber: </span> <span> {{phoneNumber}}</span> </div></el-col>
        </el-row>
        <el-row :gutter="20" style="height: 100px">
            <el-col :span="10"> <div> <span class="personalClass"> Station Name: </span> <span> {{stationName}}</span> </div></el-col>
            <el-col :span="10"> <div> <span class="personalClass"> Postcode: </span> <span> {{postcode}}</span> </div></el-col>
        </el-row>
    </el-main>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            name: "Joey",
            phoneNumber: "400-820-8820",
            stationName: "Burikna Faso",
            postcode: "10086",
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