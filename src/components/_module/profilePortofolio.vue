<template>
  <div>
    <header>
      <Profile />
    </header>
    <nav>
      <Navbar />
    </nav>
    <div class="hero">
      <b-container class="container">
        <div class="headerBg"></div>
        <b-row>
          <b-col cols="12" md="4" sm="12">
            <div class="main">
              <Cardprofile />
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="12">
            <div class="main">
              <Protofoliotab />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cardprofile from '../_base/profileCard'
import Protofoliotab from '../_base/portofolioTab'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'
import Profile from '../_base/modalProfile'
export default {
  name: 'Portofolio',
  components: {
    Cardprofile,
    Protofoliotab,
    Footer,
    Navbar,
    Profile
  },
  created() {
    this.loadData()
  },
  computed: {
    ...mapGetters(['getFullUserData'])
  },
  methods: {
    ...mapActions([]),
    loadData() {
      if (
        this.getFullUserData.image === '' ||
        this.getFullUserData.job === '' ||
        this.getFullUserData.place === '' ||
        this.getFullUserData.user_description === null ||
        this.getFullUserData.work_location === null
      ) {
        this.$bvToast.toast('Lengkapi data diri anda terlebih dahulu !', {
          title: 'Warning',
          variant: 'danger',
          solid: true
        })
        setTimeout(() => {
          this.$router.push('/profile-edit')
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background-color: #e5e5e5;
}
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  /* background-color: #e5e5e5; */
}
.main {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
footer {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: relative;
  bottom: 0;
  left: 0;
}
nav {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
header {
  width: 100%;
  height: 10px;
  position: absolute;
  top: 0px;
  margin-top: 55px;
  z-index: 4;
}

@media (max-width: 575.98px) {
  footer {
    display: none;
  }
  .hero {
    background-color: #e5e5e5;
  }
}
</style>
