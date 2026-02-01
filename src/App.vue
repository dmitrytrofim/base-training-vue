<template>
  <div class="text-[50px]">
    <h1>{{ store.count }}</h1>
    <button @click="store.increment">Click me!</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/index'

const store = useCounterStore()
</script>

<style scoped></style>
