<script setup lang="ts">
import type { EnterspeedContentPage } from '@/types/enterspeed';

defineProps<{
  data: EnterspeedContentPage['route']
}>()
</script>

<template>
  <div v-if="data">
    <h1>Hello world</h1>
  </div>
</template>