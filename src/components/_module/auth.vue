<template>
  <div class="container">
    <div class="leftBg">
      <div class="icon">
        <div class="imgIcon"></div>
        <p>Badag</p>
      </div>
      <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
      <div class="bgImg"></div>
    </div>
    <div v-if="isReset === false" class="formHead">
      <div class="formTitel">
        <h4>Hallo, Badagers</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          similique ipsum exercitationem voluptates quos iure quibusdam voluptas
          consectetur pariatur deleniti.
        </p>
      </div>
      <form class="authForm" @submit.prevent="onSubmit">
        <div v-if="isRegist === false" class="login">
          <p>Email</p>
          <input
            v-if="isPt === false"
            type="email"
            placeholder="Masukkan alamat emali"
            v-model="formLogin.user_email"
          />
          <input
            v-if="isPt === true"
            type="email"
            placeholder="Masukkan alamat emali"
            v-model="formLoginPt.company_email"
          />
          <p>Kata Sandi</p>
          <input
            v-if="isPt === false"
            type="password"
            placeholder="Masukkan kata sandi"
            v-model="formLogin.user_password"
          />
          <input
            v-if="isPt === true"
            type="password"
            placeholder="Masukkan kata sandi"
            v-model="formLoginPt.company_password"
          />
          <br />
          <p>
            <a @click="onForgot" href="#reset">Lupa kata sandi?</a>
          </p>
          <button type="submit">Masuk</button>
          <p>
            Anda belum punya akun?
            <a href="#daftar" @click="onRegist">Daftar disini</a>
          </p>
        </div>
        <div v-if="isRegist === true && isPt === false" class="register">
          <p>Nama</p>
          <input type="text" placeholder="Masukkan nama panjang" v-model="formRegister.user_name" />
          <p>Email</p>
          <input type="email" placeholder="Masukkan alamat email" v-model="formRegister.user_email" />
          <p>No handphone</p>
          <input
            type="number"
            placeholder="Masukkan no handphone"
            v-model="formRegister.user_phone"
          />
          <p>Kata sandi</p>
          <input type="password" placeholder="Masukkan kata sandi" v-model="formRegister.password" />
          <p>Konfirmasi kata sandi</p>
          <input
            type="password"
            placeholder="Masukkan konfirmasi kata sandi"
            v-model="formRegister.password_confirm"
          />
          <br />
          <button type="submit">Daftar</button>
          <p>
            Anda sudah punya akun?
            <a href="#masuk" @click="onLogin">Masuk disini</a>
          </p>
        </div>
        <div v-if="isRegist === true && isPt === true" class="registerPt">
          <p>Nama</p>
          <input type="text" placeholder="Masukkan nama panjang" v-model="formRegisterPt.user_name" />
          <p>Email</p>
          <input
            type="email"
            placeholder="Masukkan alamat email"
            v-model="formRegisterPt.user_email"
          />
          <p>Perusahaan</p>
          <input
            type="text"
            placeholder="Masukkan nama perusahaan"
            v-model="formRegisterPt.user_pt"
          />
          <p>Jabatan</p>
          <input
            type="text"
            placeholder="Posisi di perusahaan Anda"
            v-model="formRegisterPt.user_position"
          />
          <p>No handphone</p>
          <input
            type="number"
            placeholder="Masukkan no handphone"
            v-model="formRegisterPt.user_phone"
          />
          <p>Kata sandi</p>
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            v-model="formRegisterPt.password"
          />
          <p>Konfirmasi kata sandi</p>
          <input
            type="password"
            placeholder="Masukkan konfirmasi kata sandi"
            v-model="formRegisterPt.password_confirm"
          />
          <br />
          <button type="submit">Daftar</button>
          <p>
            Anda sudah punya akun?
            <a href="#masuk" @click="onLoginPt">Masuk disini</a>
          </p>
        </div>
      </form>
    </div>
    <div v-if="isReset === true" class="formHead">
      <div class="formTitel">
        <h4>Reset password</h4>
        <p>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
      </div>
      <form class="resetForm" @submit.prevent="onSubmitReset">
        <p>Email</p>
        <input type="email" placeholder="Masukkan alamat emali" v-model="formReset.user_email" />
        <br />
        <button type="submit">Send password reset email</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Auth',
  data() {
    return {
      msg: '',
      isRegist: false,
      isPt: true,
      isReset: false,
      formLogin: {
        user_email: '',
        user_password: ''
      },
      formLoginPt: {
        company_email: '',
        company_password: ''
      },
      formRegister: {
        user_name: '',
        user_email: '',
        user_phone: null,
        password: '',
        password_confirm: ''
      },
      formRegisterPt: {
        user_name: '',
        user_email: '',
        user_pt: '',
        user_position: '',
        user_phone: null,
        password: '',
        password_confirm: ''
      },
      formReset: {
        user_email: ''
      }
    }
  },
  props: [],
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['login', 'loginPt']),
    onRegist() {
      this.isRegist = true
    },
    onLogin() {
      this.isRegist = false
    },
    onLoginPt() {
      this.isRegist = false
    },
    onForgot() {
      this.isReset = true
    },
    onSubmit() {
      if (this.isRegist === false) {
        if (this.isPt === false) {
          alert('login public')
          this.login(this.formLogin)
            .then((result) => {
              alert(result.msg)
              console.log(result.data)
              this.$router.push('/')
            })
            .catch((error) => {
              this.msg = error.data.msg
              alert(this.msg)
            })
        } else {
          alert('login company')
          this.loginPt(this.formLoginPt)
            .then((result) => {
              alert(result.msg)
              console.log(result.data)
              this.$router.push('/')
            })
            .catch((error) => {
              this.msg = error.data.msg
              alert(this.msg)
            })
        }
      } else if (this.isRegist === true && this.isPt === false) {
        console.log('Register jobseeker')
      } else {
        console.log('Register perusahaan')
      }
    },
    onSubmitReset() {
      console.log('Sending email success')
      this.$router.push('/reset')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  width: 1280px;
  height: 688px;
  display: flex;
  position: relative;
  box-sizing: border-box;
}
.formHead {
  position: relative;
  width: 100%;
  left: 55px;
  padding-top: 60px;
}
.formTitel {
  height: 150px;
  position: relative;
}
.formTitel h4 {
  margin-bottom: 15px;
  font-size: 27px;
}
.formTitel p:nth-of-type(1) {
  font-size: 15px;
}
.authForm {
  width: 100%;
  position: relative;
  top: -10px;
}
.login p:nth-of-type(1) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.login input:nth-of-type(1) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.login p:nth-of-type(2) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.login input:nth-of-type(2) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.login p:nth-of-type(3) {
  position: relative;
  color: #000000;
  font-size: 15px;
  text-align: right;
  margin-bottom: 20px;
}

.login p:nth-of-type(4) {
  position: relative;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
}
.login p:nth-of-type(4) a {
  color: #fbb017;
}
.login button:nth-of-type(1) {
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #fbb017;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}
.register button:nth-of-type(1) {
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #fbb017;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
}
.register p:nth-last-of-type(1) {
  position: relative;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
}
.register p:nth-last-of-type(1) a {
  color: #fbb017;
}
.register p:nth-of-type(1) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.register input:nth-of-type(1) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.register p:nth-of-type(2) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.register input:nth-of-type(2) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.register p:nth-of-type(3) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.register input:nth-of-type(3) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.register p:nth-of-type(4) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.register input:nth-of-type(4) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.register p:nth-of-type(5) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.register input:nth-of-type(5) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt button:nth-of-type(1) {
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #fbb017;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
}
.registerPt p:nth-last-of-type(1) {
  position: relative;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
}
.registerPt p:nth-last-of-type(1) a {
  color: #fbb017;
}
.registerPt p:nth-of-type(1) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(1) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(2) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(2) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(3) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(3) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(4) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(4) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(5) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(5) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(6) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(6) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.registerPt p:nth-of-type(7) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.registerPt input:nth-of-type(7) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.resetForm {
  width: 100%;
  position: relative;
  top: -10px;
}
.resetForm p:nth-of-type(1) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.resetForm input:nth-of-type(1) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 30px;
}
.resetForm button:nth-of-type(1) {
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #fbb017;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
.icon {
  position: relative;
  width: 95px;
  height: 35px;
  z-index: 2;
  top: 30px;
  left: 20px;
  box-sizing: border-box;
}
.imgIcon {
  width: 40px;
  height: 100%;
  position: absolute;
  left: 0;
  background-image: url(../../assets/img/layers.png);
  background-size: cover;
  background-repeat: round;
}
.icon p {
  position: absolute;
  right: 0;
  top: 7px;
  color: rgb(240, 240, 240);
}
.leftBg {
  position: relative;
  width: 1180px;
  margin-right: 15px;
  background-image: url(../../assets/img/agent.png);
  background-size: cover;
  background-repeat: round;
  box-sizing: border-box;
}
.leftBg h1 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  position: relative;
  width: 400px;
  font-size: 38px;
  top: 30%;
  margin: auto;
  font-weight: bolder;
  line-height: 60px;
  z-index: 1;
  right: 20px;
}
.bgImg {
  position: absolute;
  background-image: url(../../assets/img/Group.png);
  background-size: cover;
  background-repeat: round;
  opacity: 0.8;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
