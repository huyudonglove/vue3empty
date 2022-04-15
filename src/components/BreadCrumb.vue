<template>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="item in lists" :key="item">{{ item }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const lists: Array<string> = reactive([
    '主页', '列表', '应用'
])
</script>
