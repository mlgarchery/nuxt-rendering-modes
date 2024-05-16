<script setup lang="ts">
const count = ref(0);
console.log(
  "running on the",
  typeof window === "undefined" ? "server" : "client"
);
</script>

<template>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <div>CHAAAT</div>
  <button @click="count++">{{ count }}</button>
</template>
