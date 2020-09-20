<template>
  <div class="slider-opinion">
    <h2 class="text-center">Their Opinion About BADAG Technology</h2>
    <carousel :autoplay="true" :nav="false">
      <b-card
        title="Bagas Afrizal"
        sub-title="Frontend Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Goks, dengan adanya BADAG Technology, saya dapat dengan cepat menemukan pekerjaan yang sesuai passion saya. Dan juga bisa bekerja di Perusahaan ternama.</b-card-text>
      </b-card>
      <b-card
        title="Arqi Alfaritsi"
        sub-title="Full Stack Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Alhamdulliah, berkat BADAG Technology saya bisa bekerja disebuah Perusahaan ternama di Ibukota. Prosesnya mudah dan juga cepat. BADAG Technology memang The Best.</b-card-text>
      </b-card>
      <b-card
        title="Dimas Prayoga"
        sub-title="Backend Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Terima kasih BADAG Technology, baru daftar 3 minggu saya sudah berhasil diterima disebuah perusaan IT ternama di Jakarta. Sukses terus BADAG Technology</b-card-text>
      </b-card>
      <b-card
        title="Arif Rahman"
        sub-title="Frontend Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Awalnya saya sempat ragu dengan BADAG Technology, tapi setelah mencoba mendatar, tidak lama saya sudah mencapatkan pekerjaan. God Jobs BADAG Technology.</b-card-text>
      </b-card>
      <b-card
        title="Galuh Prahadi"
        sub-title="Backend Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Banyak teman yang merekomendasikan untuk mendaftar di BADAG Technology, dan ternyata benar, saya langsung dapat pekerjaan disebuah perusaan ternama</b-card-text>
      </b-card>
      <b-card
        title="UDIN"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text
          class="text-center"
        >Akhirnya saya bisa bekerja diperusahaan IT ternama, dan tidak membutuhkan waktu yang lama. Terima kasih BADAG Technology, sukses selalu</b-card-text>
      </b-card>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'ContentOpinion',
  components: {
    carousel
  }
}
</script>

<style scoped>
.slider-opinion {
  background: #e5e5e5;
  padding: 50px;
}

.slider-opinion h2 {
  margin-bottom: 30px;
}

.owl-carousel .owl-item img {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 20px auto;
}

.card-title {
  text-align: center;
}

.text-muted {
  text-align: center;
}
</style>
