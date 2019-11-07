<template>
	<div>
		<v-footer
    dark
    padless>
    <v-card
      class="flex red"
      flat
      tile>
      <v-card-title class="ml-12">
      	<i class="material-icons mb-5 mr-6 d-none d-lg-block" style="font-size:30px">copyright</i>
				<p class="d-none d-lg-block">{{ new Date().getFullYear() }} — <strong>PT Paroha Topaz Sejahtera</strong></p>
        <i class="material-icons mb-2 ml-n12 d-lg-none" style="font-size:20px">copyright</i>
        <p class="d-lg-none mt-2" style="font-size:12px">{{ new Date().getFullYear() }} — <strong>PT Paroha Topaz Sejahtera</strong></p>
        <!-- <strong class="subheading">Get connected with us on social networks!</strong> -->
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 mb-2"
          dark
          icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <!-- <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Paroha</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>
	</div>	
</template>

<script>
	export default {
		data () {
			return {
				icons: [
          'fab fa-facebook',
          // 'fab fa-twitter',
          // 'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram',
        ],
			}
		}
	}
</script>