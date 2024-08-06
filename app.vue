<template>
  <div>
    <ul>
      <li><NuxtLink :to="'/'">Home</NuxtLink></li>
      <li><NuxtLink :to="'/about'">About</NuxtLink></li>
      <li><NuxtLink :to="'/contact'">Contact</NuxtLink></li>
      <li><NuxtLink :to="'/aaaa'">AAAA</NuxtLink></li>
    </ul>
    <NuxtPage />
  </div>
</template>
