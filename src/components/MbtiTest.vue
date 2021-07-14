<template>
  <div>
    <div v-if="getCurrentQuestion">
      <h3>{{ getCurrentQuestion.label }}</h3>
      <template v-for="option in getCurrentQuestion.options">
        <button class="option" :key="option.label" @click="next(option.label)">
          {{ option.label }}
        </button>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {getModule} from 'vuex-module-decorators'
  import NineNineModule from '@/store/ninenine'
  import {Question} from '@/models/question'
  import {UserChoice} from '@/models/userChoice'

  const ninenineModule = getModule(NineNineModule)
  @Component
  export default class MbtiTest extends Vue {
    private mbtiQuestions: Question[] = []
    private currentIndex: number = 0

    private created() {
      this.mbtiQuestions = ninenineModule.questions
      this.shuffleArray(this.mbtiQuestions)
    }

    private get getCurrentQuestion() {
      if (this.currentIndex === this.mbtiQuestions.length) {
        this.$emit('finished')
      } else {
        return this.mbtiQuestions[this.currentIndex]
      }
    }

    private shuffleArray(questions: Question[]) {
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]
      }
    }

    private next(label: string) {
      const option = this.getCurrentQuestion?.options.find(
        (o) => o.label === label
      )
      if (!option) {
        throw new Error('Cannot find the option')
      }

      if (this.getCurrentQuestion) {
        const userChoice: UserChoice = {
          category: this.getCurrentQuestion?.category,
          selectedOption: option.personality
        }
        ninenineModule.updateUserChoices(userChoice)
      }
      this.currentIndex++
    }
  }
</script>
<style lang="scss">
  $color: black;
  $color2: yellow;
  $radius: 0.35rem;
  $border-width: 2px;
  $color-bg: white;
  $offset: 0.5rem;
  $transition: 0.3s;

  button {
    font-weight: 400;
    border: solid $border-width $color;
    outline: 0;
    padding: 1rem 4rem;
    font-size: 1.2rem;
    letter-spacing: 0.08rem;
    background-color: $color-bg;
    border-radius: $radius;
    position: relative;
    cursor: pointer;
    width: 70%;
    margin: 0.5rem;

    &::after {
      border: 0;
      box-shadow: 0px 0px 0px $border-width $color;
      top: $offset;
      left: $offset;
    }

    &:hover {
      background-color: $color2;
      border: 0;
      &::after {
        background-color: $color;
        box-shadow: none;
      }
    }
  }

  h3 {
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    font-weight: 500;
    font-size: 1.3rem;
  }
</style>
