<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Pengalaman kerja</h2>
        <hr />
        <form action>
          <label for>Posisi</label>
          <br />
          <input type="text" placeholder="web developer" />
          <br />
          <div class="pt">
            <label for>Nama perusahaan</label>
            <br />
            <input type="text" placeholder="PT Harus bisa" />
            <br />
            <label for>Bulan/tahun</label>
            <br />
            <input type="text" placeholder="Januari 2018" />
          </div>
          <br />
          <label for>Deskripsi singkat</label>
          <br />
          <textarea placeholder="Deskripsikan pekerjaan anda"></textarea>
          <br />
          <hr />
          <button type="submit">Tambah pengalaman kerja</button>
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
