<template>
  <div :class="$style.wrapper">
    <div
      v-if="loading"
      :class="$style.spinner" />
    <div
      v-for="todo of todos"
      :key="todo?.id"
      :class="[
        $style.todo,
        {
          [$style.completed]: todo?.completed,
        },
      ]"
      @click.stop="$emit('change-status', todo)">
      <span
        :class="$style.delete"
        @click.stop="$emit('delete', todo)"></span>
      <span :class="$style.label">{{ todo?.title }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ITodoCard } from '@/models/components/ITodo'

interface ICatalog {
  todos: ITodoCard[] | null
  loading: boolean
}

withDefaults(defineProps<ICatalog>(), {
  todos: null,
  loading: false,
})
defineEmits(['change-status', 'delete'])
</script>
<style lang="scss" module>
.wrapper {
  display: grid;
  gap: 1rem;
  place-items: center;

  .todo {
    position: relative;
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    max-width: 20rem;
    padding: 2rem 1rem;
    text-align: center;
    background-color: $not-completed;

    &.completed {
      background-color: $completed;
    }
  }

  .spinner {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    padding: 2rem;
    border: 0.25rem solid $black;
    border-top-color: $white;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .delete {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: yellow;
    background-color: #000;
  }

  .delete::before {
    position: absolute;
    width: 15px;
    height: 2px;
    content: '';
    background-color: #000;
    background-color: currentcolor;
    transform: rotate(45deg);
  }

  .delete::after {
    position: absolute;
    width: 15px;
    height: 2px;
    content: '';
    background-color: #000;
    background-color: currentcolor;
    transform: rotate(-45deg);
  }
}
</style>
