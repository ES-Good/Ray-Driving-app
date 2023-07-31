<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods:{
    ...mapActions(["fethQuestions"])
  },
  mounted(){
    this.fethQuestions()
  }
}
</script>

<style>
@import '../src/assets/style.css';
</style>
