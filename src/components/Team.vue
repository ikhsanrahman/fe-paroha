<template>
	<div>
		<v-container class="align-center" id="team">
      <v-row justify="center" class="my-12">
        <h1>MEET THE TEAM</h1>
      </v-row>
      <v-row no-gutters class="my-12" data-aos="fade-up">
        <v-col cols="12" md="3" xs="3" class="text-center my-6 ">
          <v-avatar width="220" height="230">
            <img
              src="@/assets/hendra.jpg"
              alt="Tambun">
          </v-avatar>
          <h3 class="text-center mt-12">Hendra Irwanto Tambun</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Direktur Utama</h2>
          <br>
          <p class="text-justify mx-6">
            <b>HENDRA IRWANTO TAMBUN</b> menyelesaikan pendidikan jurusan pertanian di Lampung pada tahun 2005. Menjabat sebagai Direktur Utama. Beliau aktif sebagai rekan dari KJPP PUNG'S Zulkarnain dan rekan cabang Jakarta 1. Parther yang mendirikan perusahaan <b>PT PAROHA TOPAZ SEJAHTERA</b> ini mengembangkan bahwa akan banyak potensi yang dapat dikembangkan sejalan dengan era teknologi yang kian canggih. 
          </p>          
        </v-col>
        <v-col cols="12" md="3" xs="3" class="text-center my-6" data-aos="fade-up">
          <v-avatar width="220" height="230">
            <img
              src="../assets/Tallo.jpg"
              alt="tallo">
          </v-avatar>
          <h3 class="text-center mt-12">Amandus Jong Tallo</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Wakil Direktur Utama</h2>
          <br>
          <p class="text-justify mx-6">
            <b>AMANDUS JONG TALLO</b> Magister Perencanaan Kota dan Daerah di Universitas Gajah Mada. Ahli dalam bidang Pemetaan lebih dari 10 tahun, Dosen Perencanaan wilayah dan kota pada beberapa universitas swasta di indonesia. Beliau adalah tim ahli pemetaan utilitas di DKI Jakarta dan aktif sebagai Presenter KIM Talk (Hi Indo TV).
          </p>
        </v-col>
        <v-col cols="12" md="3" xs="3" class="text-center my-6" data-aos="fade-up">
          <v-avatar width="220" height="230">
            <img
              src="../assets/tobing.jpg"
              alt="tobing">
          </v-avatar>
          <h3 class="text-center mt-12">Panuturi L Tobing</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Direktur Keuangan</h2>
          <br>
          <p class="text-justify mx-6">
            <b>PANUTURI L. TOBING</b> Magister di Universitas Gajah Mada Jurusan Ekonomi Pembangunan Fakultas Ekonomi dan Bisnis. Sebagai Pencetus Pendirian <b>PT PAROHA TOPAZ SEJAHTERA</b> beliau menjabat sebagai Pimpinan dari KJPP PUNG’S Zulkarnain dan Rekan cabang Jakarta 1. Beliau juga aktif sebagai Ketua Bidang Pendidikan dan Wakil Sekretaris Jenderal di <b>Asosiasi Masyarakat Profesi Penilai Indonesia (MAPPI)</b>. Aktif di Asosiasi Analisis Efek Indonesia (AAEI) sebagai Certified Securities Analyst (CSA) dan juga sebagai Asesor (bersertifikat BNSP) di LSP Profesi Pasar Modal dan tenaga pengajar dalam bidang penilaian yang di gelutinya.
          </p>
        </v-col>
        <v-col cols="12" md="3" xs="3" class="text-center my-6" data-aos="fade-up">
          <v-avatar width="220" height="230">
            <img
              src="../assets/robinta.jpg"
              alt="John">
          </v-avatar>
          <h3 class="text-center mt-12">Robintang Tua Simarmata</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Direktur Operasional</h2>
          <br>
          <p class=" text-justify mx-6">
            <b>ROBINTANG TUA SIMARMATA</b> Magister di Universitas Tama Jagakarsa Jurusan Manajemen Proyek. Partner Pendiri <b>PT PAROHA TOPAZ SEJAHTERA</b> ini paham mengenai operasional yang dibutuhkan dalam usaha dalam usaha yang akan dibangunnya.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-none d-lg-block text-center">
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
      </v-row>
      <v-row justify="center" class="d-lg-none">
        <i style="font-size:15px;color:blue" data-aos="fade-up" class="fas fa-circle mx-6"></i>
        <i style="font-size:15px;color:blue" data-aos="fade-up" class="fas fa-circle mx-6"></i>
        <i style="font-size:15px;color:blue" data-aos="fade-up" class="fas fa-circle mx-6"></i>
      </v-row>
      <v-row class="my-12 text-justify" justify="center">
      	<!-- <v-col class="" v-for="data in team" :key="data.id" >      -->
	        <v-card max-width="360" class="mx-4 my-4" style="height:100%" elevation="10" v-for="data in team" :key="data.id" data-aos="fade-up">
	          <v-card-text style="font-weight:bold">
	            <div>
	              {{data.text}} <span style="opacity:0;">{{data.add}}</span>
	            </div>
	          </v-card-text>
            <br>
	          <div style="height:130px;" class="light-blue lighten-2 ">
	            <v-row class="mx-12">
	              <v-avatar width="80" height="80" class="mt-n6">
	                <img
	                  :src="data.url"
	                  alt="">
	              </v-avatar>
                <v-col class="ml-12 mt-n6" cols="12">
  	              <div class="ml-8 mt-n4" style="font-weight:bold;">{{data.name}} </div>
	              </v-col>
              </v-row>
	          </div>
	        </v-card>
        <!-- </v-col> -->
      	<!-- <v-carousel>
			    <v-carousel-item
			      v-for="(item, i) in process(team.length)"
			      :key="i">
			      <v-sheet
			        :color="item.color"
			        height="100%"
			        tile>
			        <v-row
			        class="fill-height"
			          align="center"
			          justify="center">
			          <v-col v-for="data in team.slice(item.number-1, item.number+2)" :key="item.id">     
					        <v-card style="height:100%" elevation="10" data-aos="fade-up">
					          <v-card-text style="font-weight:bold">
					            <div>
					              {{data.text}}
					            </div>
					          </v-card-text>
					          <div class="light-blue lighten-2">
					            
					            <v-row style="height:130px;" class="mx-12 mt-12">
					              <v-avatar width="80" height="80" class="mt-n6">
					                <img
					                  :src="data.url"
					                  alt="">
					              </v-avatar>
					              <div class="ml-10 mt-6" style="font-weight:bold">{{data.name}} </div>
					            </v-row>
					          </div>
					        </v-card>
				        </v-col>
			        </v-row>
			      </v-sheet>
			    </v-carousel-item>
			  </v-carousel> -->
      </v-row>
    </v-container>
	</div>
</template>

<script>
	export default {
		name: 'Team',
		components: {

		},
		data () {
			return {
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
				team: [
          {
            text: 'Merupakan ahli geofisika dari Institut Teknologi Bandung. Berpengalaman dalam mengerjakan berbagai macam project survey Geofisika seperti Georadar, Geolistrik, Seismik, CSAMT, Gravity dan Magnetik untuk mencitrakan bawah permukaan. Beberapa kasus project yang pernah dikerjakan antara lain: Pemetaan utilitas bawah permukaan, investigasi stratigrafi dan struktur geologi, investigasi kedalaman pile, serta eksplorasi air tanah dan mineral.',
            url: require('../assets/Aksan.jpg'),
            name: 'M Aksan Muzakir S.T.'
          },
          {
            text: 'Mendalami bidang Penilaian dan Pemetaan dengan simulasi pada gambar, saat ini sedang mendalami jenjang pendidikan Teknik Sipil. Sangat menyukai matematika ini berharap dapat menjadi Tenaga Ahli yang handal dan dipercaya oleh perusahaan.',
            add: '<span style="opacity:0;">This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible</span>',
            url: require('../assets/Dera.jpg'),
            name: 'Dera Saraswati S.T'
          },
          {
            text: 'Magister Keuangan Bisnis dan Master Ekonomi dari Gajah Mada Universitas serta Jurusan Teknik Mesin dari Institut Teknologi Bandung. Beliau sebagai Penilai Publik berijin tahun 2018 dengan pengalaman selama lebih dari 25 tahun.',
            add: '<span style="opacity:0;">This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible</span>',
            url: require('../assets/Hardinal.jpg'),
            name: 'Ir. Hardinal MM.,M.Ec. Dev'
          },
          {
            text: 'Teknik Perencanaan Wilayah dan Kota, Institut Teknologi Indonesia Serpong, Banten beliau adalah ahli Perencanaan Wilayah dan Kota Madya, Ikatan Ahli Perencanaan Indonesia (IAP DKI 31-41077, IAP Banten)',
            add: '<span style="opacity:0;">This wewew sentence is invisible This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible, This sentence is invisible</span>',
            url: require('../assets/Tiar.jpeg'),
            name: 'Tiar Pandapotan Purba, S.T, IAP'
          }

        ]
			}
		},
		created () {
			
		},
		methods: {
			process (number) {
				let colors = [
          'indigo',
          'deep-purple lighten-5',
          'deep-purple lighten-4',
          'indigo lighten-4',
          'blue lighten-4',
          'indigo',
          'deep-purple lighten-5',
          'deep-purple lighten-4',
          'indigo lighten-4',
          'blue lighten-4',
        ]
				let initial = 1
				let newData = []
				for (initial; initial<=number; initial+=3) {
					let item = {
						number: initial,
						color: colors[initial]
					}
					newData.push(item)
				}
				return newData
			},
			// carousel () {
		 //    var swiper = new Swiper('.swiper-container', {
		 //      slidesPerView: 3,
		 //      spaceBetween: 30,
		 //      pagination: {
		 //        el: '.swiper-pagination',
		 //        clickable: true,
		 //      },
		 //    })
		 //    swiper.init()
			// }
		}
	}
</script>
<style scoped>
  .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
	
</style>