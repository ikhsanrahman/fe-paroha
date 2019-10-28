<template>
	<div>
		<v-container class="align-center" id="team">
      <v-row justify="center" class="my-12">
        <h1>MEET THE TEAM</h1>
      </v-row>
      <v-row no-gutters class="my-12" data-aos="fade-up">
        <v-col cols="12" md="3" xs="3" class="text-center my-6 ">
          <v-avatar width="250" height="270">
            <img
              src="@/assets/Tambun.jpg"
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
          <v-avatar width="250" height="270">
            <img
              src="../assets/Tallo.jpg"
              alt="tallo">
          </v-avatar>
          <h3 class="text-center mt-12">Armandus Jong Tallo</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Wakil Direktur Utama</h2>
          <br>
          <p class="text-justify mx-6">
            <b>AMANDUS JONG TALLO</b> Magister Perencaan Kota dan Daerah di Universitas Gajah Mada. Ahli dalam bidang Pemetaan di <b>BAPPENAS</b>, beliau juga aktif sebagai pengajar di Universitas Podomoro. Kesibukan sebagai presenter di IndoTV program Kim Talk.
          </p>
        </v-col>
        <v-col cols="12" md="3" xs="3" class="text-center my-6" data-aos="fade-up">
          <v-avatar width="250" height="270">
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
            <b>PANUTURI L. TOBING</b> Magister di Universitas Gajah Mada Jurusan Ekonomi Pembangunan. Sebagai Pencetus Pendirian <b>PT PAROHA TOPAZ SEJAHTERA</b> beliau menjabat sebagai Pimpinan dari KJPP PUNG’S Zulkarnain dan Rekan cabang Jakarta 1. Beliau juga aktif sebagai Ketua Bidang Pendidikan dan Wakil Sekretaris Jenderal di <b>Asosiasi Masyarakat Profesi Penilai Indonesia (MAPPI)</b>. Aktif sebagai CSA di <b>Badan Nasional Standarisasi Profesi Lembaga Sertifikasi Profesi (LSPPM) Pasar Modal dan Asosiasi Analis Efek Indonesia (AAEI)</b>, dan tenaga pengajar dalam bidang Penilaian yang digelutinya.
          </p>
        </v-col>
        <v-col cols="12" md="3" xs="3" class="text-center my-6" data-aos="fade-up">
          <v-avatar width="250" height="270">
            <img
              src="../assets/Robintang.jpg"
              alt="John">
          </v-avatar>
          <h3 class="text-center mt-12">Robintang Tua Simarmata</h3>
          <br>
          <hr class="mx-6">
          <br>
          <h2>Direktur Operasional</h2>
          <br>
          <p class=" text-justify mx-6">
            <b>ROBINTANG TUA SIMARMATA</b> Magister di Universitas Tama Jagakarsa Jurusan Manajemen Proyek. Partner Pendiri <b>PT PAROHA TOPAZ SEJAHTERA</b> ini paham mengenai operasional yang dibutuhkan dalam usaha. Lama bekerja dalam bidang Penjualan di Perbankan dan Penilai di Kantor Jasa Penilai Publik di PUNG’S ZULKARNAIN dan REKAN cabang Jakarta 1. Beliau dikenal sebagai partner yang murah senyum dan mengayomi karyawan dan rekan rekannya.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
        <i style="font-size:30px;color:blue" data-aos="fade-up" class="fas fa-circle mx-12"></i>
      </v-row>
      <v-row class="my-12 text-justify" >
      	<v-col v-for="data in team" :key="data.id">     
	        <v-card style="height:100%" elevation="10" data-aos="fade-up">
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
  	              <div class="ml-10 mt-n4" style="font-weight:bold;">{{data.name}} </div>
	              </v-col>
              </v-row>
	          </div>
	        </v-card>
        </v-col>
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
            text: 'Muhammad Aksan Muzakir merupakan lulusan ITB jurusan tehnik geofisika, berpengalaman dalam bidang geo-physical acquisition and processing services gaps. Mampu menulusuri perhitungan yang berada dalam dasar bumi dengan jaringan, pipa ataupun kadar kedalaman air yang dibutuhkan oleh perusahaan.',
            url: require('../assets/Aksan.jpg'),
            name: 'M Aksan Muzakir S.T.'
          },
          {
            text: 'Dera Saraswati S Tehnik, merupakan profesional tim kami yang mendalami bidang penilaian dan pemetaan dengan simulasi pada gambar, sangat menyukai matematika dan berharap menjadi tenaga ahli handal dan dipercaya oleh perusahaan.',
            add: '<span style="opacity:0;">This sentence is invisible</span>',
            url: require('../assets/Dera.jpg'),
            name: 'Dera Saraswati S.T'
          },
          {
            text: 'Magister di bidang manajemen dan ekonomi bisnis di UGM, kelahiran tahun 1966 ini terjun ke lapangan sudah lebih dari 28 tahun. Bidang keahlian project engineering dan sebagai penilai publik pada tahun 2018.',
            add: '<span style="opacity:0;">This sentence is invisible</span> <span style="opacity:0;">This sentence is invisible</span>',
            url: require('../assets/Hardinal.jpg'),
            name: 'Prof.Dr.Hardinal M.Sc'
          },
          {
            text: 'Teknik Perencanaan Wilayah dan Kota, Institut Teknologi Indonesia Serpong, Banten beliau adalah ahli Perencanaan Wilayah dan Kota Madya, Ikatan Ahli Perencanaan Indonesia (IAP DKI 31-41077, IAP Banten)',
            add: '<span style="opacity:0;">This sentence is invisible</span> <span style="opacity:0;">This sentence is invisible</span>',
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