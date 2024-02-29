import axios, { type AxiosInstance } from 'axios'

export class ApiConnector {
  connector: AxiosInstance

  constructor() {
    this.connector = axios.create({
      baseURL: `http://localhost:3000/api`,
      withCredentials: true,
    })
  }
}
