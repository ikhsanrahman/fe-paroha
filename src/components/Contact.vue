<template>
	<div>
		<navbar></navbar>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<v-container fluid>
			<v-row>
				<v-col cols="12" class="text-center">
					<h1>HUBUNGI KAMI</h1>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row justify="center">
				<v-col cols="12" sm="6" md="6">
					<v-form action="https://formspree.io/xpzaqjal" id="nativeForm" method="POST" v-model="valid">
					<v-row justify="center">
						<v-col cols="12" sm="6"  md="6">
							<v-text-field
		            v-model="form.nama"
		            label="Nama"
		            outlined
		            shaped
		            name="nama"
		          ></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-text-field
		            v-model="form.email"
		            label="Email"
		            outlined
		            shaped
		            name="email"
		          ></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-text-field
		            v-model="form.subjek"
		            label="Subjek"
		            outlined
		            shaped
		            name="subjek"
		          ></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-text-field
		            v-model="form.phone"
		            label="Phone"
		            outlined
		            shaped
		            name="phone"
		          ></v-text-field>
						</v-col>
						<v-col cols="12" sm="12" md="12">
							<v-textarea
			          label="Pesan"
			          v-model="form.pesan"
			          name="pesan"
			        ></v-textarea>
						</v-col>
					<!-- </v-row>
					<v-row justify="center"> -->
						<v-col>
						 <v-btn color="error" @click="submit" :disabled="!valid">Submit</v-btn>
						</v-col>
					</v-row>
					</v-form>
				</v-col>
				<v-col cols="12" sm="6" md="6">
					<v-row no-gutters>
						<v-icon style="font-size:50px">
						map
						</v-icon>
						<v-col style="font-size:18px;" class="ml-3 text-justify">
							The Walk Jakarta Garden City N0.38 Jl.Cakung Clincing 006/014 Cakung Timuer, Jakarta Timur - 13910
						</v-col>
					</v-row>
					<v-row no-gutters class="my-6">
						<v-icon style="font-size:50px" class="mb-4">phone_in_talk</v-icon>
						<v-col style="font-size:18px" class="ml-3 text-justify">
							<p>+6221 - 4614889</p>
							<p>+62822 - 133 64 777</p>
						</v-col>
					</v-row>
					<v-row no-gutters class="my-6">
						<v-icon style="font-size:50px" class="mb-4">email</v-icon>
						<v-col cols="12" md="6" sm="6" style="font-size:18px;font-weight:none" class="ml-3 text-justify">
							<p>topazconsulting@parohatopaz.id</p>
							<p>support@parohatopaz.id</p>
						</v-col>
					</v-row>
					<v-row class="text-center" >
						<v-col elevation="80">
							<v-btn fab large color="white">
								<i style="font-size:50px;color:blue" class="fab fa-facebook"></i>	
							</v-btn>
						</v-col>
						<v-col elevation="80">
							<v-btn fab large color="white">
								<i style="font-size:50px;color:blue" class="fab fa-instagram"></i>
							</v-btn>
						</v-col>
						<v-col elevation="80">
							<v-btn fab large color="white">
								<i style="font-size:50px;color:blue" class="fab fa-linkedin"></i>
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
		<hr class="mx-12">
		<footersupport></footersupport>
		<kaki></kaki>
	</div>	
</template>

<script>
import axios from 'axios'

import Navbar from './Navbar'
import kaki from './Footer.vue'
import Footersupport from './FooterSupport'
	export default {
		name: 'Contact',
		components: {
			Navbar,
			kaki,
			Footersupport
		},
		data () {
			return {
				valid: false,
				form: {
					nama: '',
					email: '',
					subjek: '',
					phone: '',
					pesan: ''
				}
			}
		},
		methods: {
			submit () {
				nativeForm.submit()
				// axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => {
				// 	console.log(res)
				// })
				// console.log(this.form)
				// axios.post('https://formspree.io/xpzaqjal', this.form).then(res => {
				// 	console.log('adgadg')
				// 	console.log(res)
				// 	this.form.nama = ''
				// 	this.form.email = ''
				// 	this.form.subjek = ''
				// 	this.form.phone = ''
				// 	this.form.pesan = ''
				// }).catch(err => {
				// 	console.log('test')
				// 	console.log(err)
				// })
			}
		}
	}

</script>