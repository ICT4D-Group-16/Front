<template>
  <div class="guideContainer">
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
    <div class="guideBar">
      <router-link to="/myAccount" class="routerLink">Products</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideBar",
};
</script>

<style scoped>
.guideContainer {
  height: 800px;
  display: flex;
  flex-direction: column;
}

.guideClass {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

.guideSpan {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.guideBar {
  padding: 10px;
}

.routerLink {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: bold;
}

.routerLink:hover {
  color: #1890ff;
}
</style>
