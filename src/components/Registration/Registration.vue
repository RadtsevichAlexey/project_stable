<template>
  <div id="app">
    <back-ground />

    <router-link :to="{name: 'Home'}" class="logo-home">YouDiary</router-link>

    <div class="s_auto_reg">
      <h1>Registration</h1>
      <form class="form-data">

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.name.$touch()"
                  v-model.trim="formReg.name"
                  type="text"
                  placeholder="name"
                  id="name">
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.login.$touch()"
                  v-model.trim="formReg.login"
                  type="text"
                  placeholder="login"
                  id="login">
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.password.$touch()"
                  v-model.trim="formReg.password"
                  type="password"
                  placeholder="password"
                  id="password">
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.rePassword.$touch()"
                  v-model.trim="formReg.rePassword"
                  type="password"
                  placeholder="repeat the password"
                  id="rePassword">
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.height.$touch()"
                  v-model.trim="formReg.height"
                  type="text"
                  placeholder="height"
                  id="height">
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.weight.$touch()"
                  v-model.trim="formReg.weight"
                  type="text"
                  placeholder="weight"
                  id="weight">
        </div>

        <div class="input_s_auto_reg_radButton">
            <input @blur="$v.formReg.sex.$touch()"
                    v-model.trim="formReg.sex"
                    id="male" name="sex"
                    type="radio"
                    value="male">
            <label for="male">male</label>
        </div>

        <div class="input_s_auto_reg_radButton">
            <input @blur="$v.formReg.sex.$touch()"
                    v-model="formReg.sex"
                    id="female"
                    name="sex"
                    type="radio"
                    value="female">
            <label for="female">female</label>
        </div>

        <div class="input_s_auto_reg">
          <input @blur="$v.formReg.age.$touch()"
                  v-model="formReg.age"
                  type="text"
                  placeholder="age"
                  id="age">
        </div>

        <div class="input_s_auto_reg">
          <router-link :to="{name: 'GeneralMain'}">
            <input type="submit" value="registration">
          </router-link>
        </div>

        <a>
          <router-link :to="{name: 'Authorization'}" class="s_auto_reg_btn">back</router-link>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import BackGround from '@/components/BackGround/BackGround.vue'

export default {
  name: 'Registration',
  components: { BackGround },
  data () {
    return {
      formReg: {
        name: '',
        login: '',
        password: '',
        rePassword: '',
        height: '',
        weight: '',
        sex: '',
        age: ''
      }
    }
  }
}
</script>

<style>

@import '../../styles/logs.css';
@import '../../styles/auto-reg.css';

</style>
