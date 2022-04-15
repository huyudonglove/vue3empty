<template>
    <a-table :dataSource="dataSource" :columns="columns" bordered>
        <template #bodyCell />
        <template #title>{{ Header }}</template>
    </a-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import data from '@/datas/MeetingData'
import type { MeetingInterface } from '@/ts/Interfaces'
const Header = '历史会议清单'
const dataSource: MeetingInterface[] = reactive(data)
const columns = [
    { title: '序号', dataIndex: 'id', key: 'id', },
    { title: '类别', dataIndex: 'type', key: 'type', },
    { title: '日期', dataIndex: 'date', key: 'date', },
    { title: '地点', dataIndex: 'address', key: 'address', },
    { title: '主题', dataIndex: 'title', key: 'title', },
    { title: '主持', dataIndex: 'emcee', key: 'emcee', },
    { title: '记录', dataIndex: 'record', key: 'record', },
]
</script>
