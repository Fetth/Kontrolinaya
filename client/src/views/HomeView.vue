<template>
  <div class="box main">
    <!-- PROPS -->
    <div class="props">
      <h1>Props:</h1>
      <PropsMsg msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae pulvinar leo. Nam id lorem tempus, rutrum magna nec, aliquet nunc. Vestibulum ac ex tempor, vehicula neque sit amet, iaculis ligula. In euismod nisl libero, vel efficitur odio iaculis a. Vivamus tincidunt sem nec nisl maximus vulputate. "/>

      <br><hr>
    </div>
    <!-- PINIA -->
    <div class="box pinia">
      <h1>Pinia:</h1>
      <h3>Счетчик: {{ counterStore.count }}</h3>
      <button @click="counterStore.increment">Увеличить</button>
      <button @click="counterStore.decrement">Уменьшить</button>
      <br><hr>
    </div>
  </div>
</template>

<script>
import {useCounterStore} from '../stores/counter';//Pinia
import PropsMsg from '../components/PropsMsg.vue';
import { RouterLink } from 'vue-router';
  export default {
    components:{
    PropsMsg,
      // eslint-disable-next-line vue/no-unused-components
    RouterLink,
},
    data(){
      return {
        count: 0,
        posts: [],
        counterStore: useCounterStore(), //Pinia
        //После подключение мы получаем доступ ко всем параметрам стора
        //использование, через точку как к вложеным полям обьекта
      }
    },
    methods: {
      increment(){

      },
      thisIncrement(e){
        this.count = e;
      },
      clack(){
        this.counterStore.count++
      }
    },
  }
</script>

<style scoped>

</style>
 