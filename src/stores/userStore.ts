import { defineStore } from 'pinia'

export interface IUser {
  name: string
  age: number
}

export interface IChild {
  id: number
  name: string
  age: number
}

interface UserStore {
  user: IUser
  children: IChild[]
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => {
    return {
      user: {
        name: '',
        age: 0
      },
      children: []
    }
  }
})
