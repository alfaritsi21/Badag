import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    listChatWorker: {},
    listChatCompany: {},
    roomChatData: {},
    roomId: null
  },
  mutations: {
    setChatWorker(state, payload) {
      state.listChatWorker = payload
    },
    setChatCompany(state, payload) {
      state.listChatCompany = payload
    },
    setRoom(state, payload) {
      state.roomChatData = payload
    },
    setIdRoom(state, payload) {
      state.roomId = payload
    }
  },
  actions: {
    sendMessage(context, payload) {
      axios
        .post(`${context.state.urlApi}chat/send`, payload)
        .then(response => { })
        .catch(error => {
          // alert(error.response.data.msg)
          Swal.fire(
            'Notice!',
            `${error.response.data.msg}`,
            'error'
          )
        })
    },
    chatRoom(context, payload) {
      context.commit('setIdRoom', payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}chat`, payload)
          .then(response => {
            context.commit('setRoom', response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            if (error.response === undefined) {
              // alert('Tidak dapat terhubung ke server')
              Swal.fire(
                'Notice!',
                'Tidak dapat terhubung ke server',
                'error'
              )
            } else {
              reject(error.response.data.msg)
              // alert(error.response.data.msg)
              Swal.fire(
                'Notice!',
                `${error.response.data.msg}`,
                'error'
              )
            }
          })
      })
    },
    chatWorker(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}chat/worker`, payload)
          .then(response => {
            context.commit('setChatWorker', response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            if (error.response === undefined) {
              // alert('Tidak dapat terhubung ke server')
              Swal.fire(
                'Notice!',
                'Tidak dapat terhubung ke server',
                'error'
              )
            } else {
              reject(error.response.data.msg)
              // alert(error.response.data.msg)
              Swal.fire(
                'Notice!',
                `${error.response.data.msg}`,
                'error'
              )
            }
          })
      })
    },
    chatCompany(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}chat/company`, payload)
          .then(response => {
            context.commit('setChatCompany', response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            if (error.response === undefined) {
              // alert('Tidak dapat terhubung ke server')
              Swal.fire(
                'Notice!',
                'Tidak dapat terhubung ke server',
                'error'
              )
            } else {
              reject(error.response.data.msg)
              // alert(error.response.data.msg)
              Swal.fire(
                'Notice!',
                `${error.response.data.msg}`,
                'error'
              )
            }
          })
      })
    }
  },
  getters: {
    getListChatWorker(state) {
      return state.listChatWorker
    },
    getListChatCompany(state) {
      return state.listChatCompany
    },
    getRoomChatData(state) {
      return state.roomChatData
    },
    getRoomId(state) {
      return state.roomId
    }
  }
}
