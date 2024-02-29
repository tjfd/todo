<template>
  <div :class="$style.wrapper">
    <p :class="$style.label">Веб сервис временно недоступен</p>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  text-align: center;

  .label {
    @include open-sans;
  }
}
</style>
