<template>
	<div>
		<v-container fluid class="navbar" :class="{'navbar--hidden': !showNavbar}" style="z-index:99">
      <v-row class="transparent">
        <v-col>
          <v-row class="" >
            <img src="@/assets/paroha.png" width="120px" height="100px" alt="">
            <h4 class="mt-10 ml-n4">PT PAROHA TOPAZ SEJAHTERA</h4>
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
                <!-- <i class="material-icons">
                  email
                </i> -->
                <v-icon>email</v-icon>
                support@paroha.id
              </v-row>
            </v-col>
            <v-col style="font-weight:bold;">
              <v-row >
                <!-- <i class="material-icons">
                  access_time
                </i> -->
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
                  <v-expansion-panel-header hide-actions ><a href="#sejarah" @click="us=false" style="color:black" title="">Sejarah</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions ><a href="#visiMisi" style="color:black" @click="us=false" title="">Visi Misi</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions ><a href="#team" style="color:black" @click="us=false" title="">Tim Kami</a></v-expansion-panel-header>
                  <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col>
              <v-btn text color="primary" ><a href="#produk" title="">PRODUK & JASA</a></v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary">REKANAN</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary">BERITA</v-btn>
            </v-col>
            <v-col>
              <v-btn text color="primary">KONTAK</v-btn>
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
                <v-expansion-panel-header hide-actions ><a href="#sejarah" title="">Sejarah</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions ><a href="#visiMisi" title="">Visi Misi</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions ><a href="#team" title="">Tim Kami</a></v-expansion-panel-header>
                <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
              </v-expansion-panel-content>
           </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header hide-actions><a href="#produk" title="">PRODUK & JASA</a></v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>REKANAN</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>BERITA</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>KONTAK</v-expansion-panel-header>
          </v-expansion-panel>
        </v-expansion-panels>  
      </v-row>
    </v-container>
    <!-- <background></background> -->
    <v-container class="header d-flex align-center" fluid>
      <v-row class="ml-12">
        <v-col>
          <h1>Jasa Terbaik <span style="color:red">Konsultasi</span> </h1>
          <h2>dengan Tim Profesional</h2>
          <br>
          <v-btn color="error">Contact us</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- <profile :sejarah="sejarah" :visiMisi="visiMisi" ref="profile"></profile> -->
    <v-container fluid class="profile align-center my-12" id="sejarah">    
      <v-row no-gutters class="sejarah" >
        <v-col cols="12" md="8" >
          <h1 style="color:red;text-decoration:underline;margin-left:21%">TENTANG KAMI</h1> 
        </v-col>
      </v-row>
      <br>
      <v-row no-gutters class="sejarah" justify="center">
        <v-col cols="12" md="3" class="ml-12">
          <img src="@/assets/Tambun.jpg" height="90%" width="90%" alt=""> 
        </v-col>
        <v-col cols="10" md="6" id="sejarah" v-wow data-wow-delay="0.2s" data-wow-duration="2s" class="text bounceInUp">
          <h1>SEJARAH</h1>
          <h3 style="color:red">
            Kami fokus bergerak dalam bidang jasa konsultasi dengan mengikuti kebutuhan banyaknya perusahaan dengan tenaga ahli yang diminati
          </h3>
          <br>
          <p>
            Layanan jasa yang membantu perusahaan anda dalam pengembangan pertanian dan pedesaan, jasa studi, penelitian dan bantuan teknik, keuangan, konsultasi manajemen maupun jasa khusus
          </p>
          <br>
          <p>
            PT Paroha Topaz Sejahtera berdiri pada tanggal 11 Februari 2019, no.7 berdasarkan akta notaris H.Sukirno, Perusahaan ini fokus bergerak dalam bidang jasa konsultasi dengan mengikuti kebutuhan banyaknya perusahaan dengan tenaga ahli yang diminati
          </p>
          <br>
          <p>
            PT Paroha Topaz Sejahtera memperoleh izin dengan KADIN dan INKINDO. Sejak bulan Juni 2019, badan usaha yang di kembangkan pengembangan pertanian dan pedesaan, jasa studi, penelitian dan bantuan teknik, keuangan, konsultasi manajemen maupun jasa khusus
          </p>
        </v-col>
      </v-row>
      <v-row class="visi-misi fadeInUp" v-wow data-wow-delay="1s" data-wow-duration="2s" id="visiMisi">
        <v-col>
          <h2>VISI</h2>
          <p>Menjadi Perusahaan nasional yang kompetitif, andal dan terpercaya di bidang pemetaan, inspeksi, sertifikasi, konsultasi dan pelatihan</p>
        </v-col>
      </v-row>
      <v-row class="visi-misi">
        <v-col>
          <h2>MISI</h2>
          <p>
            Menciptakan Nilai Ekonomi kepada para pemangku kepentingan, terutama pelanggan melalui layanan jasa inspeksi, pemetaan, sertifikasi, konsultasi serta jasa terkait lainnya untuk menjamin kepastian berusaha
          </p>
        </v-col>
      </v-row>
    </v-container>
  <hr class="mx-12">
    <!-- <produkjasa :produk="produk"></produkjasa> -->
    <v-container class="my-12" id="produk">
      <v-row justify="center" class="ma-12">
        <h1>Produk dan Jasa</h1>
      </v-row>
      <v-row>
        <v-card
          class="mx-auto my-6"
          width="400"
          height="auto"
          v-for="content in data"
          :key="content.id">
          <br>
          <v-img
            class="mx-auto mt-12"
            height="100px"
            width="100px"
            :src="content.url">
          </v-img>
          <br>
          <v-card-subtitle class="pl-4 mt-6" style="font-weight:bold">{{content.title}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{content.description}}</div>
            <div v-for="add in content.point" :key="add.id" class="mt-4 ml-2">
              <v-row>
                <i class="material-icons">
                add
                </i>
                <h4>{{add}}</h4>
              </v-row>
            </div>
          </v-card-text>
            <v-btn class="float-right"
              color="orange"
              text>

              Detail...
            </v-btn>
        </v-card>
      </v-row>
    </v-container>
    <!-- <team :team="team"></team> -->
    <hr class="mx-12">
    <v-container class="align-center" id="team">
      <v-row justify="center" class="my-12">
        <h1>MEET THE TEAM</h1>
      </v-row>
      <v-row no-gutters class="my-12">
        <v-col class="text-center my-6">
          <v-avatar width="250" height="270">
            <img
              src="@/assets/Tambun.jpg"
              alt="Tambun">
          </v-avatar>
          <h3 class="text-center mt-12">Hendra Irwanto Tambun</h3>
          <br>
          <hr class="mx-12">
          <br>
          <h2>Direktur Utama</h2>
        </v-col>
        <v-col class="text-center my-6">
          <v-avatar width="250" height="270">
            <img
              src="../assets/Tallo.jpg"
              alt="tallo">
          </v-avatar>
          <h3 class="text-center mt-12">Armandus Jong Tallo</h3>
          <br>
          <hr class="mx-12">
          <br>
          <h2>Wakil Direktur Utama</h2>
        </v-col>
        <v-col class="text-center my-6">
          <v-avatar width="250" height="270">
            <img
              src="../assets/tobing.jpg"
              alt="tobing">
          </v-avatar>
          <h3 class="text-center mt-12">Panuturi L Tobing</h3>
          <br>
          <hr class="mx-12">
          <br>
          <h2>Direktur Keuangan</h2>
        </v-col>
        <v-col class="text-center my-6">
          <v-avatar width="250" height="270">
            <img
              src="../assets/Robintang.jpg"
              alt="John">
          </v-avatar>
          <h3 class="text-center mt-12">Robintang Tua Simarmata</h3>
          <br>
          <hr class="mx-12">
          <br>
          <h2>Direktur Operasional</h2>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col v-for="item in team" :key="item.id">     
        <v-card style="height:100%" elevation="10" >
          <v-card-text style="font-weight:bold">
            <div>
              {{item.text}}
            </div>
          </v-card-text>
          <div class="name">
            
            <v-row style="height:130px;" class="mx-12 mt-12">
              <v-avatar width="80" height="80" class="mt-n6">
                <img
                  :src="item.url"
                  alt="">
              </v-avatar>
              <div class="ml-10 mt-6" style="font-weight:bold">{{item.name}} </div>
            </v-row>
          </div>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer
    dark
    padless>
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Paroha</strong>
      </v-card-text>
    </v-card>
  </v-footer>
	</div>
</template>


<script>
// import Profile from './Profile.vue'
import Background from './Header.vue'
// import Produkjasa from './ProdukJasa.vue'
// import Team from './Team.vue'

	export default {
		name: 'Single',
    components: {
      Background
    },
		data () {
			return {
				show: false,
				us: false,
        showNavbar: true,
        lastScrollPositon: 0,
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram',
        ],
        data: [
          {
            url: require('@/assets/paroha.png'),
            title: 'PEMETAAN',
            description: 'Pemetaan atau yang disebut dengan Geomapping Peta merupakan suatu gambaran yang ada dari permukaan bumi ini yang di gambarkan di bidang datar dalam proyeksi tertentu'
          },
          {
            url: require('@/assets/paroha.png'),
            title: 'PELATIHAN',
            description: 'Kami menyediakan jasa pelatihan yang membantu pemangku bisnis terutama dalam meningkatkan kompetensi dan kapasitas di bidang',
            point: [ 'Engineering Management', 'IT Consultant', 'Geometric Training']
          },
          {
            url: require('@/assets/paroha.png'),
            title: 'PEMETAAN',
            description: 'Kami menyediakan jasa konsultasi profesional, handal dan tersertifikasi kompetensinya dan memiliki kapasitas di bidang',
            point: [ 'Engineering Management', 'IT Consultant', 'Geometric Training']
          }
        ],
        team: [
          {
            text: 'Magister di bidang manajemen dan ekonomi bisnis di UGM, kelahiran tahun 1966 ini terjun ke lapangan sudah lebih dari 28 tahun. Bidang keahlian project engineering dan sebagai penilai publik pada tahun 2018.',
            url: require('../assets/Aksan.jpg'),
            name: 'M Aksan Muzakir Engineer.'
          },
          {
            text: 'Magister di bidang manajemen dan ekonomi bisnis di UGM, kelahiran tahun 1966 ini terjun ke lapangan sudah lebih dari 28 tahun. Bidang keahlian project engineering dan sebagai penilai publik pada tahun 2018.',
            url: require('../assets/Dera.jpg'),
            name: 'Dera Saraswati S.T'
          },
          {
            text: 'Magister di bidang manajemen dan ekonomi bisnis di UGM, kelahiran tahun 1966 ini terjun ke lapangan sudah lebih dari 28 tahun. Bidang keahlian project engineering dan sebagai penilai publik pada tahun 2018.',
            url: require('../assets/Hardinal.jpg'),
            name: 'Prof.Dr.Hardinal M.Sc'
          }
        ]
    
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
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition

      },
			home () {
				this.$router.push({name:'home'}).catch(err => {})
			},
      produk () {
        this.$router.push({name:'produk'})
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
.profile {
    height: 100%;
  }
  .visi-misi {
    margin-left: 10%;
  }
  .sejarah {
    margin-left: 5%;
  }
  .image {
    margin-left:1%;
  }
  a {
    text-decoration: none;
  }
  .name {
    background: rgb(154, 154, 231);
  }
  .header {
    background: url('../assets/Gambar-1.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 890px;
  }
  
</style>