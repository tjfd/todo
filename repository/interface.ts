import type { IQueryContract } from '@/models/common/IQuery'
import type {
  ITodoCard,
  ITodoCardCreateContract,
} from '@/models/components/ITodo'
import type { IConnector } from '@/models/delivery/common/IConnector'

export interface IRepository {
  connector: IConnector
  create(todo: ITodoCardCreateContract): Promise<ITodoCard | null>
  getList(query?: IQueryContract): Promise<ITodoCard[] | null>
  updateStatusById(id: number, status: boolean): Promise<ITodoCard | null>
  delete(id: number): Promise<null>
}
