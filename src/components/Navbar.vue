<template>
	<div>
		<v-container fluid class="transparent" style="background:none;position:fixed;box-shadow:5px 5px 18px #888888">
      <v-row class="transparent">
        <v-col>
          <v-row class="mx-auto" justify="start" >
            <img src="@/assets/paroha.png" width="120px" height="100px" alt="">
            <h4 class="mt-10">PT PAROHA TOPAZ SEJAHTERA</h4>
          </v-row>    
        </v-col>
        <v-col class="d-none d-lg-block">
          <v-row no-gutters>
            <v-col>
              <v-row no-gutters>
              <i class="material-icons">
                phone
              </i>
              <h4>+62-811 1012 117</h4>
              </v-row>
            </v-col>
            <v-col sm="4">
              <v-row no-gutters>
                <i class="material-icons">
                  email
                </i>
                <h4>support@paroha.id</h4>
              </v-row>
            </v-col>
            <v-col sm="4">
              <v-row no-gutters>
                <i class="material-icons">
                  access_time
                </i>
                <h4>Senin - Jumat : 09.00 sd 18.00 WIB</h4>
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
              <v-expansion-panel>
                <v-expansion-panel-header hide-actions @click="profile">Sejarah</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions @click="profile">Visi Misi</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions @click="team">Tim Kami</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
              </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
            <v-col>
              <v-btn text color="primary" @click="produk">PRODUK & JASA</v-btn>
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
    <v-container fluid style="position:fixed" class="pr-4 mt-10">
      <v-row justify="end">
        <v-app-bar-nav-icon class="d-lg-none blue" @click="show=!show"></v-app-bar-nav-icon>
        <v-expansion-panels class="d-lg-none" v-show="show">
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="home">HOME</v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Tentang Kami</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-expansion-panel-header hide-actions @click="profile">Sejarah</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions @click="profile">Visi Misi</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions @click="team">Tim Kami</v-expansion-panel-header>
                <v-expansion-panel-header hide-actions>Legalitas</v-expansion-panel-header>
              </v-expansion-panel-content>
           </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="produk">PRODUK & JASA</v-expansion-panel-header>
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
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data () {
			return {
				show: false,
				us: false,
			}
		},
		methods: {
			profile () {
				this.$router.push({name:'profile'}).catch(err => {})
			},
			home () {
				this.$router.push({name:'home'}).catch(err => {})
			},
      team () {
        this.$router.push({name:'team'})
      },
      produk () {
        this.$router.push({name:'produk'})
      }
		}
	}
</script>