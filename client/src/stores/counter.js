import { defineStore } from 'pinia'

//Создаем экземпляр стора с помощью defineStore
//Название 'counter' должно быть уникальным в приложении
//в компонентах мы будем использовать counterStore
export const useCounterStore = defineStore('counter', {
  state: () => ({ //аналог date в компонентах, храним переменные
    count: 0,
    posts: [],
  }),
  getters: { //геттеры, можно получить состоянию
    postCount(state) {           //получение количества постов
      return state.posts.length
    },
  },
  actions: {      //аналог methods в компонентах, храним методы
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
})
