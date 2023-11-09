export type Dashboard = {
  displayName:string,
  id:string,
  starred: boolean
}


export type ApiResponse<T> = [null | T, null | string];