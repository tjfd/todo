<template>
  <section :class="$style.wrapper">
    <FormOrganism @submit="create" />
    <CatalogOrganism
      :todos="state.todos"
      @change-status="handleChangeStatus"
      @delete="deleteById" />
  </section>
</template>
<script lang="ts" setup>
import CatalogOrganism from '@/components/organisms/Catalog.vue'
import FormOrganism from '@/components/organisms/Form.vue'
import type {
  ITodoCard,
  ITodoCardCreateContract,
  ITodos,
} from '@/models/components/ITodo'

const r = useRepository()

const create = async (data: ITodoCardCreateContract): Promise<void> => {
  const { error } = await useAsyncData('createTodo', () => r.create(data))
  if (error.value) {
    return
  }
  await getList()
  alert('Todo successfully created')
}

const loading = ref(true)

const state = reactive<ITodos>({
  todos: null,
})

const getList = async (): Promise<void> => {
  const { data, error } = await useAsyncData('getTodosList', () =>
    r.getList({
      limit: 8,
      page: 1,
    }),
  )
  loading.value = false
  if (error.value || !data.value?.length) {
    return
  }

  state.todos = data.value
}

await getList()

const updateStatusById = async (id: number, status: boolean): Promise<void> => {
  loading.value = true
  await useAsyncData('updateStatusById', () => r.updateStatusById(id, status))
  loading.value = false
}

const handleChangeStatus = async (todo: ITodoCard): Promise<void> => {
  if (!todo?.id) {
    return
  }
  await updateStatusById(todo.id, !todo.completed)
  await getList()
  alert(
    `Todo "${todo.title}" status updated to ${
      !todo.completed ? 'completed' : 'not completed'
    }`,
  )
}

const deleteById = async (todo: ITodoCard): Promise<void> => {
  if (!todo?.id) {
    return
  }
  await useAsyncData('deleteTodo', () => r.delete(todo.id))
  await getList()
  alert(`Todo "${todo.title}" deleted`)
}
</script>
<style lang="scss" module>
.wrapper {
  display: grid;
  gap: 2rem;
  margin: 5rem 0;
}
</style>
