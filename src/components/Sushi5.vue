<template>
<div v-if="cargando">
  <Cargando/>
</div>
<div v-else>
  <CartList :productos="getSushi5" :title="'Суші нігірі'"/>
</div>

</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CartList from './Cartlist.vue';
import Cargando from './Cargando.vue';
  export default {
    async mounted() {
   await this.$store.dispatch("fetchData")
   
  
  },
    
  components: {
    CartList,Cargando
  },
  computed: {
    ...mapGetters([
      'getSushi5',
    ]),
    ...mapState([
      'cargando',
    ]),
  },
};
</script>