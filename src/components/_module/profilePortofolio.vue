<template>
  <div>
    <nav>
      <Navbar />
    </nav>
    <b-container fluid class="container">
      <div class="headerBg"></div>
      <div class="main">
        <Cardprofile />
        <Protofoliotab />
      </div>
    </b-container>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Cardprofile from '../_base/profileCard'
import Protofoliotab from '../_base/portofolioTab'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'
export default {
  name: 'Portofolio',
  components: {
    Cardprofile,
    Protofoliotab,
    Footer,
    Navbar
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  background-color: #e5e5e5;
}
.main {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
footer {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: relative;
  bottom: 0;
  left: 0;
}
nav {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
