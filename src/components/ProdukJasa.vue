<template>
  <div>
    <v-container class="my-12" id="produk">
      <v-row justify="center">
        <h1>Produk dan Jasa</h1>
      </v-row>
      <v-row justify="center">
        <v-card
          class="mx-10 mt-4 mb-6 text-justify"
          width="500"
          height="auto"
          v-for="content in data"
          :key="content.id"
          data-aos="fade-up">
          <br>
          <v-img
            class="mx-auto"
            height="22%"
            width="65%"
            :src="content.url">
          </v-img>
          <br>
          <v-card-subtitle  style="font-weight:bold;width:40px">
            <p class="mt-0 mx-4">{{content.title}}</p></v-card-subtitle>

          <v-card-text class="text--primary mb-12" style="font-size:90%">
            <div>{{content.description1}}</div>
            <br>
            <div class="">{{content.description2}}</div>
            <br>
            <br>
          </v-card-text>
          <!-- <v-btn class="float-right"
            color="orange"
            text>
            Detail...
          </v-btn> -->
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'ProdukJasa',
    components: {
      // Navbar
    },
    data () {
      return {
        data: [
          {
            url: require('@/assets/cons.png'),
            title: 'PEMETAAN BAWAH TANAH',
            description1: 'Infrastruktur di bawah permukaan sedang mengalami eskalasi di Indonesia. Contoh-contoh dari infrastruktur tersebut antara lain pembangunan MRT, pemindahan utilitas dari upperground menjadi underground, dan lain sebagainya. Akan tetapi, sebelum kegiatan kegiatan pembangunannya diperlukan data-data eksisting dari utilitas atau struktur yang ada di bawah permukaan agar dapat dibuatkan Design engineering Detail (DED) yang tidak mengenai objek-objek tersebut yang dapat menyebabkan kerugian yang tidak sedikit. Oleh karena itu, georadar hadir sebagai solusi untuk memetakan objek-objek tersebut. Pemilihan metode ini berdasarkan kemampuannya dalam melakukan penetrasi dan pencitraan berbagai macam kondisi benda-benda di bawah permukaan dengan baik.',
            description2: 'Ground Penetrating Radar (GPR) atau dikenal sebagai georadar adalah salah satu metode geofisika yang mempelajari kondisi bawah permukaan berdasarkan sifat elektromagnetik dengan menggunakan gelombang radio yang mempunyai rentang frekuensi antara 1-1000 MHz dan dapat mendeteksi parameter permitivitas listrik (ε), konduktivitas (σ) dan permeabilitas magnetik (μ). GPR dapat disebut juga dengan metode refleksi elektromagnetik karena memanfaatkan sifat radiasi elektromagnetik yang memperlihatkan refleksi separti pada metode gelombang seismik. GPR digunakan dalam berbagai aplikasi, termasuk stratigrafi tanah, studi air tanah, pemetaan fracture bedrock dan penentuan kedalaman dari permukaan air tanah. Prinsip kerja alat GPR yaitu dengan mentransmisikan gelombang radar (Radio Detection and Ranging) ke dalam medium target dan selanjutnya gelombang tersebut dipantulkan kembali ke permukaan dan diterima oleh alat penerima radar (receiver), dari hasil refleksi itulah barbagai macam objek dapat terdeteksi dan terekam dalam radargram.'
          },
          {
            url: require('@/assets/map.png'),
            title: 'PEMETAAN TANAH  BERBASIS SISTEM INFORMASI GEOGRAFIS',
            description1: 'Kebutuhan pendataan, pengelolaaan dan pemanfatan bidang tanah, perlu dikelompokan dalam suatu zona tertentu. Daerah yang menggambarkan nilai tanah yang relatif sama, dengan batas nyata imajiner atau pun sesuai nyata penggunaan tanah dinamakan Zona NilaiTanah(ZNT).',
            description2: 'ZNT dapat digunakan untuk menentukan tarif dalam pelayanan pertanahan, referensi masyarakat dalam transaksi, penggantian ganti rugi, inventaris nilai aset publik dan aset masyarakat, pemantauan nilai tanah dan pasar tanah, dan referensi penetapan Nilai Jual Pajak Rute (NJOP) untuk PBB. Indikasi nilai tanah rata-rata dapat dipetakan secara spasial melalui metode survei teresterial dan Fogrametrik, dan dapat dianalisis agar memberikan informasi yang bermanfaat.',
            point: [ 'Engineering Management', 'IT Consultant', 'Geometric Training']
          },
          {
            url: require('@/assets/edu.png'),
            title: 'MEMBANGUN DESA WISATA',
            description1: 'pariwisata telah menjadi sektor tercepat dalam perkembangannya sebagai salah satu aktifitas ekonomi dunia dan salah satu kunci penting untuk pembangunan wilayah di suatu negara dan peningkatan kesejahteraan bagi masyarakat. Sektor Pariwisata telah mengalami ekspansi dan diversifikasi berkelanjutan, dan menjadi salah satu  sektor ekonomi yang terbesar dan tercepat pertumbuhannya di dunia. Dukungan masyarakat melalui peran dan fungsinya dalam kegiatan pariwisata. Setiap wilayah memiliki karakteritisk alam, sosial dan budaya yang dapat di wisatakan guna meningkatkan daya saing desa dalam menghadapi tantangan pembangunan dimasa milenial.',
            point: [ 'Engineering Management', 'IT Consultant', 'Geometric Training']
          }
        ],
      }
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
          let newData = {
            number: initial,
            color: colors[initial]
          }
          newData.push(newData)
        }
        return newData
      }
    }
  }
</script>