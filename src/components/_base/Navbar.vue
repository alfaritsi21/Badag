<template>
  <div class="navbars">
    <b-container v-if="isPt === false">
      <b-row>
        <b-col cols="12" md="6" sm="6">
          <div class="logo" @click="onLogo">
            <img src="../../assets/img/img-landing/logo.png" />
          </div>
        </b-col>
        <b-col cols="12" md="6" sm="6">
          <div class="navigation">
            <div
              class="img-profile float-right"
              v-bind:style="{
                backgroundImage: `url(${urlApi}${getFullUserData.image})`
              }"
              @click="onProfile"
            ></div>
            <div class="icons float-right">
              <b-icon icon="bell" v-b-popover.hover.bottom="'Ada notifikasi baru, segera lihat !'"></b-icon>
              <b-icon icon="envelope" @click="onMail" class="mail"></b-icon>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="isPt === true">
      <b-row>
        <b-col cols="12" md="6" sm="6">
          <div class="logo" @click="onLogo">
            <img src="../../assets/img/img-landing/logo.png" />
          </div>
        </b-col>
        <b-col cols="12" md="6" sm="6">
          <div class="navigation">
            <div
              class="img-profile float-right"
              v-bind:style="{
                backgroundImage: `url(${urlApi}${getFullUserData.company_image})`
              }"
              @click="onProfile"
            ></div>
            <div class="icons float-right">
              <b-icon icon="bell" v-b-popover.hover.bottom="'Ada notifikasi baru, segera lihat !'"></b-icon>
              <b-icon icon="envelope" @click="onMail" class="mail"></b-icon>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      urlApi: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getDataUsers()
  },
  computed: {
    ...mapGetters(['isPt', 'isProfileClick', 'userData', 'getFullUserData'])
  },
  methods: {
    ...mapActions(['profileClick', 'userLoginData']),
    getDataUsers() {
      this.userLoginData()
        .then(response => {})
        .catch(error => {
          console.log(error.data.msg)
        })
    },
    onLogo() {
      if (this.isPt === false) {
        this.$router.push('/profile-portofolio')
      } else {
        this.$router.push('/home')
      }
    },
    onProfile() {
      if (this.isPt === false) {
        this.$router.push('/profile-portofolio')
      } else {
        this.$router.push('/profile-company')
      }
      if (this.isProfileClick === false) {
        this.profileClick(true)
      } else {
        this.profileClick(false)
      }
    },
    onMail() {
      if (this.isPt === false) {
        this.$router.push('/chat')
      } else {
        this.$router.push('/chat')
      }
    }
  }
}
</script>

<style scoped>
.img-profile {
  border: 1px solid rgb(92, 92, 92);
  top: 3px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
  background-size: cover;
  background-repeat: round;
  box-shadow: 2px 3px 10px rgba(70, 70, 70, 0.671);
  /* background-image: url(http://127.0.0.1:3001/2020-09-20T05-52-25.684Z-starky-sapling.png); */
}
.img-profile:hover {
  border: 1px solid rgb(32, 32, 32);
  box-shadow: 1px 1px 7px rgba(46, 46, 46, 0.671);
  height: 32px;
  width: 32px;
  cursor: pointer;
}
.navbars {
  position: relative;
  background: #fff;
  padding: 20px 0;
}
.navbars .icons .b-icon.bi {
  margin: 10px 20px;
  float: left;
}
.navbars .img-profile img {
  border-radius: 100%;
  margin-left: 20px;
  cursor: pointer;
}
.modal {
  width: 200px;
  height: 200px;
  background-color: orchid;
  position: relative;
  z-index: 5;
}
@media (max-width: 575.98px) {
  .navbars .logo img {
    display: none;
  }

  .navbars .navigation {
    position: fixed;
    bottom: 0px;
    background: #fff;
    z-index: 999;
    padding: 25px 125px 30px 0;
    /* padding: 0 auto; */
    width: 375px;
    margin-left: -15px;
    display: block;
    box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
