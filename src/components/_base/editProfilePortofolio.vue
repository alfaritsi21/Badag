<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Portofolio</h2>
        <hr />
        <form action>
          <b-form-group id="fieldset-1" label="Nama aplikasi" label-for="input-1">
            <b-form-input
              id="input-1"
              placeholder="Masukkan nama aplikasi"
              v-model="form.app_name"
              trim
              class="mb-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Type portofolio">
            <b-form-radio-group
              id="radio-group-2"
              v-model="form.type_portofolio"
              name="radio-sub-component"
            >
              <b-form-radio value="1">Aplikasi mobile</b-form-radio>
              <b-form-radio value="2">Aplikasi web</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <!-- <div class="mt-3">Upload gambar: {{ form.image ? form.image.name : '' }}</div> -->
          <!-- <input type="file" @change="fileUpload" /> -->
          <!-- v-model="form.image"
          :state="Boolean(form.image)"-->
          <b-form-file
            @change="fileUpload"
            placeholder="Upload portofolio, drop here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <br />
          <hr />
          <b-button block variant="info" @click="addPorto">Tambah portofolio</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'editProfileExp',
  data() {
    return {
      form: {
        user_id: null,
        app_name: '',
        link_repository: 'https://github.com/Glitchfer',
        type_portofolio: '',
        image: ''
      }
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['addPortofolio']),
    addPorto() {
      this.form.user_id = this.userData.user_id
      const data = new FormData()
      data.append('user_id', this.form.user_id)
      data.append('app_name', this.form.app_name)
      data.append('link_repository', this.form.link_repository)
      data.append('type_portofolio', this.form.type_portofolio)
      data.append('image', this.form.image)
      this.addPortofolio(data)
    },
    fileUpload(event) {
      this.form.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
  margin: 0 0 150px 0;
}

.content {
  position: relative;
}

@media (max-width: 575.98px) {
  .skills {
    width: 350px;
  }
}
</style>
