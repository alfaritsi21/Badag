<template>
  <b-container fluid class="container">
    <Cardprofile />
    <!-- <Protofoliotab /> -->
  </b-container>
</template>

<script>
import Cardprofile from '../_base/profileCard'
// import Protofoliotab from '../_base/portofolioTab'
export default {
  name: 'Portofolio',
  components: {
    Cardprofile
    // Protofoliotab
  }
}
</script>

<style scoped>
.container {
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
}
</style>
