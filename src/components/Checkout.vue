<template>
  <div class="mb-5">
    <h1 class="text-warning mt-3 ">Оформлення замовлення</h1>
    <div class="col-12 ">
      <Cartlist />
      <li class="list-group-item list-group-item-warning mx-5-auto px-5"><b class="cart-total">Total: {{ cartTotal |
          currency }}</b></li>
    </div>

    <hr />
    <button class="btn btn-danger mb-3" @click="()=>{
                  const fun = deleteCart;
                  const fon = alertSucess;
                    fun();
                    fon();}">Замовити
    </button>

  </div>
</template>

<script>
  import Cartlist from "@/views/CartList.vue";
  import { mapMutations, mapState, mapGetters } from "vuex";
  export default {
    components: {
      Cartlist
    },

    computed: {
      ...mapState(["showmodalalert"]),
      ...mapGetters(["cartTotal"]),
    },
    methods: {
      ...mapMutations(["SetCheckout"]),
      deleteCart(item) {
        this.SetCheckout(item);
        this.$router.push('/');

      },
      alertSucess() {
        this.$alert(
          "Thanks for your Orden",
          "Success",
          "success"
        ).then(() => console.log("Closed"));
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>