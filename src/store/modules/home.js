import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    search: '',
    totalPage: '',
    page: 1,
    limit: 3,
    sort: '',
    dataUsers: [],
    selectedWorker: {},
    workerProfile: {}
  },
  mutations: {
    setDataUsers(state, payload) {
      state.dataUsers = payload.data
      state.totalPage = payload.pagination.total_data
    },
    changePage(state, payload) {
      state.page = payload
    },
    sortUsers(state, payload) {
      state.sort = payload
    },
    searchUsers(state, payload) {
      state.search = payload
    },
    setSelectedWorker(state, payload) {
      state.selectedWorker = payload
    },
    setSelectedWorkerProfile(state, payload) {
      state.workerProfile = payload
    }
  },
  actions: {
    getDataUsers(context, payload) {
      axios
        .get(
          `${process.env.VUE_APP_URL}home?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&search=${context.state.search}`
        )
        .then(response => {
          console.log(response.data)
          context.commit('setDataUsers', response.data)
        })
        .catch(error => {
          console.log(error.data.msg)
        })
    },
    // getUser(context, payload) {
    //   axios
    //     .get(`${process.env.VUE_APP_URL}users/1`)
    //     .then(response => {
    //       console.log(response.data)
    //       // context.commit('setDataUsers', response.data)
    //     })
    //     .catch(error => {
    //       console.log(error.data.msg)
    //     })
    // },
    searcinghUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}home?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&search=${context.state.search}`
          )
          .then(response => {
            context.commit('searchUsers', response.data)
          })
          .catch(error => {
            console.log(error.data.msg)
          })
      })
    },
    selectedDataWorker(context, payload) {
      // console.log(payload)
      context.commit('setSelectedWorker', payload)
    },
    selectedWorkerProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlApi}users/${payload.user_id}`)
          .then(response => {
            resolve(response.data)
            context.commit('setSelectedWorkerProfile', response.data.data)
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
              reject(error.response)
            }
          })
      })
    }
  },
  getters: {
    getSearchUsers(state) {
      return state.search
    },
    getLimit(state) {
      return state.limit
    },
    getPage(state) {
      return state.page
    },
    getSortUsers(state) {
      return state.sort
    },
    getDataUser(state) {
      return state.dataUsers
    },
    getTotalPage(state) {
      return state.totalPage
    },
    getSelectedWorker(state) {
      return state.selectedWorker
    },
    getWorkerProfile(state) {
      return state.workerProfile
    }
  }
}
