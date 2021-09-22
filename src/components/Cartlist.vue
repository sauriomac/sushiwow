<template>
  <transition name="fade">
    <div id="principal" class="principal mt-5">
      <div class="titulo">
        <h1 class="text-warning">{{ title }}</h1>
      </div>
      <div class="contenedor">
        <div
          class="col-md-3 col-xs card p-0 shadow"
          v-for="(item, id) in productos"
          v-bind:key="id"
        >
          <img class="card-img-top" v-bind:src="item.imgURL" alt="" />
          <div class="card-body">
            <router-link to="/ProductDetail">
              <h5
                class="card-title text-warning font-weight-bold"
                @click="addtodetail(item)"
              >
                {{ item.nombre }}
              </h5>
            </router-link>
            <small class="card-text text-white">
              {{ item.description }}
            </small>
            <h5 class="card-text text-warning font-weight-bold">
              {{ item.precio | currency }}
            </h5>
            <button
              class="btn bg-white text-red font-weight-bold"
              @click="addtocart(item)"
            >
              В КОРЗИНУ +
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["productos", "title"],
  name: "CartList",

  computed: {},

  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    ...mapActions(["AddProduct"]),

    addtocart(item) {
      this.ADD_TO_CART(item);
    },
    addtodetail(item) {
      this.AddProduct(item);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
