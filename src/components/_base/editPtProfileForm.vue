<template>
  <div>
    <div class="profile">
      <div class="content">
        <h2 style="color: grey">Data Perusahaan</h2>
        <hr />
        <b-form-group
          id="fieldset-1"
          label="Nama Perusahaan"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            placeholder="Masukkan nama perusahaan"
            v-model="form.company_name"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Bidang" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan bidang perusahaan ex: Financial"
            v-model="form.company_field"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Kota" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukan kota"
            v-model="form.company_place"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Deskripsi Singkat"
          label-for="input-1"
        >
          <b-form-textarea
            id="textarea"
            placeholder="Tuliskan deskripsi singkat perusahaan"
            rows="3"
            required
            max-rows="6"
            v-model="form.company_description"
            >{{ form.company_description }}</b-form-textarea
          >
        </b-form-group>
        <b-form-group id="fieldset-1" label="Email" label-for="input-1">
          <b-form-input
            type="email"
            id="input-1"
            placeholder="Masukkan email"
            v-model="form.company_email"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Instagram" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan nama instagram"
            v-model="form.company_instagram"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Nomor telepon" label-for="input-1">
          <b-form-input
            type="number"
            id="input-1"
            placeholder="Masukkan nomor telepon"
            v-model="form.company_phone"
            trim
            required
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Linkedin" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan nama linkedin"
            v-model="form.company_linkedin"
            trim
            required
            class="mb-2"
            v-on:keyup.enter="submit"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'editPtProfileForm',
  data() {
    return {
      // company_id: '',
      // companys: [],
      form: {
        company_name: '',
        company_field: '',
        company_place: '',
        company_description: '',
        company_email: '',
        company_instagram: '',
        company_linkedin: '',
        company_phone: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addComForm: 'addComForm'
    }),
    submit() {
      // this.addComForm(this.form)
      if (
        this.form.company_name.length < 1 ||
        this.form.company_field.length < 1 ||
        this.form.company_place.length < 1 ||
        this.form.company_description.length < 1 ||
        this.form.company_email.length < 1 ||
        this.form.company_instagram.length < 1 ||
        this.form.company_phone.length < 1 ||
        this.form.company_linkedin.length < 1
      ) {
        // alert('all input field must be filled')
        this.$swal.fire({
          position: 'center',
          icon: 'error',
          title: 'all input field must be filled',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.addComForm(this.form)
      }
    }
  },
  computed: {
    ...mapGetters({
      company: 'userData'
    })
  }
}
</script>

<style scoped>
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
  margin: 0 0 100px 0;
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
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

textarea {
  height: 150px;
}

@media (max-width: 575.98px) {
  .profile {
    width: 100%;
    margin: 0 0 150px 0;
  }
}
</style>
