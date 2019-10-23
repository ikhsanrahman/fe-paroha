<template>
  <div>
    <v-container class="my-12" id="produk">
      <v-row justify="center">
        <h1>Produk dan Jasa</h1>
      </v-row>
      <v-row>
        <v-card
          class="mx-auto my-6 text-justify"
          width="400"
          height="auto"
          v-for="content in data"
          :key="content.id"
          data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <br>
          <v-img
            class="mx-auto mt-12"
            height="100px"
            width="100px"
            :src="content.url">
          </v-img>
          <br>
          <v-card-subtitle class="pl-4 mt-6" style="font-weight:bold">{{content.title}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{content.description}}</div>
            <div v-for="add in content.point" :key="add.id" class="mt-4 ml-2">
              <v-row>
                <i class="material-icons">
                add
                </i>
                <h4>{{add}}</h4>
              </v-row>
            </div>
          </v-card-text>
            <v-btn class="float-right"
              color="orange"
              text>
              Detail...
            </v-btn>
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