import { CrudErrorResponse } from "../api/types"

export const isErrorWithMessage = (error: unknown): error is CrudErrorResponse => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof (error as Record<string, unknown>).data === 'object'
  )
}