<template>
    <div style="height: 800px">
        <div class="guideClass">
            <h2 class="guideSpan">Guide</h2>
        </div>
        <div>
            <router-link to="/allProducts" class="routerLink">All Products</router-link>
        </div>
        <div>
            <router-link to="/myOrder" class="routerLink">My order</router-link>
        </div>
        <div>
            <router-link to="/myAccount" class="routerLink">My account</router-link>
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