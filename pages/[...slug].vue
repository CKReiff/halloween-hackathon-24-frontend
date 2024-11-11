<script setup lang="ts">
import type { EnterspeedContentPage } from "~/types/enterspeed";

definePageMeta({
  key: (route) => route.fullPath,
});

const defaultView = resolveComponent("LazyViewsDefault");

const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return useEnterSpeed<EnterspeedContentPage>({
    url: route.path,
  });
});

console.log('Data received:', data.value);


const viewTemplate = computed(() => {
  let view = null;
  const type = data.value?.route?.type;

  if (!type) {
    return null;
  }

  switch (type) {
    case "home":
      view = home;
      break;
    default:
      view = defaultView;
  }

  return view;
});
</script>

<template>
  <pre>
    {{ data }}
  </pre>
  <!-- <Component :is="viewTemplate" v-if="viewTemplate" :data="data" /> -->
</template>
