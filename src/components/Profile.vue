<template>
	<div>
	<!-- <navbar/> -->
<!-- 	<br>
	<br>
	<br>
	<br>
	<br>
	<br> -->
		<v-container fluid class=" my-12" id="sejarah">    
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <h1 style="color:red;">TENTANG KAMI</h1> 
        </v-col>
      </v-row>
      <br>
      <v-row no-gutters justify="center" class="mb-n12 mt-12">
        <v-col style="margin-left:10%" cols="10" md="4" class="d-none d-lg-block">
          <img src="@/assets/hendra.jpg" height="80%" width="80%" alt=""> 
        </v-col>
        <v-col style="margin-left:17%" cols="10" class="d-lg-none text-justify" justify="center">
          <img src="@/assets/hendra.jpg" class="" height="80%" width="80%" alt=""> 
        </v-col>
        <v-col cols="10" md="6" id="sejarah" class="text-justify">
          <h1>SEJARAH</h1>  
          <h3 style="color:red" class="mt-8">
            Kami fokus bergerak dalam bidang jasa konsultasi dengan mengikuti kebutuhan banyaknya perusahaan dengan tenaga ahli yang diminati
          </h3>
          <br>
          <p>
            Layanan jasa yang membantu perusahaan anda dalam pengembangan pertanian dan pedesaan, jasa studi, penelitian dan bantuan teknik, keuangan, konsultasi manajemen maupun jasa khusus
          </p>
          <br>
          <p>
            PT Paroha Topaz Sejahtera berdiri pada tanggal 11 Februari 2019, no.7 berdasarkan akta notaris H.Sukirno, Perusahaan ini fokus bergerak dalam bidang jasa konsultasi dengan mengikuti kebutuhan banyaknya perusahaan dengan tenaga ahli yang diminati
          </p>
          <br>
          <p>
            <b>PT Paroha Topaz Sejahtera</b> memperoleh izin dengan <b>KADIN</b> dan <b>INKINDO</b>. Mulai bulan Juni 2019, badan usaha yang mengembangkan pertanian dan pedesaan, studi studio, penelitian dan bantuan teknik, keuangan, konsultasi manajemen maupun jasa khusus.
          </p>
        </v-col>
      </v-row>
      <v-row class="visi text-justify mt-8 d-none d-lg-block" id="visiMisi" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <v-col >
          <h2 >VISI</h2>
          <p>Menjadi Perusahaan nasional yang kompetitif, andal dan terpercaya di bidang pemetaan, inspeksi, sertifikasi, konsultasi dan pelatihan</p>
          <p>Mewujudkan Lembaga Pelatihan sebagai wahana pendidikan yang memberikan layanan pelatihan kepada masyarakat untuk meningkatkan pengetahuan, ketrampilan, dan sikap yang dapat bermanfaat untuk mengembangkan potensi diri dalam bekerja, ataupun meningkatkan kemampuan kewirausahaan.</p>
        </v-col>
      </v-row>
      <v-row class="misi text-justify d-none d-lg-block" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <v-col>
          <h2>MISI</h2>
          <p>
            Menciptakan Nilai Ekonomi kepada para pemangku kepentingan, terutama pelanggan melalui layanan jasa inspeksi, pemetaan, sertifikasi, konsultasi serta jasa terkait lainnya untuk menjamin kepastian berusaha
          </p>
          <p>
            untuk meningkatkan ketersediaan pendidikan dan perluasan akses pelatihan yang merata, terjangkau untuk seluruh lapisan masyarakat di bidangnya, mewujudkan kualitas/mutu dan relevansi pelatihan yang unggul bekerjasama dengan profesional dan lembaga terkait serta meningkatkan potensi sumber daya manusia yang produktif berkarakter, memiliki daya saing dan kreatif dibidangnya.
          </p>
        </v-col>
      </v-row>
      <v-row class=" mt-8 ml-4 d-lg-none" id="visiMisi" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <v-col cols="11" class="text-justify" md="6">
          <h2 >VISI</h2>
          <p>Menjadi Perusahaan nasional yang kompetitif, andal dan terpercaya di bidang pemetaan, inspeksi, sertifikasi, konsultasi dan pelatihan</p>
          <p>Mewujudkan Lembaga Pelatihan sebagai wahana pendidikan yang memberikan layanan pelatihan kepada masyarakat untuk meningkatkan pengetahuan, ketrampilan, dan sikap yang dapat bermanfaat untuk mengembangkan potensi diri dalam bekerja, ataupun meningkatkan kemampuan kewirausahaan.</p>
        </v-col>
      </v-row>
      <v-row class="ml-4 d-lg-none" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <v-col cols="11" class="text-justify" md="6">
          <h2>MISI</h2>
          <p>
            Menciptakan Nilai Ekonomi kepada para pemangku kepentingan, terutama pelanggan melalui layanan jasa inspeksi, pemetaan, sertifikasi, konsultasi serta jasa terkait lainnya untuk menjamin kepastian berusaha
          </p>
          <p>
            untuk meningkatkan ketersediaan pendidikan dan perluasan akses pelatihan yang merata, terjangkau untuk seluruh lapisan masyarakat di bidangnya, mewujudkan kualitas/mutu dan relevansi pelatihan yang unggul bekerjasama dengan profesional dan lembaga terkait serta meningkatkan potensi sumber daya manusia yang produktif berkarakter, memiliki daya saing dan kreatif dibidangnya.
          </p>
        </v-col>
      </v-row>
    </v-container>
	</div>
</template>

<script>
	// import Navbar from './Navbar'
	export default {
		// name: 'TentangKami',
	    props: [ 'sejarah', 'visiMisi'],
		components: {
			// Navbar
		},
		
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	.profile {
		height: 100%;
	}
	.visi {
		margin-left: 10%;
	}
  .misi {
    margin-left: 10%;
  }
	.sejarah {
		margin-left: 5%;
	}
	.image {
		margin-left:1%;
	}
</style>