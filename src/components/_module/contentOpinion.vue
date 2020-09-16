<template>
  <div class="slider-opinion">
    <h2 class="text-center">Their Opinion About Badag</h2>
    <carousel :autoplay="true" :nav="false">
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.</b-card-text
        >
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
