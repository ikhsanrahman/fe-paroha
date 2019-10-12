<template>
	<div>
		<navbar/>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<v-container class="mt-12">
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
			      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
			      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
			    </v-img>
			    <br>
			    <v-card-subtitle class="pl-4 mt-6" style="font-weight:bold">{{content.title}}</v-card-subtitle>

			    <v-card-text class="text--primary">
			      <div>{{content.description}}</div>
			      <div v-for="add in content.point" class="mt-4 ml-2">
			      	<v-row>
				      	<i class="material-icons">
								add
								</i>
								<h4>{{add}}</h4>
							</v-row>
			      </div>

			      <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
			    </v-card-text>

			    <!-- <v-card-actions> -->
			      <!-- <v-btn
			        color="orange"
			        text>
			        Share
			      </v-btn> -->

			      <v-btn class="float-right"
			        color="orange"
			        text>

			        Detail...
			      </v-btn>
			    <!-- </v-card-actions> -->
			  </v-card>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Navbar from './Navbar'
	export default {
		name: 'ProdukJasa',
		components: {
			Navbar
		},
		data () {
			return {
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
				]
			}
		}
	}
</script>