<template>
  <div class="profile">
    <div class="gambar">
      <img v-bind:src="`${urlApi}${getFullUserData.image}`" alt class="profileImg" />
    </div>
    <div class="gambar">
      <p class="h4 mb-2" style="color:grey">
        <input v-if="isEdit === true" type="file" @change="browse" />
        <br v-if="isEdit === true" />
        <b-icon icon="pencil" class="mr-2" @click="editImg"></b-icon>
        <span @click="editImg">Edit</span>
      </p>
    </div>
    <h4 class="profileName">{{getFullUserData.name}}</h4>
    <p>{{getFullUserData.job}}</p>
    <div class="pin">
      <img src="../../assets/img/pin.png" alt />
      <p>{{getFullUserData.place}}, Indonesia</p>
    </div>
    <b-form-input
      id="input-1"
      :placeholder="getFullUserData.job_time === 0 ? 'freelancer' : 'fulltime'"
      v-model="job_time"
      trim
      class="mb-2"
      v-on:keyup.enter="enter"
    ></b-form-input>
    <div>
      <b-button block class="prime-button" @click="addBio">Simpan</b-button>
      <b-button block class="cancel-button">Batal</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ProfileCardEdit',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      isEdit: false,
      job_time: '',
      profile_image: '',
      form: {
        image: ''
      }
    }
  },
  created() {
    this.getDataUsers()
  },
  computed: {
    ...mapGetters(['userData', 'getFullUserData'])
  },
  methods: {
    ...mapActions([
      'addBiografi',
      'jobTime',
      'profilePicture',
      'userLoginData'
    ]),
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
    addBio() {
      this.addBiografi(this.userData.user_id)
    },
    editImg() {
      if (this.isEdit === false) {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
    },
    enter() {
      // this.addBioForm(this.form)
      this.jobTime(this.job_time)
    },
    browse(event) {
      this.form.image = event.target.files[0]
      const data = new FormData()
      data.append('image', this.form.image)
      this.profilePicture([data, this.userData.user_id])
      // this.profilePicture([this.form.image, this.userData.user_id])
    }
  }
}
</script>

<style scoped>
.mr-2,
.h4 span {
  cursor: pointer;
}
.profile {
  padding: 0;
  position: relative;
  width: 350px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
}
.email {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.profile h5 {
  margin-top: 10px;
  font-size: 18px;
}

.prime-button {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  background-color: #5e50a1;
}

.cancel-button {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid #5e50a1;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: #5e50a1;
  background-color: white;
  /* background-color: #5e50a1; */
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
