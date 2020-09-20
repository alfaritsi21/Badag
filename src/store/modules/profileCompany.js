import axios from 'axios'

export default {
  state: {
    // urlAPI: process.env.VUE_APP_URL,
    dataCompany: [],
    dataCom: {},
    company_id: 1,
    user: {}
  },
  mutations: {
    setDataCompany(state, payload) {
      state.dataCompany = payload
      console.log(payload)
    },
    setDataCom(state, payload) {
      state.dataCom = payload
    }
  },
  actions: {
    addCompany(context, payload) {
      axios
        .patch(`${process.env.VUE_APP_URL}company/profile/${payload}`, context.state.dataCom)
        .then(response => {
          context.commit('setDataCompany', response.data.data)
          console.log(response.data)
          console.log(payload)
          alert(response.data.msg)
        })
        .catch(error => {
          alert(error.response.data.msg)
          console.log(error.response.data.msg)
        })
    },
    addComForm(context, payload) {
      console.log(payload)
      context.commit('setDataCom', payload)
    },
    pictureCompany(context, payload) {
      axios
        .patch(`${process.env.VUE_APP_URL}company/profile-image/${payload[1]}`, payload[0])
        .then(response => {
          //   resolve(response.data)
          alert(response.data.msg)
        })
        .catch(error => {
          //   reject(error.response.data.msg)
          alert(error.response.data.msg)
        })
    }
  },
  getters: {
  }
}
