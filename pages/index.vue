<template>
  <section :class="$style.main">
    <div :class="$style.theme">
      <h1 :class="$style.title">Choose your own theme</h1>
      <div :class="$style.colorPicker">
        <ClientOnly>
          <span
            :class="[
              $style.white,
              {
                [$style.active]: themeStore.state.theme === THEMES.WHITE,
              },
            ]"
            @click="themeStore.setTheme(THEMES.WHITE)"></span>
          <span
            :class="[
              $style.dark,
              {
                [$style.active]: themeStore.state.theme === THEMES.DARK,
              },
            ]"
            @click="themeStore.setTheme(THEMES.DARK)"></span>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/state'
import { THEMES } from '@/constants/common'

const themeStore = useThemeStore()
</script>

<style lang="scss" module>
.main {
  .theme {
    .title {
      @include open-sans;
      margin: 0 auto;
      margin-bottom: 1rem;
      text-align: center;
    }

    .colorPicker {
      display: flex;
      gap: 1rem;
      justify-content: center;

      & > span {
        display: block;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        border: 1px solid $yellow;
        border-radius: 50%;
        transition: border 0.1s ease-in-out;

        &:hover {
          border: 0.2rem solid $yellow;
        }

        &.active {
          border-width: 0.4rem;
        }
      }

      .white {
        background-color: $white;
      }

      .dark {
        background-color: $black;
      }
    }
  }
}
</style>
