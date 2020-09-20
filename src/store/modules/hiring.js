import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    message: ''
  },
  mutations: {
    setHireMessage(state, payload) {
      state.message = payload
    }
  },
  actions: {
    sendHiringMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}hiring`, payload)
          .then(response => {
            context.commit('setHireMessage', response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    }
  },
  getters: {
    getMessage(state) {
      return state.message
    }
  }
}
