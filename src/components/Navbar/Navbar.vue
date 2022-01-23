<template>
  <div class="navbar">
    <link rel="icon" href="./public/img/icon/favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">

    <nav class="nav-style">
      <div class="l">
          <router-link :to="{name: 'GeneralMain'}" class="nav-logo">YouDiary</router-link>
      </div>

      <ul class="nav-links">
        <li>
          <a>
            <router-link :to="{name: 'Training'}">Training</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link :to="{name: 'Tasks'}">Tasks</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link :to="{name: 'Statistics'}">Statistics</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link :to="{name: 'Profile'}">Profile</router-link>
          </a>
        </li>
      </ul>

      <div class="burger" @click="navSlideClick">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>

    <div id="s-GeneralMain">
      <img src="../../../public/img/bg-picrures/main_fon.jpg">
    </div>
  </div>
</template>

<script>
/* import navSlide from './nav.js' */

export default {
  name: 'Navbar',
  /* components: navSlide, */
  data () {
    return {
      burger: '',
      nav: '',
      navLinks: ''
    }
  },
  methods: {
    /* navSlideClick () {
      this.burger = document.querySelector('.burger')
      this.nav = document.querySelector('.nav-links')
      this.navLinks = document.querySelectorAll('.nav-links li')

      console.log('working 11111!')

      this.$emit('navSlide()', [ this.burger, this.nav, this.navLinks ])
    } */
    navSlideClick () {
      this.burger = document.querySelector('.burger')
      this.nav = document.querySelector('.nav-links')
      this.navLinks = document.querySelectorAll('.nav-links li')

      this.nav.classList.toggle('nav-active')

      this.navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.7}s`
        }
      })

      this.burger.classList.toggle('toggle')
    }
  }
}

</script>

<style>

@import './nav-style.css';

</style>
