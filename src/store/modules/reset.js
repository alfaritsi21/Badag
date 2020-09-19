import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    resetCheck: {},
    emailReset: ''
  },
  mutations: {
    setCheckReset(state, payload) {
      state.resetCheck = payload
    },
    setEmailForgot(state, payload) {
      state.emailReset = payload
    }
  },
  actions: {
    checkForgotEmail(context, payload) {
      console.log(payload)
      context.commit('setEmailForgot', payload)
    },
    forgot(context, payload) {
      console.log(context.state.emailReset)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.urlApi}users/password/${context.state.emailReset}`,
            payload
          )
          .then(response => {
            context.commit('setCheckReset', response.data.data)
            resolve(response.data)
            console.log(response.data)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
              alert(error.response.data.msg)
            }
          })
      })
    },
    forgotPt(context, payload) {
      console.log(context.state.emailReset)
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.urlApi}users/password-company/${context.state.emailReset}`,
            payload
          )
          .then(response => {
            context.commit('setCheckReset', response.data.data)
            resolve(response.data)
            console.log(response.data)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
              alert(error.response.data.msg)
            }
          })
      })
    }
  },
  getters: {
    getResetCheck(state) {
      return state.resetCheck
    }
  }
}
