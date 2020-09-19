import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    dataBiografi: {},
    dataSkill: {},
    dataExperience: {},
    dataPortofolio: {},
    dataBio: {}
  },
  mutations: {
    setDataBiografi(state, payload) {
      state.dataBiografi = payload
    },
    setDataSkill(state, payload) {
      state.dataSkill = payload
    },
    setDataExperience(state, payload) {
      state.dataExperience = payload
    },
    setDataPortofolio(state, payload) {
      state.dataPortofolio = payload
    },
    setDataBio(state, payload) {
      state.dataBio = payload
    }
  },
  actions: {
    addBiografi(context, payload) {
      axios
        .patch(
          `${context.state.urlApi}users/profile/${payload}`,
          context.state.dataBio
        )
        .then(response => {
          context.commit('setDataBiografi', response.data.data)
          //   resolve(response.data)
          alert(response.data.msg)
        })
        .catch(error => {
          //   reject(error.response.data.msg)
          alert(error.response.data.msg)
        })
    },
    addSkills(context, payload) {
      axios
        .post(`${context.state.urlApi}skill`, payload)
        .then(response => {
          context.commit('setDataSkill', response.data.data)
          //   resolve(response.data)
          alert(response.data.msg)
        })
        .catch(error => {
          //   reject(error.response.data.msg)
          alert(error.response.data.msg)
        })
    },
    addExperience(context, payload) {
      axios
        .post(`${context.state.urlApi}experience`, payload)
        .then(response => {
          context.commit('setDataExperience', response.data.data)
          //   resolve(response.data)
          alert(response.data.msg)
        })
        .catch(error => {
          //   reject(error.response.data.msg)
          alert(error.response.data.msg)
        })
    },
    addPortofolio(context, payload) {
      axios
        .post(`${context.state.urlApi}portofolio`, payload)
        .then(response => {
          context.commit('setDataPortofolio', response.data.data)
          //   resolve(response.data)
          alert(response.data.msg)
        })
        .catch(error => {
          //   reject(error.response.data.msg)
          alert(error.response.data.msg)
        })
    },
    addBioForm(context, payload) {
      //   console.log(payload)
      context.commit('setDataBio', payload)
    }
  },
  getters: {
    getDataSkill(state) {
      return state.dataSkill
    },
    getDataExperience(state) {
      return state.dataExperience
    },
    getDataPortofolio(state) {
      return state.dataPortofolio
    }
  }
}
