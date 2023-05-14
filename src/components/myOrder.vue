<template>
    <el-aside style="width: 150px;">
        <el-aside style="width: 150px;">
            <guide-bar></guide-bar>
        </el-aside>
    </el-aside>
    <el-main style="width: 900px">
        <div>my Order</div>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";

export default {
    name: "myOrder",
    components: {GuideBar}
}
</script>

<style scoped>

</style>