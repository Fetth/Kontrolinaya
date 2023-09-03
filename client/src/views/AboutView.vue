<template>
    <!-- <helloworld msg="Hello" @counters="countEmit" /> -->
    <!-- Основной контент -->
    <!-- <div :[attr]="login">
        <h1>About</h1>
    </div> -->

<!--  Как то создал 2 поста новых и теперь не могу их удалить, буду ещё экспериментировать со счетчиком на посты. В админке джанго они не отображаются  -->

    <div class="main">
      <p>Недавно созданных постов {{useCounterStore.length}} </p> <!-- Доработать надо -->
      <div class="post" v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.text }}</p>
      </div>
    </div>
</template>
  
  <script>
  // import ComponentsHello from '../components/ComponentsHello.vue'
  // import компонентов
  import {useCounterStore} from "../stores/counter";

  export default{
    components: { // Подключаемые компоненты
      //   'helloworld': ComponentsHello
    },
    data () {    // Переменные
        return {
            title: 'About',
            firrstName: '',
            lastName: '',
            attr: 'class',
            posts: [ ],
            count: 0,
            crf: '',
        }
    },
    methods: {
      useCounterStore, // Наши функции
        del: async function(){
          console.log(this.crf.token)
          await fetch('http://127.0.0.1:8000/api/posts/', {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(this.obj)
          })
        }
  
    },
    watch: { // Содержит обьект с наблюдателями за изменениями
  
    },
    mounted() { // Компонент монтирован
       
    },
    updated() { // Компонент обновлен
  
    },
    created() { // Компонент создан
  
    },
    unmounted() { // Компонент размонтирован
  
    },
    async beforeMount() { // Компонент будет монтирован
        const data = await fetch('http://127.0.0.1:8000/api/posts/')
        this.posts = await data.json()
        // console.log(this.posts)
        const d1 = await fetch('http://127.0.0.1:8000/api/posts/')
        this.crf = await d1.json()
      }
  }
  </script>
  
  <!-- Стили, если scoped, то только для компонента -->
  <style scoped> 
  .post{
    width: 400px;
    height: max-content;
    background-color: rgb(179, 130, 58);
    color: rgb(255, 255, 255);
    margin: auto;
  }
  html {
      text-align: center;
  }

  </style>