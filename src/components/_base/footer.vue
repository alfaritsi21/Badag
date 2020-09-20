<template>
  <div class="footer">
    <img src="../../assets/logo.png" style="width:50px;margin-bottom:30px;" />
    <span style="font-size:32px;
    font-weight:bold;
    color:rgba(31,166,222,1); ">ADAG</span>
    <p>BADAG Technology adalah situs Job Portal Digital, dimana tempat untuk para Jobseeker mencari pekerjaan yang berkualiatas.</p>
    <hr />
    <b-row>
      <b-col cols="6" md="6" sm="6">
        <p>2020 &copy;BADAG. All Right Reserved</p>
      </b-col>
      <b-col cols="6" md="6" sm="6">
        <div class="contact float-right">
          <p>Telepon</p>
          <p class="email">Email</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #5e50a1;
  padding: 70px 150px;
  display: block;
  color: #fff;
}

.footer img {
  width: 178px;
  height: 50px;
}

.footer p {
  margin: 20px 0;
  width: 381px;
  font-size: 18px;
}

.footer hr {
  background: #fff;
  margin-top: 50px;
}

.footer .contact {
  margin-top: 25px;
}

.footer .contact p {
  display: inline;
}

.footer .contact .email {
  margin-left: 50px;
}
</style>
