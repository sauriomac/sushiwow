<template>
  <transition name="fade">
    <div id="modal-xl" size="xl" scrollable no-fade hide-backdrop>
      <Cartlistmodal addtocheck="addtocheck" />
      <div>
        <template v-if="cartTotal > 0">
          <button
            class="btn-lg btn-block btn-dark text-white block px-5 text-center"
            @click.prevent="goToDetails"
          >
            Checkout
            <b class="cart-total">{{ cartTotal | currency }}</b>
          </button>
        </template>
        <template v-else>
          <div class="text-center">
            <h4 class="bg-dark text-white text-center">
              carro compras esta vacio
            </h4>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Cartlistmodal from "@/components/Cartlistmodal.vue";

export default {
  name: "Modal",
  components: {
    Cartlistmodal,
  },

  computed: {
    ...mapGetters(["cartTotal"]),
  },
  methods: {
    goToDetails() {
      this.$router.push("/Checkout");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>