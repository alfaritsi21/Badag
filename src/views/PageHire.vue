<template>
  <div>
    <Navbar />
    <div class="main-hire">
      <b-container>
        <b-row>
          <b-col cols="4" md="4" sm="4">
            <div class="user-info">
              <div class="user-img">
                <img v-bind:src="`${urlApi}${getWorkerProfile.image}`" alt class="profileImg" />
              </div>
              <h2>{{getWorkerProfile.name}}</h2>
              <h6>{{getWorkerProfile.job}}</h6>
              <div class="img-location">
                <img src="../assets/img/pin.png" alt />
              </div>
              <p>{{getWorkerProfile.place}}, Indonesia</p>
              <div class="deskripsi">
                <p>{{getWorkerProfile.user_description}}</p>
              </div>
              <div class="skill">
                <h2>Skill</h2>
                <b-button
                  class="btn-skill"
                  v-for="(item, index) in getWorkerProfile.skills"
                  :key="index"
                >{{item}}</b-button>
              </div>
            </div>
          </b-col>
          <b-col cols="8" md="8" sm="8">
            <div class="contact-hire">
              <h2>Hubungi {{getWorkerProfile.name}}</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repudiandae ut harum. Molestiae odio ad sed quod magnam, temporibus eaque.</h6>
              <div class="form-hire">
                <b-form @submit.prevent="submit">
                  <b-form-group
                    id="input-group-1"
                    label="Tujuan tentang pesan ini"
                    label-for="input-1"
                  >
                    <select class="custom-select" required v-model="form.jobType_id">
                      <option selected disabled>Project</option>
                      <option value="1">Fulltime</option>
                      <option value="2">Partime</option>
                      <option value="3">Freelance</option>
                    </select>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Nama Lengkap:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      required
                      placeholder="Enter name"
                      v-model="form.name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-1" label="Email" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      type="email"
                      required
                      placeholder="Masukan Email"
                      v-model="form.email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="No.Handphone" label-for="input-2">
                    <b-form-input
                      id="input-3"
                      type="number"
                      required
                      placeholder="Masukan No Handphone"
                      v-model="form.phone"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4" label="Deskripsi">
                    <b-form-textarea
                      id="textarea-state"
                      v-model="form.message"
                      :state="text.length >= 15"
                      placeholder="Deskripsi/jelaskan lebih jelas (minimal 15 karakter)"
                      rows="8"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-button type="submit" class="btn-hire">Hire</b-button>
                </b-form>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PageHire',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      text: '',
      form: {
        user_id: null,
        company_id: null,
        jobType_id: null,
        name: '',
        phone: '',
        message: '',
        email: ''
      }
    }
  },
  components: {
    Navbar,
    Footer
  },
  created() {
    this.getDataUsers()
    this.getWorkerData()
  },
  computed: {
    ...mapGetters(['getSelectedWorker', 'getWorkerProfile', 'userData'])
  },
  methods: {
    ...mapActions(['selectedWorkerProfile', 'sendHiringMessage']),
    ...mapMutations([]),
    submit() {
      this.form.company_id = this.userData.company_id
      this.form.user_id = this.getWorkerProfile.id
      if (this.form.user_id === undefined) {
        alert('id pekerja tidak ditemukan')
      } else {
        if (this.form.message.length < 15) {
          alert('berikan pesan minimal 15 karakter')
        } else {
          this.sendHiringMessage(this.form)
            .then((result) => {
              alert(result)
              this.$router.push('/home')
            })
            .catch((error) => {
              alert(error)
            })
        }
      }
    },
    getWorkerData() {
      this.selectedWorkerProfile(this.getSelectedWorker)
        .then((response) => {})
        .catch((error) => {
          console.log(error.data.msg)
        })
    }
  },
  getDataUsers() {
    this.userLoginData()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.data.msg)
      })
  }
}
</script>

<style scoped>
.main-hire {
  background: #e5e5e5;
  padding: 50px 0;
}

.main-hire .user-info {
  background: #fff;
  padding: 25px 30px;
  border-radius: 8px;
}

.main-hire .user-info .user-img img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: 0 auto;
}

.main-hire .user-info h2 {
  font-size: 26px;
  margin: 20px 0 10px 0;
}

.main-hire .user-info h6 {
  font-size: 14px;
  color: #1f2a36;
  font-weight: normal;
}

.main-hire .user-info .img-location img {
  float: left;
  margin: 5px 10px 0 0;
}

.main-hire .user-info p {
  color: #9ea0a5;
  font-size: 14px;
}

.main-hire .user-info .skill {
  margin: 25px 0;
}

.main-hire .user-info .skill h2 {
  font-size: 26px;
}

.main-hire .user-info .btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid rgba(251, 176, 23, 0.6);
  margin: 5px;
}

.main-hire .contact-hire {
  padding: 0 25px;
}

.main-hire .contact-hire h6 {
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #46505c;
}

.main-hire .contact-hire .form-hire {
  margin: 50px 0 100px 0;
}

.main-hire .contact-hire .form-hire .btn-hire {
  background: #fbb017;
  border: 1px solid #fbb017;
  padding: 10px 0;
  width: 100%;
}
</style>
