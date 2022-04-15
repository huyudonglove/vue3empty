<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content style="padding: 0 50px">
      <BreadCrumbVue/>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view />
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import BreadCrumbVue from "./components/BreadCrumb.vue";
import Footer from "./components/Footer.vue"
</script>

<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
