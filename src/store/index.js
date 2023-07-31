import { createStore } from 'vuex'

export default createStore({
  state: {
    questions: [],
    activatedQuestions: [],
    progressbarSize: 7,
    ShowNav: true
  },
  getters: {
    allQuestions(state) {
      return state.questions
    },
    activatedQuestions(state) {
      return state.activatedQuestions
    },
    activatedSizeProgressbar(state) {
      if (state.questions.length) {
        const sumQuestions = state.questions.length
        const countQuestionsOneLine = Math.round(sumQuestions / state.progressbarSize)
        let countActivatedQuestions = state.activatedQuestions.length
        let countActivateLine = Math.round(countActivatedQuestions / countQuestionsOneLine)
        return countActivateLine
      }
    },
    notActivatedSizeProgressbar(state, getters) {
      if (!getters.activatedSizeProgressbar) {
        return state.progressbarSize
      } else {
        return state.progressbarSize - getters.activatedSizeProgressbar
      }
    },
    ShowMainNav(state) {
      return state.ShowNav
    }
  },
  mutations: {
    updateQuestions(state, getQuestions) {
      state.questions = getQuestions
    },
    activeQuestion(state, question) {
      state.questions.forEach(element => {
        if (element.id === question.id) {
          element.active = !element.active
          return
        }
      });

      let activeQuestionArr = state.questions.filter(item => item.active)
      state.activatedQuestions = activeQuestionArr
    }
  },
  actions: {
    async fethQuestions(ctx) {
      let response = await fetch('questions.json')
      let dataQuestions = await response.json()
      ctx.commit('updateQuestions', dataQuestions)
    }
  }
})
