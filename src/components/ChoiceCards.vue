<template>
      <main class="main">
        <div class="wrapper">
            <div class="container">
                <div class="cards-container">
                    <div class="top-card">
                        <div class="top-card__header flex-box flex-box_top-card-header">
                            <div class="top-card__info">
                                <div class="ico-box ico-box_top-card">
                                    <svg class="ico-box__ico" width="32" height="32"><use xlink:href="../assets/img/icons.svg#ico-learning"></use></svg>
                                </div>
                                <div class="top-card__text-block">
                                    <h2 class="title-lvl1">
                                        Learning
                                    </h2>
                                    <p class="category-lvl">Category В</p>
                                </div>
                            </div>
                            <router-link to="/tests" class="btn">
                                <svg width="24" height="24"><use xlink:href="../assets/img/icons.svg#ico-choice-questions"></use></svg>
                            </router-link>
                        </div>
                        
                        <p class="counter-questions">
                            {{ activatedQuestions.length }} questions out of {{ allQuestions.length }} passed
                        </p>
        
                        <ProgressBar/>

                    </div>
                    <button class="btn choice-test">
                        <div class="ico-box ico-box_choice-test">
                            <svg class="ico-box__ico" width="40" height="40"><use xlink:href="../assets/img/icons.svg#ico-DVSA"></use></svg>
                        </div>
                        <span class="choice-test__info">
                            DVSA Exam
                        </span>
                    </button>
                    <button class="btn choice-test">
                        <div class="ico-box ico-box_choice-test">
                            <svg class="ico-box__ico"><use xlink:href="../assets/img/icons.svg#ico-express-mode"></use></svg>
                        </div>
                        <span class="choice-test__info">
                            Express mode
                        </span>
                    </button>
                    <button class="btn choice-test">
                        <div class="ico-box ico-box_choice-test">
                            <svg class="ico-box__ico"><use xlink:href="../assets/img/icons.svg#ico-hazard-perception"></use></svg>
                        </div>
                        <span class="choice-test__info">
                            Hazard perception
                        </span>
                    </button>
                    <button class="btn choice-test">
                        <div class="ico-box ico-box_choice-test">
                            <svg class="ico-box__ico"><use xlink:href="../assets/img/icons.svg#ico-road-signs"></use></svg>
                        </div>
                        <span class="choice-test__info">
                            Road signs
                        </span>
                    </button>
                    <button class="btn choice-test choice-test_big">
                        <div class="ico-box ico-box_choice-test">
                            <svg class="ico-box__ico"><use xlink:href="../assets/img/icons.svg#ico-multiplayer-learning"></use></svg>
                        </div>
                        <span class="choice-test__info">
                            Multiplayer Learning
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <ChoiceCardsFooter/>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
import ChoiceCardsFooter from './ChoiceCardsFooter.vue';
import ProgressBar from './ProgressBar.vue';
export default {
    components: { 
        ChoiceCardsFooter,
        ProgressBar 
    },
    name: 'ChoiceCards',
    computed:{
        ...mapGetters(['allQuestions', 'activatedQuestions'])
    }
}
</script>

<style>

</style>