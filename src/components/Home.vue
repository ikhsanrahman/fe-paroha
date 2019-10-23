<template>
	<div>
		<navbar></navbar>
    <background></background>
    <profile></profile>
    <hr class="mx-12">
    <produkjasa></produkjasa>
    
    <team></team>
    <hr class="mx-12">
    <footersupport class="mt-12"></footersupport>
    <footerend></footerend>
    
	</div>
</template>


<script>

import AOS from 'aos'

import Navbar from './Navbar'
import Footersupport from './FooterSupport.vue'
import Footerend from './Footer.vue'
import Background from './Header.vue'
import Profile from './Profile.vue'
import Produkjasa from './ProdukJasa.vue'
import Team from './Team'

	export default {
		name: 'Single',
    components: {
      Navbar,
      Footersupport,
      Background,
      Profile,
      Produkjasa,
      Team,
      Footerend
      
    },
		data () {
			return {
				show: false,
				us: false,
        showNavbar: true,
        lastScrollPositon: 0,
            
			}
		},
    created () {
       AOS.init()
    },
	}
</script>
<style scoped>
.navbar {
  height: auto;
  width: 100vw;
  /* background: hsl(155, 31%, 50%); */
  background: rgb(233, 230, 230);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.profile {
    height: 100%;
  }
  .visi-misi {
    margin-left: 10%;
  }
  .sejarah {
    margin-left: 5%;
  }
  .image {
    margin-left:1%;
  }
  a {
    text-decoration: none;
  }
  .name {
    background: rgb(154, 154, 231);
  }

  
</style>