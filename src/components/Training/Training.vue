<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
    <navbar />

    <article id="to-up"></article>

    <monday v-if="step === 'monday'"/>
    <wednesday v-if="step === 'wednesday'"/>
    <friday v-if="step === 'friday'"/>

    <div v-if="step != 'monday'" @click="indexBack(), stepChoose(index)" class="traning-style-back">
      <a class="buttons_style">
        back
      </a>
    </div>

    <div v-if="step != 'friday'" @click="indexNext(), stepChoose(index)" class="traning-style-next">
      <a class="buttons_style">
        next
      </a>
    </div>

    <div v-if="step === 'friday'" @click="indexRemove(), stepChoose(index)" class="traning-style-next">
      <a class="buttons_style">
        renew
      </a>
    </div>

    <div class="to-up-style">
      <a href="#to-up" class="buttons_style">
        to up
      </a>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Monday from '@/components/Training/Monday.vue'
import Wednesday from '@/components/Training/Wednesday.vue'
import Friday from '@/components/Training/Friday.vue'

export default {
  name: 'Training',
  components: {
    Navbar,
    Monday,
    Wednesday,
    Friday
  },
  data () {
    return {
      arrDays: ['monday', 'wednesday', 'friday'],
      step: 'monday',
      index: 0
    }
  },
  methods: {
    stepChoose (index) {
      this.step = this.arrDays[this.index]
    },
    indexNext () {
      this.index++
    },
    indexBack () {
      this.index--
    },
    indexRemove () {
      this.index = 0
    }
  }
}
</script>

<style>

@import './training-style.css';
@import '../../styles/buttons-style.css';

</style>
