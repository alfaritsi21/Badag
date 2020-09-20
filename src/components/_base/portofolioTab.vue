<template>
  <div class="wall">
    <div v-if="isPt === false" class="profile">
      <div class="title">
        <h3 @click="onPorto">Portofolio</h3>
        <h3 @click="onExp">Pengalaman kerja</h3>
      </div>
      <div class="content">
        <div v-if="isPorto === true" class="portofolio">
          <div class="loopBorder" v-for="(item, index) in getFullUserData.portofolio" :key="index">
            <div
              class="imgPorto"
              v-bind:style="{ backgroundImage: `url(${urlApi}${item.image_app})` }"
            ></div>
            <p>{{item.app_name}}</p>
          </div>
        </div>
        <div v-if="isExp === true" class="experience">
          <div class="expLoop" v-for="(item, index) in getFullUserData.experience" :key="index">
            <div
              class="imgJob"
              v-bind:style=" item.logo === undefined ? { backgroundImage: 'none', backgroundColor: 'red'} : { backgroundImage: `url(${urlApi}${item.logo})` }"
            ></div>
            <div class="jobDesc">
              <p>{{item.position}}</p>
              <p>{{item.company}}</p>
              <p>{{item.date}}- {{item.date}} 1 month</p>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isPt === true" class="profile">
      <div class="title">
        <h3 @click="onPorto">Portofolio</h3>
        <h3 @click="onExp">Pengalaman kerja</h3>
      </div>
      <div class="content">
        <div v-if="isPorto === true" class="portofolio">
          <div class="loopBorder" v-for="(item, index) in 3" :key="index">
            <div
              class="imgPorto"
              v-bind:style="{ backgroundImage: 'url(http://127.0.0.1:3001/2020-09-20T05-52-25.684Z-starky-sapling.png)' }"
            ></div>
            <p>Kontainer santai</p>
          </div>
        </div>
        <div v-if="isExp === true" class="experience">
          <div class="expLoop" v-for="(item, index) in 3" :key="index">
            <div class="imgJob"></div>
            <div class="jobDesc">
              <p>Frontend</p>
              <p>Tokopedia</p>
              <p>20 januari 2017- 20 february 2018 | 1 tahun</p>
              <p>jadi kurir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Portofoliotab',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      isPorto: true,
      isExp: false
    }
  },
  created() {
    this.getDataUsers()
  },
  computed: {
    ...mapGetters(['userData', 'getFullUserData', 'isPt'])
  },
  methods: {
    ...mapActions(['userLoginData']),
    ...mapMutations([]),
    getDataUsers() {
      this.userLoginData()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data.msg)
        })
    },
    onPorto() {
      this.isPorto = true
      this.isExp = false
    },
    onExp() {
      this.isExp = true
      this.isPorto = false
    }
  }
}
</script>

<style scoped>
.wall {
  border: 1px solid rgba(0, 0, 0, 0);
}
.expLoop {
  margin: 0;
  height: 175px;
  width: 100%;
  padding: 0;
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
}
.imgJob {
  width: 63px;
  height: 65px;
  border-radius: 5px;
  background-image: url(../../assets/img/tokopedia.jpg);
  background-repeat: round;
  background-size: cover;
  margin-right: 30px;
  position: relative;
}
.jobDesc {
  width: 86%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.jobDesc p:nth-of-type(1) {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}
.jobDesc p:nth-of-type(2) {
  font-size: 17px;
  margin: 0;
}
.jobDesc p:nth-of-type(3) {
  font-size: 16px;
  color: #9ea0a5;
  margin: 0;
}
.jobDesc p:nth-of-type(4) {
  font-size: 16px;
  margin: 15px 0 0 0;
}
.profile {
  margin-left: 30px;
  padding: 0;
  position: relative;
  width: 730px;
  height: 100%;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
  z-index: 3;
}
.title {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
}
.title h3:nth-of-type(1) {
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 20px;
  border-bottom: 4px solid #5d50a100;
  padding-bottom: 10px;
  margin-right: 30px;
  color: #9ea0a5;
  cursor: pointer;
}
.title h3:nth-of-type(2) {
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 20px;
  border-bottom: 4px solid #5d50a100;
  padding-bottom: 10px;
  margin-right: 30px;
  color: #9ea0a5;
  cursor: pointer;
}
.title h3:nth-of-type(1):hover {
  color: black;
  border-bottom: 4px solid #5e50a1;
}
.title h3:nth-of-type(2):hover {
  color: black;
  border-bottom: 4px solid #5e50a1;
}

.content {
  position: relative;
}
.portofolio {
  margin: 0;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}
.loopBorder {
  margin: 0;
  height: 155px;
  width: 210px;
  padding: 0;
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;
}
.imgPorto {
  width: 100%;
  height: 130px;
  border-radius: 5px;
  background-image: url(../../assets/img/porto.jpg);
  background-repeat: round;
  background-size: cover;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.37);
}
.portofolio p {
  top: 5px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  font-size: 13px;
  color: #000000;
}
</style>
<style scoped src="../../assets/css/portoTab.css">
</style>
