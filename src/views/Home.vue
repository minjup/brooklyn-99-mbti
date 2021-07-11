<template>
  <div class="home">
    <img alt="Brooklyn Nine-Nine" src="../assets/BrooklynNineNine.png" />
    <Start />
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
