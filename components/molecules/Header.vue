<template>
  <ClientOnly>
    <div
      :class="[
        $style.header,
        {
          [$style.dark]: themeStore.state.theme === THEMES.DARK,
        },
      ]">
      <Link
        v-for="(link, index) of links"
        :key="index + link.route"
        :to="link.route"
        :class="$style.link">
        <span>{{ link.text }}</span>
      </Link>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { ROUTES } from '@/constants/routes'
import Link from '@/components/atoms/Link.vue'
import type { ILink } from '@/models/common/Ilink'
import { useThemeStore } from '@/stores/state'
import { THEMES } from '@/constants/common'

const themeStore = useThemeStore()

const links: ILink[] = [
  {
    text: 'Главная',
    route: ROUTES.INDEX,
  },
  {
    text: 'Каталог',
    route: ROUTES.CATALOG,
  },
]
</script>
<style lang="scss" module>
.header {
  display: flex;
  gap: 1.5rem;
  background-color: $aqua;

  .link {
    padding: 2rem 1rem;
    color: $black;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    @include open-sans;

    &:hover {
      background-color: $yellow;
    }
  }

  &.dark {
    background-color: $black;

    .link {
      color: $white;
    }
  }
}
</style>
