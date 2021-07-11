<template>
  <div>
    <div class="mbti-main" v-if="!started && !showResult">
      <p>Which Brooklyn Nine-Nine character are you?</p>
      <button @click="started = true">Let's find out!</button>
    </div>
    <div v-if="started && !showResult">
      <mbti-test @finished="finished"></mbti-test>
    </div>
    <div v-if="showResult">
      <result @restart="restart"></result>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import MbtiTest from './MbtiTest.vue'
  import Result from './Result.vue'
  @Component({
    components: {
      'mbti-test': MbtiTest,
      Result
    }
  })
  export default class Start extends Vue {
    private started: boolean = false
    private showResult: boolean = false

    private finished() {
      this.showResult = true
      this.started = false
    }

    private restart() {
      this.showResult = false
      this.started = false
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
