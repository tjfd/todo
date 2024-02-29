import type { IRepository } from '@/repository/interface'
import { apiWrapper } from '@/helpers/delivery'
import type { IQueryContract } from '@/models/common/IQuery'
import type {
  ITodoCard,
  ITodoCardCreateContract,
} from '@/models/components/ITodo'
import type { IConnector } from '@/models/delivery/common/IConnector'
import { ApiConnector } from '@/helpers/connector'

export class Repository implements IRepository {
  connector: IConnector

  constructor() {
    this.connector = new ApiConnector()
  }

  create = async (todo: ITodoCardCreateContract): Promise<ITodoCard | null> => {
    return await apiWrapper(this.connector.connector.post(`/todos`, todo), 201)
  }

  getList = async (query?: IQueryContract): Promise<ITodoCard[] | null> => {
    const params = {
      page: query?.page ?? 1,
      limit: query?.limit ?? 20,
    }

    return await apiWrapper(this.connector.connector.get(`/todos`, { params }))
  }

  updateStatusById = async (
    id: number,
    status: boolean,
  ): Promise<ITodoCard | null> => {
    return await apiWrapper(
      this.connector.connector.put(`/todos/${id}`, { completed: status }),
    )
  }

  delete = async (id: number): Promise<null> => {
    return await apiWrapper(this.connector.connector.delete(`/todos/${id}`))
  }
}
