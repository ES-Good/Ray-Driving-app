<template>
  <MainHeader/>
  <ChoiceCards/>
  <MainNav/>
</template>

<script>
// @ is an alias to /src
import ChoiceCards from '@/components/ChoiceCards.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import MainHeader from '@/components/MainHeader.vue';
import MainNav from '@/components/MainNav.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainHeader,
    ChoiceCards,
    MainNav
  }
}
</script>
