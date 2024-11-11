<template>
  <NuxtLoadingIndicator color="green" />
  <NuxtLayout name="default">
    <NuxtRouteAnnouncer />
    <NuxtPage :key="path" />
  </NuxtLayout>
</template>
