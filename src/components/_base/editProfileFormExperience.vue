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
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(['addSkills']),
    addSkill() {
      // console.log(this.userData.user_id)
      const data = {
        user_id: this.userData.user_id,
        skill: this.skill
      }
      this.addSkills(data)
    }
  }
}
</script>

<style scoped>
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
