<script setup lang="ts">
const route = useRoute();
console.log(
  "running on the",
  typeof window === "undefined" ? "server" : "client"
);
console.log(route.params.id);
</script>

<template>
  <div>
    id {{ $route.params.id }}<br />
    Look at your dev server console, and your browser console
  </div>
</template>
