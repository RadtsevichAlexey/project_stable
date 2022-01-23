<template>
  <div id="app">

    <navbar />

    <div class="profile-box">
      <div class="profile-text">
        <p>
          Login:<br/>
          <output>Alex</output>
        </p>
        <p>
          Name:<br/>
          <output>Alexey</output>
        </p>
        <p>
          Height:<br/>
          <output>180</output>
        </p>
        <p>
          Weight:<br/>
          <output>100</output>
        </p>
        <p>
          Sex:<br/>
          <output>male</output>
        </p>
        <p>
          Age:<br/>
          <output>20</output>
        </p>
      </div>
    </div>

    <router-link :to="{name: 'Home'}">
      <div class="profile-style-out">
        <a class="buttons_style">
          Sign Out
        </a>
      </div>
    </router-link>

    <div class="profile-style-edit">
        <a class="buttons_style">
          Edit
        </a>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'

export default {
  name: 'Profile',
  components: {
    Navbar
  }
}

</script>

<style>

@import './profile-style.css';
@import '../../styles/buttons-style.css';

</style>
