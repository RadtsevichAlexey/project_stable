<template>
  <div id="app">
    <navbar />

    <div class="new_task">
      <div class="input_new_task">
        <textarea name="new_task" id="new_tasks" rows="4" placeholder="CREATE YOUR WORKOUT">
        </textarea>
      </div>
    </div>

    <div class="profile-style-edit">
       <a class="buttons_style">
        Add Task
      </a>
    </div>

    <div class="profile-style-out">
       <a class="buttons_style">
        Remove
      </a>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'

export default {
  name: 'Tasks',
  components: {
    Navbar
  }
}

</script>

<style>

@import './tasks-style.css';
@import '../Profile/profile-style.css';
@import '../../styles/buttons-style.css';

</style>
