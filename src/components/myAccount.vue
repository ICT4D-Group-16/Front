
<template>
    <el-aside style="width: 150px;">
        <el-aside style="width: 150px;">
            <guide-bar></guide-bar>
        </el-aside>
    </el-aside>
    <el-main style="width: 900px">
        <div>
            <p class="orderGuide"> You can find all the products here!</p>
        </div>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";

export default {
    name: "myAccount",
    components: {GuideBar}
}
</script>

<style scoped>
.orderGuide{
    margin-top: 40px;
    margin-bottom: 40px;
    color: #181818;
    font-size: 20px;
    font-weight: bold;
}
</style>