<template>
    <div style="height: 800px">
        <div class="guideClass">
            <h2 class="guideSpan">Guide</h2>
        </div>
        <div class="guideBar">
            <router-link to="/dashboard" class="routerLink">Dashboard</router-link>
        </div>
        <div class="guideBar">
            <router-link to="/allProducts" class="routerLink">Recordings</router-link>
        </div>
        <div class="guideBar">
            <router-link to="/myOrder" class="routerLink">Orders</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "guideBar"
}
</script>

<style scoped>

</style>