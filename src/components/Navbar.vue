<template>
  <div>
    <v-container fluid class="navbar" :class="{'navbar--hidden': !showNavbar}" style="z-index:99">
      <v-row>
        <v-col>
          <v-row >
            <img src="@/assets/paroha.png" width="120px" height="100px" alt="">
            <h4 class="mt-10 ml-n4 d-none d-lg-block">PT PAROHA TOPAZ SEJAHTERA</h4>
          </v-row>    
        </v-col>
        <v-col class="d-none d-lg-block">
          <v-row no-gutters>
            <v-col>
              <v-row>
              <i class="material-icons">
                phone
              </i>
              <h4>+6221 4614 889</h4>
              </v-row>
            </v-col>
            <v-col style="font-weight:bold;">
              <v-row >
                <v-icon>email</v-icon>
                support@paroha.id
              </v-row>
            </v-col>
            <v-col style="font-weight:bold;">
              <v-row >
                <v-icon>access_time</v-icon>
                Senin - Jumat : 09.00 sd 18.00 WIB
              </v-row>
            </v-col>
          </v-row>
          <hr class="mt-7">
          <v-row>
            <v-col>
              <v-btn text color="primary" @click="home">HOME</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary" @click="us=!us">TENTANG KAMI</v-btn>
              <v-expansion-panels v-show="us">
                <v-expansion-panel justify="center">
                  <v-expansion-panel-header hide-actions ><a href="/#sejarah" @click="us=false" style="color:black" title="">Sejarah</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions ><a href="/#visiMisi" style="color:black" @click="us=false" title="">Visi Misi</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions ><a href="/#team" style="color:black" @click="us=false" title="">Tim Kami</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col>
              <v-btn text color="primary" ><a href="/#produk" title="">PRODUK & JASA</a></v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary">REKANAN</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary" @click="berita">BERITA</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary" @click="contact">KONTAK</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>          
    </v-container>        
    <v-container fluid :class="{'navbar-hidden': !showNavbar}" style="position:fixed;z-index:99" class="pr-4 mt-10">
      <v-row justify="end">
        <v-app-bar-nav-icon :class="{'navbar-hidden': !showNavbar}" class="d-lg-none blue" @click="show=!show"></v-app-bar-nav-icon>
        <v-expansion-panels class="d-lg-none" v-show="show">
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="home">HOME</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Tentang Kami</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-expansion-panel-header hide-actions ><a href="/#sejarah" title="">Sejarah</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions ><a href="/#visiMisi" title="">Visi Misi</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions ><a href="/#team" title="">Tim Kami</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
              </v-expansion-panel-content>
           </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header hide-actions><a href="/#produk" title="">PRODUK & JASA</a></v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>REKANAN</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="berita">BERITA</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="contact">KONTAK</v-expansion-panel-header>
          </v-expansion-panel>
        </v-expansion-panels>  
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        us: false,
        showNavbar: true,
        lastScrollPositon: 0,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition

      },
      home () {
        this.$router.push({name:'home'}).catch(err => {})
      },
      contact () {
        this.$router.push({name:'contact'})
      },
      berita () {
        this.$router.push({name:'berita'})
      }
    }
  }
</script>

<style scoped>
.navbar {
  height: auto;
  width: 100vw;
  /* background: hsl(155, 31%, 50%); */
  background: rgb(233, 230, 230);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
a {
    text-decoration: none;
  }
</style>