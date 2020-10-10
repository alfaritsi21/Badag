<template>
  <div class="profile">
    <div class="gambar">
      <img :src="urlAPI +  dataCompany.company_image" alt="Foto Profile" class="profileImg" />
    </div>
    <div class="gambar">
      <p class="h4 mb-2" style="color:grey">
        <input v-if="isEdit === true" type="file" @change="browse" />
        <br v-if="isEdit === true" />
        <b-icon icon="pencil" class="mr-2" @click="editImg"></b-icon>
        <span @click="editImg">Edit</span>
      </p>
    </div>
    <h4 class="profileName">{{dataCompany.company_name}}</h4>
    <p>{{dataCompany.company_field}}</p>
    <div class="pin">
      <img src="../../assets/img/pin.png" alt />
      <p>{{dataCompany.company_place}}</p>
    </div>
    <p>{{dataCompany.company_position}}</p>
    <div>
      <b-button block class="prime-button" @click="addCom">Simpan</b-button>
      <b-button block class="cancel-button" @click="onBatal">Batal</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'ProfilePtCardEdit',
  data() {
    return {
      urlAPI: process.env.VUE_APP_URL,
      dataCompany: [],
      isEdit: false,
      form: {
        image: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      company: 'userData'
    })
  },
  created() {
    this.getDataCompany()
  },
  methods: {
    ...mapActions(['addCompany', 'pictureCompany']),
    ...mapMutations([]),
    getDataCompany() {
      axios
        .get(`${process.env.VUE_APP_URL}company/${this.company.company_id}`)
        .then((response) => {
          this.dataCompany = response.data.data
          console.log(this.dataCompany)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addCom() {
      this.addCompany(this.company.company_id)
      this.getDataCompany()
    },
    editImg() {
      if (this.isEdit === false) {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
    },
    browse(event) {
      this.form.image = event.target.files[0]
      const data = new FormData()
      data.append('image', this.form.image)
      this.pictureCompany([data, this.company.company_id])
    },
    onBatal() {
      this.$router.push('/home')
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
  background-color: rgb(255, 255, 255);
  margin: 0 0 150px 0;
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

@media (max-width: 575.98px) {
  .profile {
    margin: 0 0 50px 0;
  }
}
</style>
