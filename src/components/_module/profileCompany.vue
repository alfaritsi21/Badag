<template>
  <div>
    <ProfilePt />
    <Navbar />
    <main>
      <b-container>
        <div class="company-latar">
          <img :src="urlAPI + dataCompany.company_image" alt="Foto Profile" />
          <p class="float-right">
            <b-icon icon="pencil-fill"></b-icon>Ubah Latar
          </p>
        </div>
        <div class="main-company text-center">
          <h3>{{dataCompany.company_name}}</h3>
          <h6>{{dataCompany.company_position}}</h6>
          <p>
            <b-icon icon="map"></b-icon>Purwokerto, Jawa Tengah
          </p>
          <p class="description">{{dataCompany.company_description}}</p>
          <b-button class="edit-company" @click="setCompany(dataCompany)">Edit Profile</b-button>
          <div class="contact-company">
            <!-- <p>
              <img src="../../assets/img/mail.png" alt />
              martabatjaya@gmail.com
            </p>
            <p>
              <img src="../../assets/img/instagram.png" alt class="text-left" />
              martabat_jaya
            </p>-->
            <b-row>
              <b-col cols="5" md="5" sm="5">
                <img src="../../assets/img/mail.png" alt style="padding: 0 0;" />
                <img src="../../assets/img/instagram.png" alt style="padding-top: 17px;" />
                <img src="../../assets/img/phone.png" alt style="padding-top: 17px;" />
                <!-- <img src="../../assets/img/i.png" alt /> -->
                <img src="../../assets/img/in.png" alt style="padding-top: 20px;" />
              </b-col>
              <b-col cols="7" md="7" sm="7" class="text-left">
                <p>{{dataCompany.company_email}}</p>
                <p>@{{dataCompany.company_instagram}}</p>
                <p>{{dataCompany.company_phone}}</p>
                <p>{{dataCompany.company_linkedin}}</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../_base/Navbar'
import Footer from '../_base/footer'
import { mapGetters } from 'vuex'
import axios from 'axios'

import ProfilePt from '../_base/modalProfilePt'
export default {
  name: 'profileCompany',
  data() {
    return {
      company_id: '',
      urlAPI: process.env.VUE_APP_URL,
      dataCompany: [],
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
  components: {
    Navbar,
    Footer,
    ProfilePt
  },
  created() {
    this.getDataCompany()
  },
  methods: {
    onEdit() {
      this.$router.push('/profile-pt-edit')
    },
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
    setCompany(data) {
      this.form = {
        company_name: data.company_name,
        company_field: data.company_field,
        company_place: data.company_place,
        company_description: data.company_description,
        company_email: data.company_email,
        company_instagram: data.company_instagram,
        company_linkedin: data.company_linkedin,
        company_phone: data.company_phone
      }
      this.company_id = data.company_id
      this.$router.push('/profile-pt-edit')
      console.log(this.form)
    }
  },
  computed: {
    ...mapGetters({
      company: 'userData'
    })
  }
}
</script>

<style>
main {
  padding: 100px 0;
  background: #e5e5e5;
}

main .company-latar {
  background: #5e50a1;
  border-radius: 8px 8px 0 0;
  height: 175px;
}
main .company-latar p {
  color: #fff;
  font-size: 20px;
  padding: 10px 25px;
  margin-top: 125px;
}
.b-icon.bi {
  margin-right: 5px;
  font-size: 18px;
}
main .company-latar img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 45%;
}
main .main-company {
  background: #fff;
  border-radius: 0 0 8px 8px;
  padding: 100px 0;
}
main .main-company p {
  color: #9ea0a5;
}
main .main-company .description {
  width: 600px;
  margin: 0 auto;
}
main .main-company .edit-company {
  background: #5e50a1;
  padding: 10px 100px;
  margin: 25px 0;
}
main .main-company img {
  display: block;
  margin-left: 100%;
}
main .main-company .contact-company p {
  margin-left: 10px;
}
</style>
