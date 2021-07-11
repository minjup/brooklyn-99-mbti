<template>
  <div>
    <h3>Result</h3>
    <div v-if="selectedCharacter">
      {{ selectedCharacter.name }}
      <button @click="restart">Start again</button>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {getModule} from 'vuex-module-decorators'
  import NineNineModule from '@/store/ninenine'
  import {Category, Personality, Question} from '@/models/question'
  import {UserChoice} from '@/models/userChoice'
  import {Character, MBTIType} from '@/models/character'

  const ninenineModule = getModule(NineNineModule)
  @Component
  export default class Result extends Vue {
    private userSelected: UserChoice[] = []
    private character!: Character

    private created() {
      this.userSelected = ninenineModule.userChoices
      this.getCharacter()
    }

    private get selectedCharacter(): Character {
      return this.character
    }

    private restart(): void {
      ninenineModule.restart()
      this.$emit('restart')
    }

    private getCharacter(): Character | void {
      const mbti = this.getMbti()
      const chosenCharacter = ninenineModule.characters.filter(
        (x) => x.mbti === mbti
      )      
      if (chosenCharacter && chosenCharacter.length === 1) {
        this.character = chosenCharacter[0]
      } else {
        throw new Error('Invalid character')
      }
    }

    private getMbti(): string {
      const ieOptions = this.userSelected
        .filter((x) => x.category === Category.IE)
        .map((s) => s.selectedOption)
      const ie = this.getMostOccurence(ieOptions)

      const jpOptions = this.userSelected
        .filter((x) => x.category === Category.JP)
        .map((s) => s.selectedOption)
      const jp = this.getMostOccurence(jpOptions)

      const snOptions = this.userSelected
        .filter((x) => x.category === Category.SI)
        .map((s) => s.selectedOption)
      const sn = this.getMostOccurence(snOptions)

      const ftOptions = this.userSelected
        .filter((x) => x.category === Category.TF)
        .map((s) => s.selectedOption)
      const ft = this.getMostOccurence(ftOptions)

      return `${ie}${sn}${ft}${jp}`
    }

    private getMostOccurence(selectedOptions: Personality[]): string {
      const maxCount = 3
      const unique = new Set(selectedOptions)
      let maxSelected = ''
      unique.forEach((u) => {
        const occurrence = selectedOptions.filter((o) => o === u)
        if (occurrence.length >= maxCount) {
          maxSelected = u
        }
      })

      if (maxSelected.length < 1) {
        throw new Error('Invalid selection')
      }
      return maxSelected
    }
  }
</script>
