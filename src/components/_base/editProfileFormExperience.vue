<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Skill</h2>
        <hr />
        <b-input-group>
          <b-form-input placeholder="type" v-model="skill"></b-form-input>
          <template v-slot:append>
            <b-button class="skill-button" @click="addSkill">Tambah</b-button>
          </template>
        </b-input-group>
        <div class="skill">
        <div v-for="(item, index) in getFullUserData.skills" :key="index">
          <p>{{item + " "}}<label @click="delSkill(item)">x</label></p>
        </div>
      </div>
      </div>
    </div>
    <div v-if="btnClick === true" class="experience"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'editProfileForm',
  data() {
    return {
      btnClick: false,
      skill: ''
    }
  },
  computed: {
    ...mapGetters(['userData', 'getFullUserData'])
  },
  created() {
    this.getDataUsers()
  },
  methods: {
    ...mapActions(['addSkills', 'userLoginData', 'deleteSkill']),
    delSkill(item) {
      this.deleteSkill([this.userData.user_id, item])
        .then((response) => { this.getDataUsers() })
        .catch((error) => { console.log(error) })
    },
    getDataUsers() {
      this.userLoginData()
    },
    addSkill() {
      const data = {
        user_id: this.userData.user_id,
        skill: this.skill
      }
      this.addSkills(data)
        .then((response) => { this.getDataUsers() })
        .catch((error) => { console.log(error) })
      this.skill = ''
    }
  }
}
</script>

<style scoped>
.skill {
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 10px;
}
.skill div {
  height: 33px;
  margin-right: 10px;
  margin-bottom: 15px;
}
.skill p {
  height: 30px;
  border: 1px solid #e79c04;
  font-size: 12px;
  margin-right: 5px;
  padding: 3px 7px;
  color: #cf8c07;
  background-color: rgba(251, 176, 23, 0.6);
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.37);
  position: relative;
}
.skill p label{
color: rgba(0, 0, 0, 0.589);
position: relative;
font-size: 12px;
margin-left: 5px;
font-weight: bold;
cursor: pointer;
}
.skill p label:hover{
  color: rgba(252, 4, 4, 0.692);
}

.skills {
  margin: 0 0 0 0;
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
}

.experience {
  margin: 0 0 0 0;
  padding: 0;
  position: relative;
  width: 730px;
  height: 100px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: rgb(255, 255, 255);
}

.content {
  position: relative;
}

textarea {
  height: 150px;
}

.skill-button {
  background-color: #fbb017;
}

@media (max-width: 575.98px) {
  .skills {
    width: 350px;
  }
}
</style>
