<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Portofolio</h2>
        <hr />
        <form action>
          <p>Nama aplikasi</p>
          <input type="text" placeholder="Masukan nama aplikasi" />
          <p>link repository</p>
          <input type="text" placeholder="Masukan link repository" />
          <br />
          <label for="typePorto">Type portofolio</label>
          <br />
          <input type="radio" id="appMobile" name="typePorto" />
          <label for="appMobile">Aplikasi mobile</label>
          <input type="radio" id="appWeb" name="typePorto" />
          <label for="appWeb">Aplikasi web</label>
          <p>Upload gambar</p>
          <input type="file" placeholder="Upload gambar" />
          <br />
          <hr />
          <button type="submit">
            <p>Tambah portofolio</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProfileExp',
  data() {
    return {}
  }
}
</script>

<style scoped>
.skills {
  margin-left: 30px;
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
}

.content {
  position: relative;
}
</style>
