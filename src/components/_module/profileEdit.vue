<template>
  <b-container fluid class="container">
    <div class="headerBg"></div>
    <ProfileCardEdit />
    <div class="form-edit">
      <EditProfileForm class="mb-4" />
      <EditProfileFormSkill class="mb-4" />
      <EditProfileFormExperience class="mb-4" />
    </div>
  </b-container>
</template>

<script>
import ProfileCardEdit from '../_base/profileCardEdit'
import EditProfileForm from '../_base/editProfileForm'
import EditProfileFormExperience from '../_base/editProfileFormExperience'

export default {
  name: 'profilEdit',
  components: {
    ProfileCardEdit,
    EditProfileForm,
    EditProfileFormExperience
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
  background-color: #e5e5e5;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}

.form-edit {
  display: flex;
  flex-direction: column;
}
</style>
