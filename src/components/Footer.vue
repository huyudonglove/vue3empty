<template>
  <a-layout-footer style="text-align: center">
    {{ systemName }} ©{{ year }} Created by {{ author }}
  </a-layout-footer>
</template>

<script setup lang="ts">
const systemName: string = '芜湖市鸠江区下九连圩保安站工程'
const author: string = 'RuanFumin'
const d: Date = new Date()
const year: number = d.getFullYear()
</script>
