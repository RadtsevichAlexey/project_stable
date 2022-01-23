<template>
  <div id="app">
    <navbar />

    <div class="profile-box">
      <div class="profile-text">
        <p>
          Ккал:<br/>
          <output>257</output>
        </p>
        <p>
          Weigth:<br/>
          <output>100</output>
        </p>
        <p>
          Среднее время тренировки (мин):<br/>
          <output>53</output>
        </p>
        <p>
          Количество выполненых тренировок:<br/>
          <output>3</output>
        </p>
      </div>
    </div>

    <div class="profile-style-out">
        <a class="buttons_style">
          reset
        </a>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'

export default {
  name: 'Statistics',
  components: {
    Navbar
  }
}

</script>

<style>

@import '../Profile/profile-style.css';
@import '../../styles/buttons-style.css';

</style>
