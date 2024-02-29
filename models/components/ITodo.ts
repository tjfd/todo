export interface ITodoCard {
  id: number
  userId: number
  completed: boolean
  title: string
}

export interface ITodos {
  todos: ITodoCard[] | null
}

export interface ITodoCardCreateContract {
  completed: boolean
  title: string
}
