<script setup>
import GuideBar from "@/components/guideBar.vue";
</script>

<template>
    <el-aside style="width: 150px;">
        <guide-bar></guide-bar>
    </el-aside>
    <el-main style="width: 900px">
        <div>dashboard</div>
    </el-main>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

<style scoped>

</style>