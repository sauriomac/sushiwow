<template>
  <div class="contenedor">
    <div class="media my-1 mx-5">
      <img
        v-bind:src="getAddProduct.imgURL"
        class="align-self-center mr-3"
        alt="{{}}"
        width="50%"
      />
      <div class="media-body">
        <h1 class="mt-1 text-warning">{{ getAddProduct.nombre }}</h1>
        <p>{{ getAddProduct.description }}</p>
        <h2 class="mt-4 text-warning">{{ getAddProduct.precio | currency }}</h2>
        <button
          class="btn bg-white text-red font-weight-bold"
          @click="addtocart(getAddProduct)"
        >
          В КОРЗИНУ +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  components: {  },
  computed: {
    ...mapGetters(["getAddProduct"]),
    ...mapState(["cargando"]),
  },

  methods: {
    ...mapMutations(["ADD_TO_CART"]),

    addtocart(getAddProduct) {
      this.ADD_TO_CART(getAddProduct);
    },
  },
};
</script>

<style lang="scss" scoped></style>
