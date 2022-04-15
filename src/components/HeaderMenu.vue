<template>
    <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="item in navList" :key="item.id">
            <router-link :to="item.path">{{ item.title }}</router-link>
        </a-menu-item>
    </a-menu>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type NavInterface from '@/datas/InterfaceList'
import NavList from '@/datas/NavData'
const navList: NavInterface[] = reactive(NavList)
</script>