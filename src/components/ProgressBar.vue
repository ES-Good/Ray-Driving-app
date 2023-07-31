<template>
    <div class="progress-bar">
        <div class="progress-bar__line progress-bar__line_active" 
        v-for="(item, index) in activatedSizeProgressbar" 
        :key="index"></div>
        <div class="progress-bar__line" 
        v-for="(item, index) in notActivatedSizeProgressbar" 
        :key="index"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'ProgressBar',
    computed:{
        ...mapGetters(['activatedSizeProgressbar', 'notActivatedSizeProgressbar'])
    }
}
</script>

<style>

</style>