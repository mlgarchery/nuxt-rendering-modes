<script setup lang="ts">
const count = ref(0);
console.log(
  "running on the",
  typeof window === "undefined" ? "server" : "client"
);
</script>

<template>
  <div>
    This is the Index page
    <button @click="count++">{{ count }}</button>
    <NuxtLink href="/chat">chat</NuxtLink>
  </div>
</template>
