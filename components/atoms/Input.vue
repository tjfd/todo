<template>
  <div :class="$style.input">
    <span :class="$style.label"> {{ label }} </span>
    <template v-if="checkbox">
      <input
        type="checkbox"
        :value="modelValue"
        :disabled="disabled"
        @input="
          $emit(
            'update:modelValue',
            Boolean(($event.target as HTMLInputElement).value),
          )
        " />
    </template>
    <template v-else>
      <input
        type="text"
        :value="modelValue"
        :disabled="disabled"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        " />
    </template>
    <div
      v-if="error"
      :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>
<script lang="ts" setup>
interface IInputProps {
  error?: string
  modelValue: string | boolean
  label: string
  disabled: boolean
  checkbox: boolean
}

withDefaults(defineProps<IInputProps>(), {
  error: '',
  modelValue: '',
  label: '',
  disabled: false,
  checkbox: false,
})
defineEmits(['update:modelValue'])
</script>
<style lang="scss" module>
.input {
  display: flex;
  gap: 1rem;

  & > input {
    border: 0.04rem solid $black;
    border-radius: 4px;
  }
}
</style>
