import { type AxiosResponse } from 'axios'

export class CustomError extends Error {
  response: any
  constructor(message: string, response?: any) {
    super(message)
    this.response = response
  }
}

export const apiWrapper = async <T>(
  request: Promise<AxiosResponse<T>>,
  successStatusCode = 200,
): Promise<T | null> => {
  try {
    const response = await request

    if (response.status !== successStatusCode) {
      const error = new CustomError(
        `API error, status: ${response.status}.`,
        response,
      )
      throw error
    }

    if (
      response.data === null &&
      response.status !== 202 &&
      response.status !== 204
    ) {
      throw new CustomError(`ERR_EMPTY_RESPONSE`)
    }

    if (!response.data) {
      return null
    }

    return response.data
  } catch (e) {
    const error = e as CustomError
    const errorRes = error?.response
    if (errorRes?.status >= 500) {
      setPageLayout('500')
    }
    throw new Error(
      errorRes?.data?.error?.code ||
        errorRes?.error ||
        error.message ||
        'Network error, try again late',
    )
  }
}
