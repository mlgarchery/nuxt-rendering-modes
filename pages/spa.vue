<script setup lang="ts"></script>

<template>
  <div>
    This one is not rendered ahead of time (neither at build time - prerendering
    - nor at request time - SSR).
    <br />
    You should notice a loading HTML until the JS takes over and generate the
    file HTML when refreshing.
  </div>
</template>
