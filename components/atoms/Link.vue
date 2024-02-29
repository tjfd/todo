<template>
  <NuxtLink
    :to="to"
    :class="$style.link"
    ><slot
  /></NuxtLink>
</template>
<script lang="ts" setup>
interface ILinkProps {
  to: string
}

withDefaults(defineProps<ILinkProps>(), {
  to: '',
})
</script>
<style lang="scss" module>
.link {
  color: inherit;
  text-decoration: none;
}
</style>
