<script setup lang="ts">
import type { EnterspeedContentPage } from '~/types/enterspeed';

definePageMeta({
  key: route => route.fullPath
})

const default = resolveComponent('LazyViewsDefault');

const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return useEnterSpeed<EnterspeedContentPage>({
    url: route.path
  })
})

const viewTemplate = computed(() => {
  let view = null
  const type = data.value?.route?.type

  if (!type) {
    return null
  }

  switch (type) {
    case 'home':
      view = home
      break
    default:
      view = default
  }

  return view
})
</script>

<template>
  <Component
    :is="viewTemplate"
    v-if="viewTemplate"
    :data="data?.route"
  />
</template>