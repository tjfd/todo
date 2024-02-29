<template>
  <div :class="$style.wrapper">
    <OrganismsHeader />
    <div :class="$style.container"><slot></slot></div>
  </div>
</template>
<script setup lang="ts">
import OrganismsHeader from '@/components/molecules/Header.vue'
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;

  &.dark {
    background-color: $black-opacity;
  }

  .container {
    flex: 1 1 auto;
    margin-top: 3.5rem;
  }
}
</style>
