<template>
  <div class="main-home">
    <Navbar />
    <section class="top-jobs">
      <b-container>
        <h2>Top Jobs</h2>
      </b-container>
    </section>

    <main>
      <b-container>
        <section class="akses-search">
          <div class="searching">
            <input type="text" placeholder="Search for any skill" />
            <b-icon icon="search"></b-icon>
            <b-dropdown id="dropdown-1" text="Sort" right class="m-md-2 sorting" variant="outline">
              <b-dropdown-item>Sorting Berdasarkan Nama</b-dropdown-item>
              <b-dropdown-item>Sorting Berdasarkan Skill</b-dropdown-item>
              <b-dropdown-item>Sorting Berdasarkan Lokasi</b-dropdown-item>
              <b-dropdown-item>Sorting Berdasarkan Freelance</b-dropdown-item>
              <b-dropdown-item>Sorting Berdasarkan Fulltime</b-dropdown-item>
            </b-dropdown>
            <b-button class="btn-search">Search</b-button>
          </div>
        </section>

        <section class="content-searching">
          <b-row v-for="(item, index) in 5" :key="index" class="detail-profile">
            <b-col cols="4" md="2" sm="2">
              <img src="../assets/img/img-search.jpg" />
            </b-col>
            <b-col cols="8" md="8" sm="8" class="detail-users">
              <h4>Username</h4>
              <p>Detail Jobs</p>
              <p>
                <b-icon icon="map"></b-icon>Lorem, ipsum dolor.
              </p>
              <b-button class="btn-skill">PHP</b-button>
              <b-button class="btn-skill">JavaScript</b-button>
              <b-button class="btn-skill">HTML</b-button>
            </b-col>
            <b-col cols="2" md="2" sm="2">
              <b-button @click="onLihat" class="btn-lock-profile">Lihat Profile</b-button>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="12">
              <div :style="[index === 4 ? { borderBottom: 'none' } : null]" class="hr"></div>
            </b-col>
          </b-row>
        </section>

        <section class="paginations">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            align="center"
          ></b-pagination>
        </section>
      </b-container>
    </main>

    <section class="footer">
      <Footer />
    </section>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar.vue'
import Footer from '../components/_base/footer'
export default {
  name: 'PageHomes',
  components: {
    Navbar,
    Footer
  },
  methods: {
    onLihat() {
      this.$router.push('/profile-portofolio')
    }
  }
}
</script>

<style scoped>
.hr {
  margin-top: 20px;
  border-bottom: 1px solid #cecece;
}
.main-home .top-jobs {
  background: #5e50a1;
  padding: 20px 0;
}

.main-home .top-jobs h2 {
  color: #fff;
  padding: 0 10px;
}

.main-home {
  background: #e5e5e5;
}

/* Search */
.main-home .searching {
  background: #fff;
  padding: 10px 0;
  margin: 50px 0;
  border-radius: 8px;
}

.main-home .searching input {
  width: 80%;
  border: none;
  padding: 15px;
  outline: none;
  margin-left: 10px;
}

.main-home .searching .btn-search {
  background: #5e50a1;
  padding: 10px;
}
/* End Search */

/* content-searching */
.main-home .content-searching {
  background: #fff;
  padding: 20px 0;
  margin-bottom: 50px;
  border-radius: 8px;
}

.main-home .content-searching .detail-profile {
  height: 150px;
  margin-bottom: 40px;
}

.main-home .content-searching img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 20px 50px;
}

.main-home .content-searching p {
  color: #9ea0a5;
}

.main-home .content-searching .b-icon.bi {
  margin-right: 10px;
}

.main-home .content-searching .btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid rgba(251, 176, 23, 0.6);
  margin-right: 10px;
}

.main-home .content-searching .btn-lock-profile {
  background: #5e50a1;
  border: 1px solid #5e50a1;
  margin: 50px 0;
  padding: 10px;
}
/* End content-searching */

.main-home .paginations {
  margin-bottom: 50px;
}

@media (max-width: 575.98px) {
  .main-home .content-searching {
    margin-bottom: 0px;
  }
  .main-home .top-jobs {
    padding: 50px 0;
    border-bottom-right-radius: 20px;
  }

  .main-home .content-searching .detail-profile {
    height: 120px;
  }

  .main-home .content-searching h4 {
    font-size: 18px;
  }

  .main-home .content-searching p {
    font-size: 14px;
  }

  .main-home .content-searching img {
    width: 75px;
    height: 75px;
    margin: 20px 30px;
  }

  .main-home .content-searching .btn-skill {
    margin-right: 0;
    /* height: 30px; */
    /* padding: 0; */
    padding: 5px;
    margin: -10px 5px 5px 0;
  }

  .main-home .content-searching .btn-lock-profile {
    display: none;
  }

  .main-home .searching .btn-search {
    float: right;
    margin: 0 10px;
    padding: 5px 10px;
  }

  .main-home .paginations {
    padding: 50px 0;
  }

  .footer {
    display: none;
  }
}
</style>
