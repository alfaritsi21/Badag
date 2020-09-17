<template>
  <div>
    <div class="profile">
      <div class="content">
        <h2 style="color:grey">Skill</h2>
        <hr />
        <b-input-group>
          <b-form-input></b-form-input>

          <template v-slot:append>
            <b-button class="skill-button">Button</b-button>
          </template>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProfileForm',
  data() {
    return {}
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

.profile {
  margin-left: 30px;
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

.skill-button {
  background-color: #fbb017;
}
</style>
