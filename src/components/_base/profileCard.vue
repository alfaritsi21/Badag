<template>
  <div>
    <div v-if="isPt === false" class="profile">
      <div class="gambar">
        <img v-bind:src="`${urlApi}${getFullUserData.image}`" alt class="profileImg" />
      </div>
      <h4 class="profileName">{{getFullUserData.name}}</h4>
      <p>{{getFullUserData.job}}</p>
      <div class="pin">
        <img src="../../assets/img/pin.png" alt />
        <p>{{getFullUserData.place}}, Indonesia</p>
      </div>
      <p>{{getFullUserData.job_time === 0 ? 'freelancer' : 'fulltime'}}</p>
      <p>{{getFullUserData.user_description}}</p>
      <button v-if="isPt === true" type="button" @click="onBtn">Hire</button>
      <button v-if="isPt === false" type="button" @click="onBtn">Edit</button>
      <h5>Skill</h5>
      <div class="skill">
        <div v-for="(item, index) in getFullUserData.skills" :key="index">
          <p>{{item}}</p>
        </div>
      </div>
      <div class="email">
        <img src="../../assets/img/mail.png" alt="email" />
        <p>{{getFullUserData.email}}</p>
      </div>
      <div class="insta">
        <img src="../../assets/img/instagram.png" alt="insta" />
        <p>{{getFullUserData.instagram === undefined ? 'none' :getFullUserData.instagram}}</p>
      </div>
      <div class="github">
        <img src="../../assets/img/github.png" alt="github" />
        <p>{{getFullUserData.github === undefined ? 'none' :getFullUserData.github}}</p>
      </div>
      <div class="gitlab">
        <img src="../../assets/img/gitlab.png" alt="gitlab" />
        <p>{{getFullUserData.linkedin === undefined ? 'none' :getFullUserData.linkedin}}</p>
      </div>
    </div>
    <div v-if="isPt === true" class="profile">
      <div class="gambar">
        <img v-bind:src="`${urlApi}${getWorkerProfile.image}`" alt class="profileImg" />
      </div>
      <h4 class="profileName">{{getWorkerProfile.name}}</h4>
      <p>{{getWorkerProfile.job}}</p>
      <div class="pin">
        <img src="../../assets/img/pin.png" alt />
        <p>{{getWorkerProfile.place}}, Indonesia</p>
      </div>
      <p>{{getWorkerProfile.job_time === 0 ? 'freelancer' : 'fulltime'}}</p>
      <p>{{getWorkerProfile.user_description}}</p>
      <button v-if="isPt === true" type="button" @click="onBtn">Hire</button>
      <h5>Skill</h5>
      <div class="skill">
        <div v-for="(item, index) in getWorkerProfile.skills" :key="index">
          <p>{{item}}</p>
        </div>
      </div>
      <div class="email">
        <img src="../../assets/img/mail.png" alt="email" />
        <p>{{getWorkerProfile.email}}</p>
      </div>
      <div class="insta">
        <img src="../../assets/img/instagram.png" alt="insta" />
        <p>{{getWorkerProfile.instagram === '' ? 'none' :getWorkerProfile.instagram}}</p>
      </div>
      <div class="github">
        <img src="../../assets/img/github.png" alt="github" />
        <p>{{getWorkerProfile.github === '' ? 'none' :getWorkerProfile.github}}</p>
      </div>
      <div class="gitlab">
        <img src="../../assets/img/gitlab.png" alt="gitlab" />
        <p>{{getWorkerProfile.linkedin === '' ? 'none' :getWorkerProfile.linkedin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ProfileCard',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getDataUsers()
    this.getWorkerData()
  },
  computed: {
    ...mapGetters([
      'isPt',
      'userData',
      'getFullUserData',
      'getSelectedWorker',
      'getWorkerProfile'
    ])
  },
  methods: {
    ...mapActions(['userLoginData', 'selectedWorkerProfile']),
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
    onBtn() {
      if (this.isPt === false) {
        this.$router.push('/profile-edit')
      } else {
        this.$router.push('/hire')
      }
    },
    getWorkerData() {
      this.selectedWorkerProfile(this.getSelectedWorker)
        .then((response) => {
          // console.log(response)
        })
        .catch((error) => {
          console.log(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 0;
  position: relative;
  width: 350px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  box-sizing: border-box;
  background-color: white;
}
.email {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.insta {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.github {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.gitlab {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  justify-items: center;
  align-items: center;
}
.email p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.insta p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.github p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.gitlab p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.profile h5 {
  margin-top: 10px;
  font-size: 18px;
}
.skill {
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.skill div {
  height: 33px;
  margin-right: 10px;
  margin-bottom: 15px;
}
.skill p {
  margin: 0;
  height: 30px;
  border: 1px solid #e79c04;
  font-size: 10px;
  margin-right: 5px;
  padding: 3px 7px;
  color: #cf8c07;
  background-color: rgba(251, 176, 23, 0.6);
  border-radius: 5px;
}
.profile button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 45px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  background-color: #5e50a1;
}
.profile p:nth-of-type(1) {
  font-size: 14px;
  margin: 0;
}
.profile p:nth-of-type(3) {
  font-size: 12px;
  margin-top: 8px;
  color: #9ea0a5;
  line-height: 23px;
}
.profile p:nth-of-type(2) {
  font-size: 13px;
  margin: 0;
  margin-top: 5px;
  color: #9ea0a5;
}
.pin {
  padding: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  height: 30px;
  position: relative;
}
.pin p {
  right: 0;
  font-size: 12px;
  position: absolute;
  left: 23px;
  top: 3px;
  color: #9ea0a5;
}
.pin img {
  width: 15px;
  height: 15px;
  top: 7px;
  left: 0;
  position: absolute;
}
.gambar {
  text-align: center;
}
.profileImg {
  margin: 0 auto;
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.profileName {
  margin-top: 10px;
  font-size: 20px;
  position: relative;
  text-align: left;
}
</style>
