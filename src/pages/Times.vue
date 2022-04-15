<template>
  <a-timeline mode="alternate">
    <a-timeline-item v-for="item in datas" :key="item.id">{{item.title}} - {{item.date}}</a-timeline-item>
  </a-timeline>
</template>

<script setup lang="ts">
import data from '@/datas/TimesData';
import { reactive } from 'vue';
import type {TimeInterface} from '@/ts/Interfaces'
const datas: TimeInterface[] = reactive(data);
</script>
