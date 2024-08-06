<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
</script>
<template>
  <div>
    <ul>
      <li><NuxtLink :to="'/'">Home</NuxtLink></li>
      <li><NuxtLink :to="'/about'">About</NuxtLink></li>
      <li><NuxtLink :to="'/contact'">Contact</NuxtLink></li>
      <li><NuxtLink :to="'/aaaa'">AAAA</NuxtLink></li>
    </ul>
    <h1>{{ runtimeConfig?.public?.endpoint }}</h1>
    <h1>{{ runtimeConfig?.public?.accessToken }}</h1>
    <NuxtPage />
  </div>
</template>
