<template>
  <div id="app">
    <back-ground />

    <router-link :to="{name: 'Home'}" class="logo-home">YouDiary</router-link>

    <div class="s_auto_reg">
      <h1>Authorization</h1>
      <div class="input_s_auto_reg">
        <input type="text" placeholder="login">
      </div>
      <div class="input_s_auto_reg">
        <input type="password" placeholder="password">
      </div>
      <div class="input_s_auto_reg">
        <router-link :to="{name: 'GeneralMain'}">
          <input type="submit" value="Enter">
        </router-link>
      </div>
      <a>
        <router-link :to="{name: 'Registration'}" class="s_auto_reg_btn">Registration</router-link>
      </a>
    </div>
  </div>
</template>

<script>
import BackGround from '@/components/BackGround/BackGround.vue'

export default {
  name: 'Authorization',
  components: { BackGround }
}
</script>

<style>

@import '../../styles/logs.css';
@import '../../styles/auto-reg.css';

</style>
