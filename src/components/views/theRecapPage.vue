<template>
  <div class="theRecapPage c-recap">
    <div class="grid-container">
      <div class="grid-x align-center o-section__paddingBottomForNav">
        <div class="cell small-12">
          <h1 class="c-recap__title">Recapitulatif</h1>
        </div>
        <div class="cell medium-7 small-10 c-recap__block" v-if="debutChoixAnswer">
          <div class="grid-x align-center">
            <div class="cell small-12">
              <h2 class="c-recap__title">Dessous sexy ou casual ?</h2>
              <p v-if="debutChoixAnswer === 'dessous casual'">Vous avez choisi les dessous casual comme {{dessousCasualPercentage}}% des joueurs</p>
              <p v-else >Vous avez choisi les dessous sexy comme {{dessousSexyPercentage}}% des joueurs</p>
              <div class="c-recap__percentage flex-container">
                <div
                  class="c-recap__percentage--first"
                  :class="{'c-recap__percentage--userChoice' : debutChoixAnswer === 'dessous sexy'}"
                  :style="{ width: dessousSexyPercentage + '%' }"
                ></div>
                <div
                  class="c-recap__percentage--second"
                  :class="{'c-recap__percentage--userChoice' : debutChoixAnswer === 'dessous casual'}"
                  :style="{ width: dessousCasualPercentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell medium-7 small-10 c-recap__block" v-if="debutChoix2Answer">
          <div class="grid-x align-center">
            <div class="cell small-12">
              <h2 class="c-recap__title">Dessous sexy ou casual 2 ?</h2>
              <p v-if="debutChoix2Answer === 'dessous casual'">Vous avez choisi les dessous casual comme {{dessousCasual2Percentage}}% des joueurs</p>
              <p v-else >Vous avez choisi les dessous sexy comme {{dessousSexy2Percentage}}% des joueurs</p>
              <div class="c-recap__percentage flex-container">
                <div
                  class="c-recap__percentage--first"
                  :class="{'c-recap__percentage--userChoice' : debutChoix2Answer === 'dessous sexy'}"
                  :style="{ width: dessousSexy2Percentage + '%' }"
                ></div>
                <div
                  class="c-recap__percentage--second"
                  :class="{'c-recap__percentage--userChoice' : debutChoix2Answer === 'dessous casual'}"
                  :style="{ width: dessousCasual2Percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-main />
  </div>
</template>
<script>
import NavMain from '@/components/modules/navMain'
import firebase from 'firebase'

export default {
  name: 'theRecapPage',
  components: {
    NavMain
  },
  data () {
    return {
      playerNumber: 0,
      debutChoix: 0,
      debutChoixAnswer: localStorage.debutChoix,
      dessousSexy: 0,
      dessousSexyPercentage: 0,
      dessousCasual: 0,
      dessousCasualPercentage: 0,
      debutChoix2: 0,
      debutChoix2Answer: localStorage.debutChoix2,
      dessousSexy2: 0,
      dessousSexy2Percentage: 0,
      dessousCasual2: 0,
      dessousCasual2Percentage: 0
    }
  },
  mounted () {
    const db = firebase.database()
    const ref = db.ref('/')
    const playersRef = ref.child('players')
    playersRef.on('child_added', (snapshot) => {
      this.playerNumber += 1
      this.computePercentage(snapshot.val().debutChoix, 'debutChoix', 'dessousSexy', 'dessousSexyPercentage', 'dessousCasual', 'dessousCasualPercentage')
      this.computePercentage(snapshot.val().debutChoix2, 'debutChoix2', 'dessousSexy2', 'dessousSexy2Percentage', 'dessousCasual2', 'dessousCasual2Percentage')
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code)
    }).bind(this)
  },
  methods: {
    computePercentage (value, step, choiceOne, choiceOnePercentage, choiceTwo, choiceTwoPercentage) {
      if (value === choiceOne) {
        this[step] += 1
        this[choiceOne] += 1
      } else if (value === choiceTwo) {
        this[step] += 1
        this[choiceTwo] += 1
      }
      this[choiceOnePercentage] = (this[choiceOne] / this[step] * 100).toFixed(2)
      this[choiceTwoPercentage] = (this[choiceTwo] / this[step] * 100).toFixed(2)
    }
  }
}
</script>
