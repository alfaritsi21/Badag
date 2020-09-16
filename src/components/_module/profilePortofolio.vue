<template>
  <b-container fluid class="container">
    <div class="headerBg"></div>
    <Cardprofile />
    <Protofoliotab />
  </b-container>
</template>

<script>
import Cardprofile from '../_base/profileCard'
import Protofoliotab from '../_base/portofolioTab'
export default {
  name: 'Portofolio',
  components: {
    Cardprofile,
    Protofoliotab
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
