<template>
  <div v-if="isProfileClick === true" class="blok">
    <div class="logoutBtn">
      <button type="button" @click="onLogout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isProfileClick'])
  },
  methods: {
    ...mapActions(['logout']),
    onLogout() {
      // this.logout()
      this.$swal
        .fire({
          title: 'Are you sure you want to logout?',
          icon: 'warning',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'Cancel'
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$swal.fire('See you again!', '', 'success')
            this.logout()
          }
        })
    }
  }
}
</script>

<style scoped>
.logoutBtn {
  bottom: 1px solid black;
  width: 100%;
  height: 30px;
  position: absolute;
  text-align: center;
  bottom: 0;
  margin-bottom: 10px;
}
.logoutBtn button {
  position: relative;
  border: 1px solid black;
  background-color: #5e50a1;
  color: white;
  margin: 0 auto;
  width: 100px;
  border-radius: 10px;
}
.blok {
  position: absolute;
  background: #fff;
  width: 200px;
  height: 55px;
  right: 0;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 4;
  margin-right: 10px;
  top: 0;
}

@media (max-width: 575.98px) {
}
</style>
