<template>
	<div>
    <navbar/>
		<background/>
	</div>
</template>

<script>
import Background from '@/components/Header'
import Navbar from '@/components/Navbar'

	export default {
		name: 'Homepage',
		components: {
      Navbar,
			Background
		},
		data () {
			return {

			}
		},
		methods: {
			
		}
	}
</script>