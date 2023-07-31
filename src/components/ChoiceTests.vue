<template>
    <main class="main">
        <div class="wrapper">
            <div class="container">
                <div class="choice-tests-container">
                    <div class="choice-tests-container__header">
                        <p class="choice-tests-container__title">Tests</p>
                    </div>
                    <button 
                    v-for="question in allQuestions" 
                    :key="question.id" 
                    @click="activeQuestion(question)"
                    class="btn btn-choice-tests">
                        <span class="btn-choice-tests__num">
                            {{ question.questionNum }}
                        </span>
                        <svg v-show="question.active" class="btn-choice-tests__active" width="24" height="24">
                            <use xlink:href="../assets/img/icons.svg#ico-active-question"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: 'ChoiceTests',
    computed:{
        ...mapGetters(['allQuestions'])
    },
    methods:{
        ...mapMutations(['activeQuestion'])
    },
    // mounted(){
    //     let test = this.allQuestions.filter(item => item.active)
    //     console.log(test)
    // }
}
</script>

<style>

</style>