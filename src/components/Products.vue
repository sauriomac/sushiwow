<template>
  <div v-if="cargando">
    <Cargando />
  </div>
  <div v-else>
    <CartList :productos="getSushiAll" :title="'всі'" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CartList from "./Cartlist.vue";
import Cargando from "./Cargando.vue";
// import  Banner from "./Banner.vue"
export default {
  components: {
    CartList,
    Cargando,
    // Banner
  },

  computed: {
    ...mapGetters(["getSushiAll"]),
    ...mapState(["cargando"]),
  },
};
</script>