<template>
	<div>
	<navbar style="z-index:99"></navbar>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<v-container class="align-center">
		<v-row justify="center" class="mt-12">
			<h1>MEET THE TEAM</h1>
		</v-row>
		<v-row no-gutters class="mt-12">
			<v-col sm="3" class="text-center">
				<v-avatar width="250" height="250">
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
	    <v-col sm="3" class="text-center">
		    <v-avatar width="250" height="250">
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
	    <v-col sm="3" class="text-center">
		    <v-avatar width="250" height="250">
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
	    <v-col sm="3" class="text-center">
		    <v-avatar width="250" height="250">
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
		<v-row class="mt-12">
			<v-col v-for="item in team" :key="item.id">			
			<v-card style="height:100%" elevation="10" >
				<v-card-text style="font-weight:bold">
					<div>
						{{item.text}}
					</div>
				</v-card-text>
				<div style="background:blue">
					
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
	</div>
</template>

<script>
	import Navbar from './Navbar'
	export default {
		name: 'Team',
		components: {
			Navbar
		},
		data () {
			return {
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
		}
	}
</script>