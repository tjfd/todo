<template>
  <form
    :class="$style.wrapper"
    @submit.prevent="createTodo">
    <Input
      v-model="form.title"
      label="Title" />
    <Input
      v-model="form.completed"
      label="Is completed"
      checkbox />
    <Button />
  </form>
</template>
<script lang="ts" setup>
import type { ITodoCardCreateContract } from '@/models/components/ITodo'
import Input from '@/components/atoms/Input.vue'
import Button from '@/components/atoms/Button.vue'

const form = reactive<ITodoCardCreateContract>({
  title: '',
  completed: false,
})

const isFormValid = (): boolean => {
  if (!form.title) {
    alert('Place enter title')
    return false
  }

  return true
}

const emit = defineEmits(['submit'])
const createTodo = (): void => {
  if (isFormValid()) {
    emit('submit', form)
  }
}
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
