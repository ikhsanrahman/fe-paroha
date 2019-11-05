<template>
	<v-container class="header d-flex align-center" fluid>
		<v-row class="ml-12">
			<v-col cols="12" style="font-size:25px">
				<h1>Jasa <span style="color:red">Konsultasi</span> </h1>
				<h2>dengan Tim Profesional</h2>
				<br>
				<v-btn color="error"><a href="/#support" title="">Support </a></v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'Header',
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.header {
    background: url('../assets/Gambar-1.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    height: 890px;
  }
  a {
  	text-decoration: none;
  }
</style>