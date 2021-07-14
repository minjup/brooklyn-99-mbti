<template>
  <div class="home">
    <img alt="Brooklyn Nine-Nine" src="../assets/BrooklynNineNine.png" />
    <Start />
    <footer> <small>&copy; Copyright 2021 by Minju Park</small> </footer> 
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Start from '@/components/Start.vue' // @ is an alias to /src

  @Component({
    components: {
      Start
    }
  })
  export default class Home extends Vue {}
</script>
<style lang="scss">

.home {
  background-color: white;
  width: 70%;
  margin: 20px;
  padding: 20px;

  img {
    width: 40%;
  }

  footer {
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:50px;
  }
}
</style>