<template>
	<div>
		<v-container class="align-center" id="team">
      <v-row justify="center" class="my-12">
        <h1>MEET THE TEAM</h1>
      </v-row>
      <v-row no-gutters class="my-12" data-aos="fade-up">
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
        <v-col class="text-center my-6" data-aos="fade-up">
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
        <v-col class="text-center my-6" data-aos="fade-up">
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
        <v-col class="text-center my-6" data-aos="fade-up">
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
      <v-row class="my-12 text-justify" >
      	<v-col v-for="data in team" :key="data.id">     
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