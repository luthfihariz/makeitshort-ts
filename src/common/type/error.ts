
export default class InternalError extends Error {
  errorCode: string
  errorMessage?: any

  constructor(errorCode:string, errorMessage?:any) {
    super()
    this.errorCode = errorCode;
    this.errorMessage = errorMessage
  }
}

